import { SITE_CONTACT_INFO } from '@/lib/siteNavigation';

/** Dati del titolare del trattamento (Privacy Policy). */
export const DATA_CONTROLLER = {
  businessName: 'La Cantina di Monsignore',
  ownerName: 'Giuseppe Mercia',
  /** Sede legale del titolare (distinta dall’indirizzo del ristorante in pagina Contatti). */
  address: 'Via Savoia n. 6, Castiglione di Sicilia (ME)',
  email: SITE_CONTACT_INFO.email,
  vatNumber: '05674590871',
};

export const LEGAL_LAST_UPDATED = '29 agosto 2026';

export const COOKIE_CONSENT_STORAGE_KEY = 'cantina-cookie-consent';

export const COOKIE_CONSENT = {
  essential: 'essential',
  all: 'all',
};
