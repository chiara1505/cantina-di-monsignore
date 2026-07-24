'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

const values = [
  {
    icon: 'fa-wheat',
    title: 'Rispetto della materia prima',
    text: 'Lavoriamo a stretto contatto con i produttori locali. Compriamo solo ciò che la stagione offre, garantendo una filiera cortissima che sostiene il territorio e garantisce ingredienti freschi e sapori genuini.',
    delay: 0,
  },
  {
    icon: 'fa-book-open',
    title: 'La cucina della memoria',
    text: "Crediamo che l'innovazione serva a valorizzare il passato, non a cancellarlo. Per questo prendiamo i sapori della tradizione siciliana e li reinterpretiamo con equilibrio. Perché vogliamo tenere i piedi ben saldi nella cultura gastronomica locale, pur valorizzandola con tecniche moderne.",
    delay: 150,
  },
  {
    icon: 'fa-hourglass-half',
    title: 'Il lusso del tempo',
    text: 'Nel nostro vocabolario non esiste la parola \u201cfretta\u201d. Applichiamo questa nostra filosofia anche in cucina, rispettando le cotture della tradizione. Il tempo è il vero ingrediente segreto di un esperienza a tavola da ricordare.',
    delay: 300,
  },
]

export default function AboutValuesSection() {
  return (
    <section className="about-values-section sec-pad centred">
      <div className="auto-container">
        <ScrollReveal className="sec-title mb_50">
          <span className="sub-title">I nostri valori</span>
          <h2>Le cose in cui crediamo</h2>
        </ScrollReveal>
        <div className="row clearfix">
          {values.map((value) => (
            <div key={value.title} className="col-lg-4 col-md-6 col-sm-12 about-values-section__column">
              <ScrollReveal delay={value.delay} className="about-values-section__card">
                <div className="about-values-section__icon">
                  <i className={`fas ${value.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
