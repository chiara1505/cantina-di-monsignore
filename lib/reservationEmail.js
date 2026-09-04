import { SITE_CONTACT_INFO } from '@/lib/siteNavigation'

export const DEFAULT_RESERVATION_TO_EMAIL = SITE_CONTACT_INFO.email

/** Mittente Resend: senza dominio verificato usare onboarding@resend.dev */
export const DEFAULT_RESERVATION_FROM_EMAIL = 'onboarding@resend.dev'

export function getReservationToEmail() {
  return process.env.RESERVATION_TO_EMAIL?.trim() || DEFAULT_RESERVATION_TO_EMAIL
}

export function getReservationFromEmail() {
  return process.env.RESERVATION_FROM_EMAIL?.trim() || DEFAULT_RESERVATION_FROM_EMAIL
}

/**
 * @param {Record<string, unknown>} body
 */
export function parseReservationRequest(body) {
  const honeypot = String(body.company ?? '').trim()
  if (honeypot) {
    return { ok: false, error: 'Richiesta non valida.' }
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const guests = String(body.guests ?? '').trim()
  const date = String(body.date ?? '').trim()
  const time = String(body.time ?? '').trim()
  const highchair = String(body.highchair ?? '').trim()
  const notes = String(body.notes ?? '').trim()
  const privacyConsent = body.bookingPrivacyConsent === true || body.bookingPrivacyConsent === 'yes'

  if (!privacyConsent) {
    return { ok: false, error: 'Devi accettare la Privacy Policy e la Cookie Policy.' }
  }

  if (!name || name.length < 2) {
    return { ok: false, error: 'Inserisci nome e cognome.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Inserisci un indirizzo email valido.' }
  }

  if (!phone || phone.length < 6) {
    return { ok: false, error: 'Inserisci un numero di telefono valido.' }
  }

  if (!guests || Number.isNaN(Number(guests)) || Number(guests) < 1) {
    return { ok: false, error: 'Seleziona il numero di persone.' }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false, error: 'Seleziona una data valida.' }
  }

  if (!/^\d{2}:\d{2}$/.test(time)) {
    return { ok: false, error: 'Seleziona un orario valido.' }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      guests,
      date,
      time,
      highchair: highchair || 'Non specificato',
      notes,
    },
  }
}

function formatItalianDate(isoDate) {
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

/**
 * @param {{
 *   name: string,
 *   email: string,
 *   phone: string,
 *   guests: string,
 *   date: string,
 *   time: string,
 *   highchair: string,
 *   notes: string,
 * }} reservation
 */
export function buildReservationEmailContent(reservation) {
  const subject = `Nuova richiesta prenotazione - ${reservation.name} (${formatItalianDate(reservation.date)} ${reservation.time})`

  const lines = [
    'Nuova richiesta di prenotazione tavolo dal sito web.',
    '',
    `Nome: ${reservation.name}`,
    `Email: ${reservation.email}`,
    `Telefono: ${reservation.phone}`,
    `Persone: ${reservation.guests}`,
    `Data: ${formatItalianDate(reservation.date)}`,
    `Orario: ${reservation.time}`,
    `Seggioloni: ${reservation.highchair}`,
    reservation.notes ? `Note: ${reservation.notes}` : 'Note: —',
    '',
    'Contattare il cliente per confermare la prenotazione.',
  ]

  const text = lines.join('\n')
  const html = lines
    .map((line) => (line ? `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>` : '<br />'))
    .join('')

  return { subject, text, html }
}
