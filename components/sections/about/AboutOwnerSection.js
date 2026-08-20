'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

export default function AboutOwnerSection() {
  return (
    <section className="about-owner-section bg-color-panna sec-pad">
      <div className="auto-container">
        <div className="row clearfix align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <ScrollReveal className="sec-title about-owner-section__title">
              <span className="sub-title">La nostra idea</span>
              <h2>La Cantina oggi</h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="about-owner-section__text">
              <p>
                Dietro La Cantina di Monsignore ci sono persone che condividono la stessa idea di ospitalità e di ristorazione.
              </p>
              <p>
                Da una parte c&apos;è chi accoglie, ascolta e accompagna ogni ospite durante la sua esperienza. Dall&apos;altra c&apos;è chi, in cucina, trasforma ingredienti, tecnica e creatività in piatti capaci di raccontare la propria terra.
              </p>
              <p>
                Ogni giorno lavoriamo insieme per mantenere un equilibrio preciso tra sala e cucina, tra attenzione al cliente e ricerca gastronomica.
              </p>
              <p>
                È questo lavoro di squadra a dare forma all&apos;esperienza che vogliamo offrire in sala: accogliente, curata e soprattutto autentica.
              </p>
            </ScrollReveal>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <ScrollReveal delay={200} className="about-owner-section__image">
              <img
                src="assets/images/about/owner-placeholder.jpg"
                alt="Giuseppe — fondatore de La Cantina di Monsignore"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
