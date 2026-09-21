import { getReservationFromEmail, getReservationToEmail } from '@/lib/reservationEmail'

export function getContactToEmail() {
  return process.env.CONTACT_TO_EMAIL?.trim() || getReservationToEmail()
}

export function getContactFromEmail() {
  return process.env.CONTACT_FROM_EMAIL?.trim() || getReservationFromEmail()
}

/**
 * @param {Record<string, unknown>} body
 */
export function parseContactRequest(body) {
  const honeypot = String(body.company ?? '').trim()
  if (honeypot) {
    return { ok: false, error: 'Richiesta non valida.' }
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const message = String(body.message ?? '').trim()
  const privacyConsent =
    body.contactPrivacyConsent === true || body.contactPrivacyConsent === 'yes'

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

  if (!message || message.length < 5) {
    return { ok: false, error: 'Inserisci un messaggio.' }
  }

  return {
    ok: true,
    data: { name, email, phone, message },
  }
}

/**
 * @param {{
 *   name: string,
 *   email: string,
 *   phone: string,
 *   message: string,
 * }} contact
 */
export function buildContactEmailContent(contact) {
  const subject = `Messaggio dal sito - ${contact.name}`

  const lines = [
    'Nuovo messaggio dal form Contatti del sito web.',
    '',
    `Nome: ${contact.name}`,
    `Email: ${contact.email}`,
    `Telefono: ${contact.phone}`,
    '',
    'Messaggio:',
    contact.message,
    '',
    'Rispondere al cliente per email.',
  ]

  const text = lines.join('\n')
  const html = lines
    .map((line) => (line ? `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>` : '<br />'))
    .join('')

  return { subject, text, html }
}
