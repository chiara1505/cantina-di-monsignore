import Link from 'next/link';
import ScrollReveal from '@/components/elements/ScrollReveal';

const specialtyDishes = [
  {
    name: 'Parmigiana Croccante',
    image: 'assets/images/resource/promotion-1.jpg',
    delay: 0,
  },
  {
    name: 'Ravioli Home Made alla Norma',
    image: 'assets/images/resource/promotion-2.jpg',
    delay: 150,
  },
];

export default function Promotion() {
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
                  <img src={dish.image} alt={dish.name} />
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
