import ScrollReveal from '@/components/elements/ScrollReveal';

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

const bookingPhone = {
  label: '+39 000 000 0000',
  href: 'tel:+390000000000',
  icon: 'fa-phone',
}

export default function Order() {
  return (
    <section className="order-section bg-color-brown" id="prenotazioni">
      <div className="pattern-layer"></div>
      <div className="auto-container">
        <div className="row clearfix order-section__layout">
          <div className="col-lg-6 col-md-12 col-sm-12 order-section__content">
            <ScrollReveal className="sec-title light order-section__title">
              <span className="sub-title">Prenotazioni</span>
              <h2>Compila il form o chiama per riservare il tuo tavolo</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <ul className="order-section__contacts clearfix">
                <li className="order-section__contact">
                  <span className="order-section__contact-icon" aria-hidden="true">
                    <i className={`fas ${bookingPhone.icon}`}></i>
                  </span>
                  <a href={bookingPhone.href} className="order-section__contact-link">{bookingPhone.label}</a>
                </li>
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
              <form action="/" method="post">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="name" placeholder="Full name" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="email" name="email" placeholder="Email address" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="phone" placeholder="Phone number" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Occasion">Occasion</option>
                        <option value="1">Occasion 01</option>
                        <option value="2">Occasion 02</option>
                        <option value="3">Occasion 03</option>
                        <option value="4">Occasion 04</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Preferred food">Preferred food</option>
                        <option value="1">Preferred food 01</option>
                        <option value="2">Preferred food 02</option>
                        <option value="3">Preferred food 03</option>
                        <option value="4">Preferred food 04</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Number of persons">Number of persons</option>
                        <option value="1">Number of persons 01</option>
                        <option value="2">Number of persons 02</option>
                        <option value="3">Number of persons 03</option>
                        <option value="4">Number of persons 04</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Booking type">Booking type</option>
                        <option value="1">Booking type 01</option>
                        <option value="2">Booking type 02</option>
                        <option value="3">Booking type 03</option>
                        <option value="4">Booking type 04</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="icon"><i className="icon-13"></i></div>
                    <input type="text" name="date" placeholder="Booking date" id="datepicker" />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Special request"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                    <button type="submit" className="theme-btn-one">Make a Reservation</button>
                  </div>
                </div>
              </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
