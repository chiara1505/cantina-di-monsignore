import Layout from '@/components/layout/Layout'
import { PAGE_TITLE_IMAGES, PAGE_SECTION_BACKGROUNDS } from '@/lib/pageTitleImages'
import ScrollReveal from '@/components/elements/ScrollReveal'
import ContactDirectionsMap from '@/components/sections/contact/ContactDirectionsMap'
import ContactInfoList from '@/components/sections/contact/ContactInfoList'
import ContactForm from '@/components/sections/contact/ContactForm'
import SocialLinks from '@/components/elements/SocialLinks'

export default function ContactPage() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Contatti"
      breadcrumbPath="/contact"
      breadcrumbImage={PAGE_TITLE_IMAGES.contact}
      breadcrumbImagePosition="center 85%"
      breadcrumbClassName="page-title--contact"
    >
      <div className="contact-page">
        <div className="contact-page__columns">
          <section className="contact-section contact-section--info">
            <div className="auto-container">
              <div className="info-inner">
                <div className="sec-title contact-section__title">
                  <span className="sub-title">Contatti</span>
                  <h2>Ci trovi qui</h2>
                  <p>I nostri indirizzi e recapiti per rimanere in contatto</p>
                </div>
                <ContactInfoList />
                <div className="contact-section__social">
                  <h3 className="contact-section__social-title">Seguici sui social</h3>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </section>

          <section className="contact-section contact-section--form">
            <div className="auto-container">
              <div className="form-inner centred">
                <h2>Scrivici per qualsiasi informazione</h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </div>

        <section className="contact-directions-section">
          <div
            className="bg-layer parallax-bg"
            style={{ backgroundImage: `url(${PAGE_SECTION_BACKGROUNDS.contactDirections})` }}
          />
          <div className="auto-container contact-directions-section__content">
            <ScrollReveal className="sec-title centred contact-directions-section__header">
              <span className="sub-title">Raggiungici</span>
              <h2>Nel centro storico di Castiglione di Sicilia</h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="contact-directions-section__text centred">
              <p>
                La Cantina di Monsignore si trova nel cuore del borgo. Trovarci camminando tra le
                sue stradine fa parte dell&apos;esperienza stessa.
              </p>
              <p>
                Questa riservatezza è il nostro valore più grande: ci permette di custodire
                un&apos;atmosfera intima e di garantirti la tranquillità necessaria per goderti il
                piacere della tavola, senza fretta.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="contact-directions-section__map">
              <ContactDirectionsMap />
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  )
}
