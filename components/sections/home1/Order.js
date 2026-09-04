import ScrollReveal from '@/components/elements/ScrollReveal';
import BookingReservationForm from '@/components/sections/home1/BookingReservationForm';
import OrderBookingContacts from '@/components/sections/home1/OrderBookingContacts';

const amenities = [
  { label: 'Menù vegetariano', icon: 'fa-leaf' },
  { label: 'Menù vegano', icon: 'fa-seedling' },
  { label: 'Menù senza lattosio', icon: 'fa-cheese' },
  { label: 'Accessibile alle persone disabili', icon: 'fa-wheelchair' },
  { label: 'Sala climatizzata', icon: 'fa-snowflake' },
  { label: 'Cocktail bar', icon: 'fa-cocktail' },
  { label: 'Tavoli all\'aperto', icon: 'fa-sun' },
  { label: 'Pagamento con carta', icon: 'fa-credit-card' },
  { label: 'Seggioloni disponibili', icon: 'fa-baby' },
  { label: 'Vini locali', icon: 'fa-wine-glass' },
  { label: 'Wi-Fi', icon: 'fa-wifi' },
  { label: 'Location per eventi privati', icon: 'fa-glass-cheers' },
]

export default function Order({ sectionClassName = '', sectionId = 'prenotazioni' }) {
  return (
    <section className={`order-section bg-color-panna ${sectionClassName}`.trim()} id={sectionId}>
      <div className="auto-container">
        <div className="row clearfix order-section__layout">
          <div className="col-lg-6 col-md-12 col-sm-12 order-section__content">
            <ScrollReveal className="sec-title order-section__title">
              <span className="sub-title">Prenotazioni</span>
              <h2>Compila il form o chiama per riservare il tuo tavolo</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <OrderBookingContacts />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ul className="order-section__amenities clearfix">
                {amenities.map((item) => (
                  <li key={item.label} className="order-section__amenity">
                    <span className="order-section__amenity-icon" aria-hidden="true">
                      <i className={`fas ${item.icon}`}></i>
                    </span>
                    <span className="order-section__amenity-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-section__form-column">
            <ScrollReveal delay={150}>
              <div className="form-inner">
              <BookingReservationForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
