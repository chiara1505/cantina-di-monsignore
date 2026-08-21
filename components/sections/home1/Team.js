'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

const teamMembers = [
  {
    name: 'Giuseppe Mercia',
    role: 'Titolare',
    image: 'assets/images/team/team-1.jpg',
    alt: 'Giuseppe Mercia — titolare de La Cantina di Monsignore',
    delay: 0,
  },
  {
    name: 'Dario Greco',
    role: 'Chef de Cuisine',
    image: 'assets/images/team/team-2.jpg',
    alt: 'Dario Greco — chef de cuisine de La Cantina di Monsignore',
    delay: 300,
  },
]

export default function Team() {
  const [owner, chef] = teamMembers

  return (
    <section className="team-section team-section-home sec-pad">
      <div className="auto-container">
        <ScrollReveal className="sec-title centred mb_70">
          <span className="sub-title">La Squadra</span>
          <h2>Qui l&apos;ospitalità ha dei nomi e dei volti</h2>
        </ScrollReveal>

        <div className="row clearfix team-section-home__layout align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12 team-section-home__column team-section-home__column--owner">
            <ScrollReveal delay={owner.delay} className="team-member-card">
              <figure className="team-member-card__image team-member-card__image--owner">
                <img src={owner.image} alt={owner.alt} />
              </figure>
              <h3 className="team-member-card__name">{owner.name}</h3>
              <p className="team-member-card__role">{owner.role}</p>
            </ScrollReveal>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 team-section-home__text-column">
            <ScrollReveal delay={150} className="team-section-home__intro">
              <p>
                Ti aspettiamo per accoglierti con la passione e il calore di sempre, per regalarti un&apos;esperienza vera a tavola.
              </p>
              <p>
                Ti accompagneremo in questo viaggio culinario, raccontandoti la storia dei nostri piatti e suggerendoti l&apos;abbinamento di vini perfetto per esaltare ogni sapore, con la cura di chi vuole coccolare i propri ospiti.
              </p>
              <p>
                Perché farti sentire a casa è la nostra idea di eccellenza.
              </p>
            </ScrollReveal>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 team-section-home__column team-section-home__column--chef">
            <ScrollReveal delay={chef.delay} className="team-member-card">
              <figure className="team-member-card__image">
                <img src={chef.image} alt={chef.alt} />
              </figure>
              <h3 className="team-member-card__name">{chef.name}</h3>
              <p className="team-member-card__role">{chef.role}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
