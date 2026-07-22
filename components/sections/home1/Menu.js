import Link from 'next/link';

const menuCourses = [
  {
    title: '01. Per cominciare',
    image: 'assets/images/resource/menu-antipasti.jpg',
    imageAlt: 'Antipasti',
    button: 'Scopri gli Antipasti',
    href: '/menu',
    delay: '00ms',
  },
  {
    title: '02. Primi Piatti',
    image: 'assets/images/resource/menu-primi.jpg',
    imageAlt: 'Primi piatti',
    button: 'Scopri i Primi',
    href: '/menu',
    delay: '100ms',
  },
  {
    title: '03. Secondi Piatti',
    image: 'assets/images/resource/menu-secondi.jpg',
    imageAlt: 'Secondi piatti',
    button: 'Scopri i Secondi',
    href: '/menu',
    delay: '200ms',
  },
  {
    title: '04. Dessert',
    image: 'assets/images/resource/menu-dolci.jpg',
    imageAlt: 'Dessert',
    button: 'Scopri i Dolci',
    href: '/menu',
    delay: '300ms',
  },
];

export default function Menu() {
  return (
    <section className="menu-section bg-color-1">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="sec-title light centred mb_100">
            <span className="sub-title">La cucina</span>
            <h2>Una cucina per farti conoscere e riconoscere la Sicilia</h2>
            <p>
              Valorizziamo i prodotti del territorio attraverso una cucina che rispetta profondamente la materia prima e che custodisce i sapori della tradizione, reinterpretandoli con equilibrio senza alterarne mai l&apos;identità.
            </p>
            <p>
              Il ritmo della nostra cucina è scandito da quattro tempi, dall&apos;antipasto al dessert, esaltati dalle migliori etichette di vino locali. Scegli da dove iniziare.
            </p>
          </div>
          <div className="row clearfix menu-course-grid">
            {menuCourses.map((course) => (
              <div key={course.title} className="col-lg-3 col-md-6 col-sm-12 menu-course-column">
                <div
                  className="menu-course-card wow fadeInUp animated"
                  data-wow-delay={course.delay}
                  data-wow-duration="1500ms"
                >
                  <h3 className="menu-course-card__title">{course.title}</h3>
                  <figure className="menu-course-card__image">
                    <img src={course.image} alt={course.imageAlt} />
                  </figure>
                  <div className="menu-course-card__btn">
                    <Link href={course.href} className="theme-btn-one">{course.button}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-wine-banner wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="menu-wine-banner__content">
              <h3 className="menu-wine-banner__title">Carta dei Vini</h3>
              <p>
                Da noi il vino non accompagna semplicemente il piatto, ma lo completa arricchendo la tua esperienza gastronomica.
              </p>
            </div>
            <div className="menu-wine-banner__btn">
              <Link href="/menu" className="theme-btn-one">Scopri i Vini</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
