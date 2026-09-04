import { PAGE_METADATA } from '@/lib/pageMetadata';
import {
  RESTAURANT_LOGO_PATH,
  RESTAURANT_NAME,
  buildRestaurantCore,
  getOrganizationId,
  getSiteUrl,
  getWebsiteId,
} from '@/lib/restaurantInfo';
import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults';

function buildOrganization(settings = DEFAULT_RESTAURANT_SETTINGS) {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}${RESTAURANT_LOGO_PATH}`;
  const { contact, social } = settings;

  return {
    '@type': 'Organization',
    '@id': getOrganizationId(),
    name: RESTAURANT_NAME,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    image: logoUrl,
    email: contact.email,
    telephone: contact.phone,
    sameAs: social.sameAs,
  };
}

function buildWebSite() {
  const siteUrl = getSiteUrl();

  return {
    '@type': 'WebSite',
    '@id': getWebsiteId(),
    url: siteUrl,
    name: RESTAURANT_NAME,
    description: PAGE_METADATA.home.description,
    inLanguage: 'it-IT',
    publisher: {
      '@id': getOrganizationId(),
    },
  };
}

export function generateHomeSchema(settings = DEFAULT_RESTAURANT_SETTINGS) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...buildRestaurantCore(settings),
        parentOrganization: {
          '@id': getOrganizationId(),
        },
        hasMenu: {
          '@type': 'Menu',
          name: 'Menù alla Carta',
          url: `${siteUrl}/menu`,
        },
      },
      buildOrganization(settings),
      buildWebSite(),
    ],
  };
}
