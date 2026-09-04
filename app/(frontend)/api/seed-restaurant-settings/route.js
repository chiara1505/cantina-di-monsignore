import { NextResponse } from 'next/server'
import config from '@payload-config'
import { script } from '../../../../scripts/seed-restaurant-settings.ts'

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Disponibile solo in sviluppo.' }, { status: 403 })
  }

  try {
    await script(config)
    return NextResponse.json({ ok: true, message: 'Impostazioni ristorante inizializzate.' })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Errore durante il seed impostazioni.',
      },
      { status: 500 },
    )
  }
}
