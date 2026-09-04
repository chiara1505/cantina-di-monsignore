import { NextResponse } from 'next/server'
import config from '@payload-config'
import { script } from '../../../../scripts/seed-shop-products.ts'

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Disponibile solo in sviluppo.' }, { status: 403 })
  }

  try {
    await script(config)
    return NextResponse.json({ ok: true, message: 'Prodotti shop collegati alle immagini esistenti.' })
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Errore durante il seed shop.' },
      { status: 500 },
    )
  }
}
