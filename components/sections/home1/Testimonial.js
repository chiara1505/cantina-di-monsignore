'use client'
import { useRef, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ScrollReveal from '@/components/elements/ScrollReveal'
import { PAGE_SECTION_BACKGROUNDS } from '@/lib/pageTitleImages'

const testimonials = [
  {
    quote: "La migliore esperienza gastronomica di questa ulteriore estate siciliana. Atmosfera curata, accogliente, molto particolare. Servizio estremamente cortese e professionale. Pietanze innovative ma ispirate alla tradizione, con materie prime eccellenti. Abbiamo provato i busiati al pistacchio, i tagliolini con ricotta, noci e finocchietto, la parmigiana rivisitata: tutto eccellente. Imperdibile il semifreddo al pistacchio! Ottimo rapporto qualità prezzo.",
    name: 'Giovanna Monteforte',
    platform: 'Recensione Google',
    rating: 5,
  },
  {
    quote: "Ristorante trovato per caso mentre giravamo tra le stradine di Castiglione di Sicilia. Cibo più che ottimo, materie prime eccellenti, pulizia, gentilezza, cordialità del personale. Tempi di attesa non molto lunghi, consigliatissimo!!",
    name: 'Cristina Ilardo',
    platform: 'Recensione Google',
    rating: 5,
  },
  {
    quote: "A pranzo con il mio compagno, questo ristorante è stato una piacevolissima scoperta! Titolare gentilissimo e disponibile, pietanze squisite, si percepisce l'estrema attenzione per le materie prime! Anche il vino della casa molto buono. Il locale curato nei minimi dettagli, accogliente e confortevole! Se passate da Castiglione di Sicilia non potete perdere l'occasione di vivere quest'esperienza!",
    name: 'Melania Genovese',
    platform: 'Recensione Google',
    rating: 5,
  },
  {
    quote: "Da castiglionese, vedere realtà come La Cantina di Monsignore crescere e valorizzare il nostro territorio è motivo di grande orgoglio. Il locale è elegante ma accogliente, curato nei minimi dettagli, e riesce a trasmettere tutto il fascino e l'autenticità del nostro paese. La cucina è semplicemente eccellente: piatti preparati con ingredienti di qualità, legati alla tradizione siciliana ma rivisitati con gusto e creatività. Ogni portata racconta il territorio e la passione che c'è dietro il lavoro di chi la realizza. La Cantina di Monsignore non è soltanto un ristorante, ma un luogo dove si incontrano buona cucina, ospitalità e amore per il territorio. Una tappa obbligata per chi visita Castiglione di Sicilia e una certezza per noi che ci viviamo.",
    name: 'Michaela Ponticello',
    platform: 'Recensione Google',
    rating: 5,
  },
  {
    quote: "Location molto accogliente con ambienti tipici dei borghi siciliani... materie prime di ottima qualità cucinate in modo squisito nel rispetto delle tradizioni ma con uno sguardo all'innovazione! Cantina di nicchia con etichette poco commerciali... complimenti. Dessert squisiti così come la cameriera e il proprietario Giuseppe... e un ringraziamento particolare allo chef perché ha saputo deliziarci con grande maestria! Se andate a Castiglione di Sicilia è l'unico posto dove pranzare/cenare per una pausa deliziosa 😉... lo consiglio vivamente!!!",
    name: 'Irene',
    platform: 'Recensione Google',
    rating: 5,
  },
  {
    quote: "Trovato questo ristorantino su TripAdvisor, abbiamo prenotato per una cenetta di coppia. Carinissima la location nella piazzetta, servizio ben curato e attento. Siamo stati accolti con gentilezza e cortesia, siamo stati messi a nostro agio in tutto. Le pietanze sono state davvero buone, abbiamo seguito un menù di carne e devo dire che tartare e guancia di maiale sono state davvero deliziosi. Spettacolari i dolci, con il babà siciliano che si differenzia da un tipico babà, e che si arricchisce di note di anice e mandorla. E la cheesecake, con una coulis homemade di fragole fresche, che desideravo non finisse mai.",
    name: 'Michele Anguzza',
    platform: 'Recensione TripAdvisor',
    rating: 5,
  },
  {
    quote: "Abbiamo cenato in questo caratteristico ristorante. Ottima la qualità della cucina che riesce a mantenere la tradizione modificandola con variazioni di alta cucina. Impiattamento ottimo. Prezzo giusto. Ottima lista dei vini. Attenzione ad arrivarci con Google. Chiedete al ristoratore consigli per arrivare più velocemente. Ottimo il servizio e la gentilezza. Ci ritornerei.",
    name: 'Cristina N.',
    platform: 'Recensione TripAdvisor',
    rating: 5,
  },
]

export default function Testimonial() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeReview = testimonials[activeIndex]

  return (
    <section className="testimonial-section testimonial-section--photo sec-pad" id="testmonial">
      <div
        className="bg-layer parallax-bg"
        style={{ backgroundImage: `url(${PAGE_SECTION_BACKGROUNDS.testimonials})` }}
      />
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1 content-column testimonial-section__content">
            <div className="content-box centred">
              <ScrollReveal className="sec-title light centred mb_45">
                <span className="sub-title">Recensioni</span>
                <h2>Le parole dei nostri ospiti</h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="testimonial-carousel">
                  <div className="testimonial-carousel__quote-row">
                    <div className="testimonial-carousel__slider">
                      <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        autoHeight
                        autoplay={{
                          delay: 7000,
                          disableOnInteraction: false,
                        }}
                        loop
                        grabCursor
                        navigation={{
                          prevEl: prevRef.current,
                          nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                          swiper.params.navigation.prevEl = prevRef.current
                          swiper.params.navigation.nextEl = nextRef.current
                        }}
                        onInit={(swiper) => {
                          swiper.navigation.init()
                          swiper.navigation.update()
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="single-item-carousel owl-carousel owl-theme owl-dots-none"
                      >
                        {testimonials.map((item) => (
                          <SwiperSlide key={`${item.name}-${item.platform}`} className="slide-item">
                            <p className="testimonial-carousel__quote">{item.quote}</p>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="testimonial-carousel__nav">
                      <button
                        type="button"
                        ref={prevRef}
                        className="testimonial-carousel__arrow testimonial-carousel__arrow--prev"
                        aria-label="Recensione precedente"
                      >
                        <i className="fas fa-angle-left" aria-hidden="true"></i>
                      </button>
                      <button
                        type="button"
                        ref={nextRef}
                        className="testimonial-carousel__arrow testimonial-carousel__arrow--next"
                        aria-label="Recensione successiva"
                      >
                        <i className="fas fa-angle-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="testimonial-carousel__author author-box">
                    <ul className="rating clearfix">
                      {Array.from({ length: 5 }, (_, index) => (
                        <li key={index}>
                          <i className={index < activeReview.rating ? 'fas fa-star' : 'far fa-star'}></i>
                        </li>
                      ))}
                    </ul>
                    <h4>{activeReview.name}</h4>
                    <span className="designation">{activeReview.platform}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
