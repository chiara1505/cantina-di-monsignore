import { PAGE_METADATA } from '@/lib/pageMetadata';
import {
  RESTAURANT_LOGO_PATH,
  RESTAURANT_NAME,
  buildRestaurantCore,
  getOrganizationId,
  getSiteUrl,
  getWebsiteId,
} from '@/lib/restaurantInfo';
import { SITE_CONTACT_INFO, SITE_SOCIAL_SAME_AS } from '@/lib/siteNavigation';

function buildOrganization() {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}${RESTAURANT_LOGO_PATH}`;

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
    email: SITE_CONTACT_INFO.email,
    telephone: SITE_CONTACT_INFO.phone,
    sameAs: SITE_SOCIAL_SAME_AS,
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

export function generateHomeSchema() {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...buildRestaurantCore(),
        parentOrganization: {
          '@id': getOrganizationId(),
        },
        hasMenu: {
          '@type': 'Menu',
          name: 'Menù alla Carta',
          url: `${siteUrl}/menu`,
        },
      },
      buildOrganization(),
      buildWebSite(),
    ],
  };
}
