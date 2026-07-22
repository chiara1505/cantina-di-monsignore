import Link from 'next/link';

const specialtyDishes = [
  {
    name: 'Parmigiana Croccante',
    image: 'assets/images/resource/promotion-1.jpg',
  },
  {
    name: 'Ravioli Home Made alla Norma',
    image: 'assets/images/resource/promotion-2.jpg',
  },
];

export default function Promotion() {
  return (
    <section className="promotion-section sec-pad">
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Le Specialità</span>
          <h2>I nostri Piatti d&apos;Autore</h2>
          <p className="specialty-desc">
            Creazioni nate per raccontare il territorio attraverso il cibo. Questi sono i nostri piatti d&apos;autore: l&apos;interpretazione più personale e autentica degli ingredienti locali, nati dalla nostra visione e custoditi nella nostra cucina.
          </p>
        </div>

        <div className="row clearfix specialty-dishes">
          {specialtyDishes.map((dish) => (
            <div key={dish.name} className="col-lg-6 col-md-6 col-sm-12 specialty-dish-column">
              <figure className="specialty-dish">
                <div className="specialty-dish__image">
                  <img src={dish.image} alt={dish.name} />
                </div>
                <figcaption className="specialty-dish__caption">{dish.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="specialty-dishes-btn">
          <Link href="/menu" className="theme-btn-one">Scopri il menù</Link>
        </div>
      </div>
    </section>
  );
}
