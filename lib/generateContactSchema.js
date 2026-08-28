import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getRestaurantId, getSiteUrl } from '@/lib/restaurantInfo';
import { SITE_CONTACT_INFO } from '@/lib/siteNavigation';

function buildContactPoints() {
  return [
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONTACT_INFO.phone,
      email: SITE_CONTACT_INFO.email,
      contactType: 'customer service',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE_CONTACT_INFO.whatsapp,
      contactType: 'reservations',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
  ];
}

export function generateContactSchema() {
  const siteUrl = getSiteUrl();
  const restaurantId = getRestaurantId();
  const { title, description } = PAGE_METADATA.contact;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact/#webpage`,
        url: `${siteUrl}/contact`,
        name: title,
        description,
        about: { '@id': restaurantId },
        mainEntity: { '@id': restaurantId },
      },
      {
        '@type': 'Restaurant',
        '@id': restaurantId,
        contactPoint: buildContactPoints(),
      },
    ],
  };
}
