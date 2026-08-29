'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { COOKIE_CONSENT } from '@/lib/legal/siteLegal'
import {
  hasCookieConsentChoice,
  setCookieConsent,
} from '@/lib/legal/cookieConsent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [manageOpen, setManageOpen] = useState(false)

  useEffect(() => {
    setVisible(!hasCookieConsentChoice())
  }, [])

  const saveConsent = useCallback((value) => {
    setCookieConsent(value)
    setVisible(false)
    setManageOpen(false)
  }, [])

  useEffect(() => {
    const openManager = () => {
      setManageOpen(true)
      setVisible(true)
    }

    window.addEventListener('open-cookie-settings', openManager)
    return () => window.removeEventListener('open-cookie-settings', openManager)
  }, [])

  if (!visible && !manageOpen) return null

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Preferenze cookie">
      <div className="cookie-consent__panel">
        <div className="auto-container cookie-consent__inner">
          <p className="cookie-consent__text">
            {manageOpen
              ? 'Puoi accettare i cookie non necessari (es. Google Maps) o rifiutarli. I cookie tecnici restano attivi per il funzionamento del sito.'
              : 'Utilizziamo cookie tecnici e, solo con il tuo consenso, servizi di terze parti come Google Maps. Leggi la Cookie Policy per i dettagli.'}
          </p>
          <div className="cookie-consent__actions">
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--accept"
              onClick={() => saveConsent(COOKIE_CONSENT.all)}
            >
              Accetta
            </button>
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--reject"
              onClick={() => saveConsent(COOKIE_CONSENT.essential)}
            >
              Rifiuta cookie non necessari
            </button>
            <Link href="/cookie-policy" className="cookie-consent__link">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
