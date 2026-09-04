import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  buildReservationEmailContent,
  getReservationFromEmail,
  getReservationToEmail,
  parseReservationRequest,
} from '@/lib/reservationEmail'

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY?.trim()

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'Servizio prenotazioni non configurato. Riprova più tardi.' },
      { status: 503 },
    )
  }

  let body

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Richiesta non valida.' }, { status: 400 })
  }

  const parsed = parseReservationRequest(body)

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 })
  }

  const { subject, text, html } = buildReservationEmailContent(parsed.data)
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: `Cantina di Monsignore <${getReservationFromEmail()}>`,
      to: [getReservationToEmail()],
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error('Reservation email error:', error)
      return NextResponse.json(
        { ok: false, error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci telefonicamente.' },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      message:
        'Richiesta inviata. Ti contatteremo al più presto per confermare la prenotazione.',
    })
  } catch (error) {
    console.error('Reservation email exception:', error)
    return NextResponse.json(
      { ok: false, error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci telefonicamente.' },
      { status: 500 },
    )
  }
}
