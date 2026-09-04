import { PAGE_METADATA } from '@/lib/pageMetadata';
import { generateBreadcrumbSchema } from '@/lib/generateBreadcrumbSchema';
import {
  RESTAURANT_NAME,
  getOrganizationId,
  getRestaurantId,
  getSiteUrl,
  getWebsiteId,
} from '@/lib/restaurantInfo';
import { getShopCategoryLabel } from '@/lib/shopProducts';
import { SHOP_FALLBACK_IMAGE } from '@/lib/resolvePayloadMediaUrl';

const AVAILABILITY_MAP = {
  available: 'https://schema.org/InStock',
  restocking: 'https://schema.org/BackOrder',
  out_of_stock: 'https://schema.org/OutOfStock',
};

function toAbsoluteUrl(url) {
  const siteUrl = getSiteUrl();
  const fallback = `${siteUrl}${SHOP_FALLBACK_IMAGE}`;

  if (!url) return fallback;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/')) return `${siteUrl}${url}`;
  return `${siteUrl}/${url}`;
}

function getProductBrandName(product) {
  const producer = product.specs?.find((spec) => spec.label === 'Produttore')?.value;
  return producer?.trim() || RESTAURANT_NAME;
}

function buildProductOffer(product) {
  const siteUrl = getSiteUrl();
  const productUrl = `${siteUrl}/shop/${product.slug}`;

  return {
    '@type': 'Offer',
    price: Number(product.price).toFixed(2),
    priceCurrency: 'EUR',
    availability: AVAILABILITY_MAP[product.availability] ?? AVAILABILITY_MAP.available,
    url: productUrl,
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': getOrganizationId() },
  };
}

/**
 * @param {import('@/lib/shopProducts').ShopProduct} product
 */
export function buildShopProductStructuredData(product) {
  const siteUrl = getSiteUrl();
  const productUrl = `${siteUrl}/shop/${product.slug}`;

  /** @type {Record<string, unknown>} */
  const structured = {
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.description || product.shortDescription,
    url: productUrl,
    image: toAbsoluteUrl(product.image),
    sku: product.slug,
    category: getShopCategoryLabel(product.category),
    brand: {
      '@type': 'Brand',
      name: getProductBrandName(product),
    },
    offers: buildProductOffer(product),
  };

  if (product.alcohol) {
    structured.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Gradazione alcolica',
        value: product.alcohol,
      },
    ];
  }

  return structured;
}

/**
 * @param {import('@/lib/shopProducts').ShopProduct[]} products
 */
export function generateShopSchema(products) {
  const siteUrl = getSiteUrl();
  const { title, description } = PAGE_METADATA.shop;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/shop/#webpage`,
        url: `${siteUrl}/shop`,
        name: title,
        description,
        isPartOf: { '@id': getWebsiteId() },
        about: { '@id': getRestaurantId() },
        mainEntity: {
          '@type': 'ItemList',
          '@id': `${siteUrl}/shop/#itemlist`,
          name: 'Shop de La Cantina di Monsignore',
          numberOfItems: products.length,
          itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: product.name,
            url: `${siteUrl}/shop/${product.slug}`,
          })),
        },
      },
    ],
  };
}

/**
 * @param {import('@/lib/shopProducts').ShopProduct} product
 * @param {{ name: string, path: string }[]} breadcrumbItems
 */
export function generateShopProductSchema(product, breadcrumbItems) {
  const siteUrl = getSiteUrl();
  const productUrl = `${siteUrl}/shop/${product.slug}`;
  const productEntity = buildShopProductStructuredData(product);

  const breadcrumb = generateBreadcrumbSchema(breadcrumbItems);
  delete breadcrumb['@context'];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${productUrl}#webpage`,
        url: productUrl,
        name: product.name,
        description: product.shortDescription,
        isPartOf: { '@id': getWebsiteId() },
        breadcrumb: { '@id': `${productUrl}#breadcrumb` },
        mainEntity: { '@id': productEntity['@id'] },
      },
      productEntity,
      {
        ...breadcrumb,
        '@id': `${productUrl}#breadcrumb`,
      },
    ],
  };
}
