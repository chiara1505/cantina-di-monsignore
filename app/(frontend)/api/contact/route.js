import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  buildContactEmailContent,
  getContactFromEmail,
  getContactToEmail,
  parseContactRequest,
} from '@/lib/contactEmail'

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY?.trim()

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'Servizio contatti non configurato. Riprova più tardi.' },
      { status: 503 },
    )
  }

  let body

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Richiesta non valida.' }, { status: 400 })
  }

  const parsed = parseContactRequest(body)

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 })
  }

  const { subject, text, html } = buildContactEmailContent(parsed.data)
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: `Cantina di Monsignore <${getContactFromEmail()}>`,
      to: [getContactToEmail()],
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error('Contact email error:', error)
      return NextResponse.json(
        {
          ok: false,
          error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci telefonicamente.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      message: 'Messaggio inviato. Ti risponderemo al più presto.',
    })
  } catch (error) {
    console.error('Contact email exception:', error)
    return NextResponse.json(
      {
        ok: false,
        error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci telefonicamente.',
      },
      { status: 500 },
    )
  }
}
