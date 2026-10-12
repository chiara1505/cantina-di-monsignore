import Link from 'next/link';
import ScrollReveal from '@/components/elements/ScrollReveal';
import { DEFAULT_SPECIALTIES_HOME } from '@/lib/homeSettingsDefaults';

/**
 * @param {{
 *   specialtiesHome?: {
 *     left?: { name?: string, image?: string, imageAlt?: string },
 *     right?: { name?: string, image?: string, imageAlt?: string },
 *   }
 * }} props
 */
export default function Promotion({ specialtiesHome }) {
  const specialties = specialtiesHome ?? DEFAULT_SPECIALTIES_HOME;

  const specialtyDishes = [
    {
      name: specialties.left?.name || DEFAULT_SPECIALTIES_HOME.left.name,
      image: specialties.left?.image || DEFAULT_SPECIALTIES_HOME.left.image,
      imageAlt: specialties.left?.imageAlt || DEFAULT_SPECIALTIES_HOME.left.imageAlt,
      delay: 0,
    },
    {
      name: specialties.right?.name || DEFAULT_SPECIALTIES_HOME.right.name,
      image: specialties.right?.image || DEFAULT_SPECIALTIES_HOME.right.image,
      imageAlt: specialties.right?.imageAlt || DEFAULT_SPECIALTIES_HOME.right.imageAlt,
      delay: 150,
      imageZoom: true,
    },
  ];

  return (
    <section className="promotion-section sec-pad">
      <div className="auto-container">
        <ScrollReveal className="sec-title centred mb_45">
          <span className="sub-title">Le Specialità</span>
          <h2>I nostri Piatti d&apos;Autore</h2>
          <p className="specialty-desc">
            Creazioni nate per raccontare il territorio attraverso il cibo. Questi sono i nostri piatti d&apos;autore: l&apos;interpretazione più personale degli ingredienti locali, nati dalla nostra visione e custoditi nella nostra cucina.
          </p>
        </ScrollReveal>

        <div className="row clearfix specialty-dishes">
          {specialtyDishes.map((dish) => (
            <div key={dish.name} className="col-lg-6 col-md-6 col-sm-12 specialty-dish-column">
              <ScrollReveal delay={dish.delay} as="figure" className="specialty-dish">
                <div className="specialty-dish__image">
                  <img
                    src={dish.image}
                    alt={dish.imageAlt}
                    className={dish.imageZoom ? 'specialty-dish__image-zoom' : undefined}
                  />
                </div>
                <figcaption className="specialty-dish__caption">{dish.name}</figcaption>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal className="specialty-dishes-btn" delay={300}>
          <Link href="/menu" className="theme-btn-one">Scopri il menù</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
