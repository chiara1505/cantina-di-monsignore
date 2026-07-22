'use client'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ScrollReveal from '@/components/elements/ScrollReveal'

const teamMembers = [
  {
    name: 'Nome Cognome',
    role: 'Mansione',
    image: 'assets/images/team/team-1.jpg',
  },
  {
    name: 'Nome Cognome',
    role: 'Mansione',
    image: 'assets/images/team/team-2.jpg',
  },
  {
    name: 'Nome Cognome',
    role: 'Mansione',
    image: 'assets/images/team/team-3.jpg',
  },
  {
    name: 'Nome Cognome',
    role: 'Mansione',
    image: 'assets/images/team/team-4.jpg',
  },
  {
    name: 'Nome Cognome',
    role: 'Mansione',
    image: 'assets/images/team/team-1.jpg',
  },
]

const swiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
}

export default function Team() {
  return (
    <section className="team-section team-section-home sec-pad">
      <div className="auto-container">
        <ScrollReveal className="sec-title centred mb_45">
          <span className="sub-title">La Squadra</span>
          <h2>Qui l&apos;ospitalità ha dei nomi e dei volti</h2>
          <p className="team-section-home__intro">
            Ti aspettiamo per accoglierti con la passione e il calore che ci contraddistinguono e per assicurarti un&apos;esperienza autentica a tavola. Tutta la nostra squadra ti guiderà con cura e attenzione in questo viaggio dei sapori, raccontandoti la storia dei piatti e consigliandoti i giusti abbinamenti di vino. Perché farti sentire a casa è la nostra idea di eccellenza.
          </p>
        </ScrollReveal>

        <ScrollReveal className="team-section-home__carousel" delay={150}>
          <Swiper {...swiperOptions} className="team-carousel">
            {teamMembers.map((member, index) => (
              <SwiperSlide key={`${member.name}-${index}`}>
                <article className="team-member-card">
                  <figure className="team-member-card__image">
                    <img src={member.image} alt={member.name} />
                  </figure>
                  <h3 className="team-member-card__name">{member.name}</h3>
                  <p className="team-member-card__role">{member.role}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  )
}
