import ScrollReveal from '@/components/elements/ScrollReveal';
import BookingReservationForm from '@/components/sections/home1/BookingReservationForm';

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

const bookingContacts = [
  {
    label: '0942 09 05 38',
    href: 'tel:+390942090538',
    icon: 'fa-phone',
    iconStyle: 'fas',
  },
  {
    label: '+39 388 89 88 098',
    href: 'https://wa.me/393888988098',
    icon: 'fa-whatsapp',
    iconStyle: 'fab',
  },
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
              <ul className="order-section__contacts clearfix">
                {bookingContacts.map((contact) => (
                  <li key={contact.label} className="order-section__contact">
                    <span className="order-section__contact-icon" aria-hidden="true">
                      <i className={`${contact.iconStyle} ${contact.icon}`}></i>
                    </span>
                    <a
                      href={contact.href}
                      className="order-section__contact-link"
                      {...(contact.href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
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
