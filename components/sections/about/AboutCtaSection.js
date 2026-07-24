'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/elements/ScrollReveal'

export default function AboutCtaSection() {
  return (
    <section className="about-cta-section sec-pad bg-color-panna">
      <div className="auto-container">
        <ScrollReveal className="sec-title centred about-cta-section__title">
          <h2>Ora che ci conosci, lasciati sorprendere dai nostri piatti.</h2>
        </ScrollReveal>
        <ScrollReveal delay={150} className="about-cta-section__buttons">
          <Link href="/menu" className="theme-btn-one">Scopri il Menù</Link>
          <Link href="/#prenotazioni" className="about-cta-section__btn-reserve">Riserva il tuo tavolo</Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
