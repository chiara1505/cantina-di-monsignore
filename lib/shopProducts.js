/**
 * Catalogo shop temporaneo (statico) fino alla collection Payload dedicata.
 * Sostituire getShopProducts / getShopProductBySlug con fetch da CMS quando pronto.
 */

import { SHOP_WINE_PRODUCTS } from './shopWinesData.js';

/** @typedef {'vini' | 'conserve' | 'olio'} ShopCategory */

/** @typedef {'available' | 'restocking' | 'out_of_stock'} ShopAvailability */

/**
 * @typedef {{ label: string, value: string }} ShopProductSpec
 */

/**
 * @typedef {Object} ShopProduct
 * @property {string} slug
 * @property {string} name
 * @property {ShopCategory} category
 * @property {number} price
 * @property {ShopAvailability} availability
 * @property {boolean} published
 * @property {string} shortDescription
 * @property {string} [description]
 * @property {string} [alcohol]
 * @property {string[]} [characteristics]
 * @property {string[]} [pairings]
 * @property {string} image
 * @property {string} [imageCarousel]
 * @property {string} [imageAlt]
 * @property {ShopProductSpec[]} specs
 */

export const SHOP_CATEGORIES = {
  vini: { label: 'Vini', slug: 'vini' },
  conserve: { label: 'Conserve', slug: 'conserve' },
  olio: { label: 'Olio', slug: 'olio' },
};

/** @type {Record<ShopAvailability, { label: string, modifier: ShopAvailability }>} */
export const SHOP_AVAILABILITY = {
  available: { label: 'Disponibile', modifier: 'available' },
  restocking: { label: 'In riassortimento', modifier: 'restocking' },
  out_of_stock: { label: 'Esaurito', modifier: 'out_of_stock' },
};

export function getShopAvailability(availability) {
  return SHOP_AVAILABILITY[availability] ?? SHOP_AVAILABILITY.available;
}

/** @type {ShopProduct[]} */
export const SHOP_PRODUCTS = [
  ...SHOP_WINE_PRODUCTS,
  {
    slug: 'confettura-di-fichi',
    name: 'Confettura di fichi',
    category: 'conserve',
    price: 8.5,
    availability: 'available',
    published: false,
    shortDescription:
      'Confettura artigianale preparata con fichi maturi del territorio. Perfetta a colazione o con formaggi freschi.',
    description:
      'Preparata in piccole quantità per preservare il sapore autentico della frutta. Senza coloranti né conservanti aggiunti.',
    characteristics: [
      'Ingredienti: fichi, zucchero, limone',
      'Conservazione: dopo l\'apertura, in frigorifero',
    ],
    pairings: [
      'Pane tostato e burro',
      'Formaggi freschi',
      'Yogurt e colazione',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Confettura di fichi artigianale',
    specs: [
      { label: 'Tipologia', value: 'Confettura artigianale' },
      { label: 'Produttore', value: 'La Cantina di Monsignore' },
      { label: 'Provenienza', value: 'Sicilia' },
      { label: 'Formato', value: '220 g' },
    ],
  },
  {
    slug: 'olio-evo-siciliano',
    name: 'Olio extravergine di oliva siciliano',
    category: 'olio',
    price: 12,
    availability: 'available',
    published: false,
    shortDescription:
      'Olio EVO dal gusto intenso e fruttato, ottimo a crudo su pane, insalate e piatti della tradizione.',
    description:
      'Spremitura a freddo di olive selezionate. Conservare in luogo fresco e al riparo dalla luce.',
    characteristics: [
      'Categoria: extravergine di oliva',
      'Origine: Sicilia',
      'Conservazione: luogo fresco, al riparo dalla luce',
    ],
    pairings: [
      'Insalate e verdure crude',
      'Pane e bruschette',
      'Piatti della tradizione siciliana',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Olio extravergine di oliva siciliano',
    specs: [
      { label: 'Tipologia', value: 'Olio extravergine di oliva' },
      { label: 'Produttore', value: 'La Cantina di Monsignore' },
      { label: 'Provenienza', value: 'Sicilia' },
      { label: 'Formato', value: '500 ml' },
    ],
  },
];

export function getShopCategoryLabel(category) {
  return SHOP_CATEGORIES[category]?.label ?? category;
}

export function getShopCategoryHref(category) {
  const slug = SHOP_CATEGORIES[category]?.slug ?? category;
  return `/shop?categoria=${slug}`;
}

export function formatShopPrice(price) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/** Immagine catalogo (JPG) o carosello Home (PNG trasparente, se disponibile). */
export function getShopProductImage(product, variant = 'grid') {
  if (variant === 'carousel' && product.imageCarousel) {
    return product.imageCarousel;
  }

  return product.image;
}

export function getShopProducts() {
  return SHOP_PRODUCTS;
}

export function getShopCatalogProducts() {
  return SHOP_PRODUCTS.filter((product) => product.published);
}

export function getShopProductBySlug(slug) {
  return SHOP_PRODUCTS.find((product) => product.slug === slug) ?? null;
}

export function getAllShopProductSlugs() {
  return SHOP_PRODUCTS.map((product) => product.slug);
}

/**
 * @param {string} slug
 * @param {number} [limit]
 * @returns {ShopProduct[]}
 */
export function getRelatedShopProducts(slug, limit = 4) {
  const current = getShopProductBySlug(slug);
  if (!current) return [];

  const sameCategory = SHOP_PRODUCTS.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );
  const others = SHOP_PRODUCTS.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
