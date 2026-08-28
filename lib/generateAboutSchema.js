import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getRestaurantId, getSiteUrl } from '@/lib/restaurantInfo';

export function generateAboutSchema() {
  const siteUrl = getSiteUrl();
  const restaurantId = getRestaurantId();
  const { title, description } = PAGE_METADATA.about;

  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about-us/#webpage`,
    url: `${siteUrl}/about-us`,
    name: title,
    description,
    about: { '@id': restaurantId },
    mainEntity: { '@id': restaurantId },
  };
}
