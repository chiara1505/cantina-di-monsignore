'use client'

import { useEffect, useState } from 'react'
import {
  CONTACT_ADDRESS,
  CONTACT_MAP_EMBED_URL,
  CONTACT_MAP_LINK_URL,
} from '@/lib/contactInfo'
import { hasAcceptedNonEssentialCookies } from '@/lib/legal/cookieConsent'

export default function ContactDirectionsMap() {
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    setShowMap(hasAcceptedNonEssentialCookies())

    const onConsentUpdate = () => {
      setShowMap(hasAcceptedNonEssentialCookies())
    }

    window.addEventListener('cookie-consent-updated', onConsentUpdate)
    return () => window.removeEventListener('cookie-consent-updated', onConsentUpdate)
  }, [])

  return (
    <div className="contact-directions-map">
      <div className="contact-directions-map__shape" aria-hidden="true">
        <div
          className="contact-directions-map__shape-top"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }}
        />
        <div
          className="contact-directions-map__shape-bottom"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}
        />
      </div>

      <div className="contact-directions-map__inner">
        <div className="contact-directions-map__viewport">
          {showMap ? (
            <iframe
              title="Anteprima mappa La Cantina di Monsignore"
              src={CONTACT_MAP_EMBED_URL}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
              aria-hidden="true"
            />
          ) : (
            <div className="contact-directions-map__placeholder">
              <p>
                Per visualizzare la mappa incorporata di Google Maps accetta i cookie non necessari,
                oppure apri la posizione direttamente in Google Maps.
              </p>
              <button
                type="button"
                className="theme-btn-one"
                onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
              >
                Gestisci preferenze cookie
              </button>
            </div>
          )}

          {showMap ? (
            <a
              href={CONTACT_MAP_LINK_URL}
              className="contact-directions-map__overlay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apri ${CONTACT_ADDRESS} in Google Maps`}
            >
              <span className="contact-directions-map__pin" aria-hidden="true">
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className="contact-directions-map__overlay-text">Apri in Google Maps</span>
            </a>
          ) : null}
        </div>

        <div className="contact-directions-map__footer">
          <p className="contact-directions-map__address">{CONTACT_ADDRESS}</p>
          <a
            href={CONTACT_MAP_LINK_URL}
            className="contact-directions-map__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indicazioni stradali
            <i className="fas fa-external-link-alt" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
