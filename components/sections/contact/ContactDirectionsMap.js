import {
  CONTACT_ADDRESS,
  CONTACT_MAP_EMBED_URL,
  CONTACT_MAP_LINK_URL,
} from '@/lib/contactInfo';

export default function ContactDirectionsMap() {
  return (
    <div className="contact-directions-map">
      <div className="contact-directions-map__shape" aria-hidden="true">
        <div
          className="contact-directions-map__shape-top"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }}
        />
        <div
          className="contact-directions-map__shape-bottom"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}
        />
      </div>

      <div className="contact-directions-map__inner">
        <div className="contact-directions-map__viewport">
          <iframe
            title="Anteprima mappa La Cantina di Monsignore"
            src={CONTACT_MAP_EMBED_URL}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden="true"
          />

          <a
            href={CONTACT_MAP_LINK_URL}
            className="contact-directions-map__overlay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${CONTACT_ADDRESS} in Google Maps`}
          >
            <span className="contact-directions-map__pin" aria-hidden="true">
              <i className="fas fa-map-marker-alt" />
            </span>
            <span className="contact-directions-map__overlay-text">Apri in Google Maps</span>
          </a>
        </div>

        <div className="contact-directions-map__footer">
          <p className="contact-directions-map__address">{CONTACT_ADDRESS}</p>
          <a
            href={CONTACT_MAP_LINK_URL}
            className="contact-directions-map__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indicazioni stradali
            <i className="fas fa-external-link-alt" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
