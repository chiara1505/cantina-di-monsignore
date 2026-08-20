'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

const values = [
  {
    number: '01',
    title: 'Ingredienti freschi, locali e genuini',
    text: 'Collaboriamo con i produttori locali e compriamo solo ciò che la stagione offre per garantire una filiera cortissima che sostiene il territorio.',
    delay: 0,
  },
  {
    number: '02',
    title: 'Rispetto della materia prima',
    text: 'Valorizziamo le eccellenze locali attraverso una cucina che rispetta ogni ingrediente per esaltarne sempre qualità e caratteristiche.',
    delay: 100,
  },
  {
    number: '03',
    title: 'Cura e attenzione al dettaglio',
    text: "Curiamo ogni dettaglio per regalare un'esperienza piacevole a tavola e far sentire i nostri ospiti coccolati dall'inizio alla fine.",
    delay: 200,
  },
  {
    number: '04',
    title: 'Cucina della memoria',
    text: "Reinterpretiamo i sapori della tradizione siciliana senza alterarne l'identità perché l'innovazione deve valorizzare il passato, non sostituirlo.",
    delay: 300,
  },
]

export default function AboutValuesSection() {
  return (
    <section className="about-values-section sec-pad">
      <div className="auto-container">
        <ScrollReveal className="sec-title mb_50 centred">
          <span className="sub-title">I nostri valori</span>
          <h2>Le cose in cui crediamo</h2>
        </ScrollReveal>
        <div className="row clearfix align-items-start">
          <div className="col-lg-5 col-md-12 col-sm-12 image-column">
            <ScrollReveal delay={150} className="about-values-section__image">
              <img
                src="assets/images/about/chef-values-placeholder.jpg"
                alt="Lo chef al lavoro in cucina — La Cantina di Monsignore"
              />
            </ScrollReveal>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 content-column">
            <div className="about-values-section__list">
              {values.map((value) => (
                <ScrollReveal
                  key={value.title}
                  delay={value.delay}
                  className="about-values-section__item"
                >
                  <span className="about-values-section__number">{value.number}</span>
                  <div className="about-values-section__content">
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
