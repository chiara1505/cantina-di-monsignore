import { getSiteUrl } from '@/lib/restaurantInfo';

/**
 * @param {{ name: string, path: string }[]} items
 */
export function generateBreadcrumbSchema(items) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${siteUrl}/` : `${siteUrl}${item.path}`,
    })),
  };
}

export function buildTwoLevelBreadcrumb(title, path) {
  return generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: title, path },
  ]);
}
