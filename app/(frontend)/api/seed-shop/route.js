import { NextResponse } from 'next/server'
import config from '@payload-config'
import { script } from '../../../../scripts/seed-shop-products.ts'

function isSyncAuthorized(request) {
  if (process.env.NODE_ENV !== 'production') {
    return true
  }

  const syncKey = process.env.SHOP_SYNC_KEY?.trim()
  if (!syncKey) return false

  const headerKey = request.headers.get('x-shop-sync-key')?.trim()
  const queryKey = new URL(request.url).searchParams.get('key')?.trim()

  return headerKey === syncKey || queryKey === syncKey
}

export async function GET(request) {
  if (!isSyncAuthorized(request)) {
    return NextResponse.json(
      { error: 'Non autorizzato. In produzione serve SHOP_SYNC_KEY.' },
      { status: 403 },
    )
  }

  try {
    await script(config)
    return NextResponse.json({ ok: true, message: 'Prodotti shop sincronizzati (prezzi, immagini, dati).' })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Errore durante il seed shop.',
      },
      { status: 500 },
    )
  }
}
