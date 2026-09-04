import { buildRestaurantCore, getSiteUrl } from '@/lib/restaurantInfo';
import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults';

export function generateWineMenuSchema(settings = DEFAULT_RESTAURANT_SETTINGS) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    ...buildRestaurantCore(settings),
    hasMenu: {
      '@type': 'Menu',
      name: 'Carta dei Vini',
      url: `${siteUrl}/menu/vini`,
    },
  };
}
