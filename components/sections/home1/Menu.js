import Link from 'next/link';
import ScrollReveal from '@/components/elements/ScrollReveal';

const menuCourses = [
  {
    title: '01. Per cominciare',
    image: 'assets/images/resource/menu-antipasti.jpg',
    imageAlt: 'Antipasti',
    button: 'Scopri gli Antipasti',
    href: '/menu',
    delay: 0,
  },
  {
    title: '02. Primi Piatti',
    image: 'assets/images/resource/menu-primi.jpg',
    imageAlt: 'Primi piatti',
    button: 'Scopri i Primi',
    href: '/menu',
    delay: 100,
  },
  {
    title: '03. Secondi Piatti',
    image: 'assets/images/resource/menu-secondi.png',
    imageAlt: 'Secondi piatti',
    button: 'Scopri i Secondi',
    href: '/menu',
    delay: 200,
  },
  {
    title: '04. Dessert',
    image: 'assets/images/resource/menu-dolci.png',
    imageAlt: 'Dessert',
    button: 'Scopri i Dolci',
    href: '/menu',
    delay: 300,
  },
];

export default function Menu() {
  return (
    <section className="menu-section bg-color-1">
      <div className="auto-container">
        <div className="inner-container">
          <ScrollReveal className="sec-title light centred mb_100">
            <span className="sub-title">La cucina</span>
            <h2>Una cucina per farti conoscere e riconoscere la Sicilia</h2>
            <p>
              La nostra cucina valorizza i prodotti del territorio, rispetta la materia prima e custodisce i sapori della tradizione, reinterpretandoli con equilibrio senza alterarne mai l&apos;identità. Ogni ingrediente è scelto con cura, ogni portata è esaltata dai migliori vini locali.
            </p>
          </ScrollReveal>
          <div className="row clearfix menu-course-grid">
            {menuCourses.map((course) => (
              <div key={course.title} className="col-lg-3 col-md-6 col-sm-12 menu-course-column">
                <ScrollReveal className="menu-course-card" delay={course.delay}>
                  <div className="menu-course-card__shape" aria-hidden="true">
                    <div
                      className="menu-course-card__shape-top"
                      style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}
                    />
                    <div
                      className="menu-course-card__shape-bottom"
                      style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}
                    />
                  </div>
                  <h3 className="menu-course-card__title">{course.title}</h3>
                  <figure className="menu-course-card__image">
                    <img src={course.image} alt={course.imageAlt} />
                  </figure>
                  <div className="menu-course-card__btn">
                    <Link href={course.href} className="theme-btn-one">{course.button}</Link>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
          <ScrollReveal className="menu-wine-banner" delay={150}>
            <div className="menu-wine-banner__shape" aria-hidden="true">
              <div
                className="menu-wine-banner__shape-top"
                style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}
              />
              <div
                className="menu-wine-banner__shape-bottom"
                style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}
              />
            </div>
            <div className="menu-wine-banner__content">
              <h3 className="menu-wine-banner__title">Carta dei Vini</h3>
              <p>
                Da noi il vino non accompagna semplicemente il piatto, ma lo completa arricchendo la tua esperienza gastronomica.
              </p>
            </div>
            <div className="menu-wine-banner__btn">
              <Link href="/menu" className="theme-btn-one">Scopri i Vini</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
