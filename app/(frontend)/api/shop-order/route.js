import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  buildShopOrderEmailContent,
  getShopOrderFromEmail,
  getShopOrderToEmail,
  parseShopOrderRequest,
} from '@/lib/shopOrderEmail';

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'Servizio ordini non configurato. Riprova più tardi o contattaci su WhatsApp.' },
      { status: 503 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Richiesta non valida.' }, { status: 400 });
  }

  const parsed = parseShopOrderRequest(body);

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const { subject, text, html } = buildShopOrderEmailContent(parsed.data);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Cantina di Monsignore <${getShopOrderFromEmail()}>`,
      to: [getShopOrderToEmail()],
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Shop order email error:', error);
      return NextResponse.json(
        { ok: false, error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci su WhatsApp.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        'Richiesta inviata. Ti contatteremo al più presto per confermare disponibilità, consegna o ritiro.',
    });
  } catch (error) {
    console.error('Shop order email exception:', error);
    return NextResponse.json(
      { ok: false, error: 'Invio non riuscito. Riprova tra qualche minuto o contattaci su WhatsApp.' },
      { status: 500 },
    );
  }
}
