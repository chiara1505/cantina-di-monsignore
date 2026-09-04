'use client'

import Link from 'next/link'
import { useRestaurantSettings } from '@/components/providers/RestaurantSettingsProvider'
import { getFooterOpeningHours } from '@/lib/normalizeRestaurantSettings'
import SocialLinks from '@/components/elements/SocialLinks'

export default function Footer1() {
  const settings = useRestaurantSettings()
  const openingHours = getFooterOpeningHours(settings)
  const { contact } = settings

  return (
    <>
      <footer className="main-footer bg-color-1">
        <div className="footer-top pt_85 pb_100">
          <div className="auto-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget schedule-widget text-right">
                  <div className="widget-title">
                    <h3>Orari di Apertura</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list clearfix">
                      {openingHours.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget text-center">
                  <div className="widget-content">
                    <figure className="footer-logo">
                      <Link href="/">
                        <img src="/assets/images/footer-logo.png" alt="Cantina di Monsignore" />
                      </Link>
                    </figure>
                    <div className="text">
                      <p>
                        Ristorante siciliano a Castiglione di Sicilia, vicino al vulcano Etna e alla
                        Valle dell&apos;Alcantara. Piatti della tradizione rivisitati in chiave moderna.
                      </p>
                    </div>
                    <SocialLinks />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget text-left">
                  <div className="widget-title">
                    <h3>Indirizzo e Contatti</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <span>Indirizzo: </span>
                        {contact.address}
                      </li>
                      <li>
                        <span>Telefono: </span>
                        <Link href={contact.phoneHref}>{contact.phone}</Link>
                      </li>
                      <li>
                        <span>WhatsApp: </span>
                        <Link href={contact.whatsappHref}>{contact.whatsapp}</Link>
                      </li>
                      <li>
                        <span>Email: </span>
                        <Link href={contact.emailHref}>{contact.email}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p className="footer-bottom__line">
                Copyright {new Date().getFullYear()} La Cantina di Monsignore
                {' · '}
                Designed by{' '}
                <Link href="https://www.copyosity.it/" target="_blank" rel="noopener noreferrer">
                  Copyosity
                </Link>
              </p>
              <p className="footer-bottom__line">
                <Link href="/privacy-policy">Privacy Policy</Link>
                {' · '}
                <Link href="/cookie-policy">Cookie Policy</Link>
                {' · '}
                <button
                  type="button"
                  className="footer-cookie-settings"
                  onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
                >
                  Gestisci cookie
                </button>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
