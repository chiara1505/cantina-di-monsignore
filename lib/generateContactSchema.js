import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getRestaurantId, getSiteUrl } from '@/lib/restaurantInfo';
import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults';

function buildContactPoints(settings = DEFAULT_RESTAURANT_SETTINGS) {
  const { contact } = settings;

  return [
    {
      '@type': 'ContactPoint',
      telephone: contact.phone,
      email: contact.email,
      contactType: 'customer service',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
    {
      '@type': 'ContactPoint',
      telephone: contact.whatsapp,
      contactType: 'reservations',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
  ];
}

export function generateContactSchema(settings = DEFAULT_RESTAURANT_SETTINGS) {
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
        contactPoint: buildContactPoints(settings),
      },
    ],
  };
}
