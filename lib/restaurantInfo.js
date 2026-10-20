import { CONTACT_MAP_COORDS } from '@/lib/contactInfo';
import { DEFAULT_WEEKLY_HOURS, buildSchemaOpeningHours } from '@/lib/openingHours';
import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults';

export const RESTAURANT_NAME = 'Cantina di Monsignore';

export const DEFAULT_SITE_URL = 'https://cantina-di-monsignore.vercel.app';

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
}

export function getRestaurantId() {
  return `${getSiteUrl()}/#restaurant`;
}

export function getOrganizationId() {
  return `${getSiteUrl()}/#organization`;
}

export function getWebsiteId() {
  return `${getSiteUrl()}/#website`;
}

export const RESTAURANT_LOGO_PATH = '/assets/images/logo.png';

export const RESTAURANT_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: "Piazza Sant'Antonio n. 5",
  addressLocality: 'Castiglione di Sicilia',
  addressRegion: 'CT',
  addressCountry: 'IT',
};

export const RESTAURANT_GEO = {
  '@type': 'GeoCoordinates',
  latitude: CONTACT_MAP_COORDS.lat,
  longitude: CONTACT_MAP_COORDS.lng,
};

export const RESTAURANT_SERVES_CUISINE = ['Italian', 'Sicilian'];

export const RESTAURANT_PRICE_RANGE = '€€';

export const RESTAURANT_IMAGES = [
  '/assets/images/banner/banner-1.jpg',
  RESTAURANT_LOGO_PATH,
];

/** Fallback statico se non arrivano settings CMS. */
export const RESTAURANT_OPENING_HOURS = buildSchemaOpeningHours(DEFAULT_WEEKLY_HOURS);

export function buildOpeningHoursSpecification(weeklyHours = DEFAULT_WEEKLY_HOURS) {
  const specs = buildSchemaOpeningHours(weeklyHours);
  return specs.length > 0 ? specs : RESTAURANT_OPENING_HOURS;
}

export function buildRestaurantCore(settings = DEFAULT_RESTAURANT_SETTINGS) {
  const siteUrl = getSiteUrl();
  const { contact, social } = settings;

  return {
    '@type': 'Restaurant',
    '@id': getRestaurantId(),
    name: RESTAURANT_NAME,
    url: siteUrl,
    telephone: contact.phone,
    email: contact.email,
    image: RESTAURANT_IMAGES.map((path) => `${siteUrl}${path}`),
    priceRange: RESTAURANT_PRICE_RANGE,
    servesCuisine: RESTAURANT_SERVES_CUISINE,
    address: RESTAURANT_POSTAL_ADDRESS,
    geo: RESTAURANT_GEO,
    openingHoursSpecification: buildOpeningHoursSpecification(settings.weeklyHours),
    acceptsReservations: true,
    sameAs: social.sameAs,
  };
}
