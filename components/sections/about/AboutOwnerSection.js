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
                A guidare La Cantina di Monsignore c&apos;è Giuseppe, fondatore e anima della sala.
              </p>
              <p>
                Per lui, far rivivere l&apos;antica bottaia significa mettere al centro un&apos;idea diversa di ristorazione che rifiuta i ritmi frettolosi e crede nel rispetto degli ingredienti, del territorio e dell&apos;ospite.
              </p>
              <p>
                Saranno Giuseppe e tutta la squadra ad accoglierti, a consigliarti il calice adatto per completare la tua esperienza culinaria e ad accompagnarti alla scoperta dei sapori della tradizione siciliana in una veste nuova.
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
