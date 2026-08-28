'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

const philosophyDishes = [
  {
    image: 'assets/images/about/chef-philosophy-1.jpg',
    alt: 'Ravioli Home Made, specialità unica del Ristorante La Cantina di Monsignore',
    imagePosition: 'center 88%',
    delay: 0,
  },
  {
    image: 'assets/images/about/chef-philosophy-2.jpg',
    alt: 'Babà siciliano, rivisitazione del ristorante La Cantina di Monsignore',
    delay: 100,
  },
  {
    image: 'assets/images/about/chef-philosophy-3.jpg',
    alt: 'Fusillone al ragù di coniglio, La Cantina di Monsignore a Castiglione di Sicilia',
    delay: 200,
  },
  {
    image: 'assets/images/about/chef-philosophy-4.jpg',
    alt: 'Semifreddo agli agrumi del ristorante La Cantina di Monsignore a Castiglione di Sicilia',
    delay: 300,
  },
]

export default function AboutChefPhilosophy() {
  return (
    <section className="about-chef-philosophy">
      <div className="auto-container">
        <div className="about-chef-philosophy__inner">
          <ScrollReveal className="about-chef-philosophy__intro centred mb_100">
            <blockquote className="about-chef-philosophy__quote">
              <p>
                &ldquo;Cucinare significa trovare quell&apos;equilibrio in cui la creatività e la semplicità convivono in ogni portata. Nei nostri piatti la tradizione incontra idee nuove, evolvendosi lungo un percorso che guarda al futuro pur mantenendo sempre vivido il carattere della Sicilia.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <div className="row clearfix about-chef-philosophy__grid">
            {philosophyDishes.map((dish, index) => (
              <div
                key={dish.image}
                className="col-lg-3 col-md-6 col-sm-12 about-chef-philosophy__column"
              >
              <ScrollReveal delay={dish.delay}>
                <div className="about-chef-philosophy__photo">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    style={dish.imagePosition ? { objectPosition: dish.imagePosition } : undefined}
                  />
                </div>
              </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
