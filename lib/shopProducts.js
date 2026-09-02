/**
 * Catalogo shop temporaneo (statico) fino alla collection Payload dedicata.
 * Sostituire getShopProducts / getShopProductBySlug con fetch da CMS quando pronto.
 */

/** @typedef {'vini' | 'conserve' | 'olio'} ShopCategory */

/** @typedef {'available' | 'restocking' | 'out_of_stock'} ShopAvailability */

/**
 * @typedef {Object} ShopProductSpecs
 * @property {string} denominazione
 * @property {string} produttore
 * @property {string} zonaDiProduzione
 * @property {string} formato
 */

/**
 * @typedef {Object} ShopProduct
 * @property {string} slug
 * @property {string} name
 * @property {ShopCategory} category
 * @property {number} price
 * @property {ShopAvailability} availability
 * @property {string} shortDescription
 * @property {string} [description]
 * @property {string | string[]} [characteristics]
 * @property {string | string[]} [pairings]
 * @property {string} image
 * @property {string} [imageAlt]
 * @property {ShopProductSpecs} specs
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
  {
    slug: 'etna-rosso-giovanni-rosso',
    name: 'Giovanni Rosso — Etna Rosso DOP',
    category: 'vini',
    price: 18,
    availability: 'available',
    shortDescription:
      'Olfatto fine e penetrante, con note di viola, bergamotto, sottobosco e pietra bagnata. Al palato è succulento e progressivo, con tannini delicati e un finale deciso e sapido.',
    description:
      'Vino rosso dell\'Etna, da uve Nerello Mascalese raccolte a mano in ottobre. Dopo la pigiatura soffice, il mosto fermenta a contatto con le bucce in vasche d\'acciaio per circa 10 giorni, con rimontaggi giornalieri e un délestage a metà periodo. L\'affinamento è attualmente in fase sperimentale.\n\nAl naso è fine e penetrante, con profumi di viola, bergamotto, sottobosco e pietra bagnata, con un accenno di pepe bianco. In bocca è succulento e progressivo, con tannini delicati e vivace acidità; il finale è deciso e sapido.',
    characteristics: [
      'Collocazione: Zona della DOP Etna Rosso',
      'Varietà: Nerello Mascalese',
      'Vigneto: esposizioni nord/nord-est, altitudine 730–750 m s.l.m.',
      'Vinificazione: fermentazione in vasche d\'acciaio per circa 10 giorni, con rimontaggi giornalieri e délestage a metà periodo',
      'Affinamento: in fase sperimentale',
      'Profumi: viola, bergamotto, sottobosco, pietra bagnata, accenno di pepe bianco',
      'Palato: succulento e progressivo, tannini delicati, vivace acidità, finale deciso e sapido',
      'Temperatura di servizio: 16–17 °C',
    ],
    pairings: [
      'Filetto alla Wellington',
      'Zuppa di funghi con crostoni',
    ],
    image: '/assets/images/shop/etna-rosso-giovanni-rosso.jpg',
    imageAlt: 'Giovanni Rosso Etna Rosso DOP — bottiglia',
    specs: {
      denominazione: 'Etna Rosso DOP',
      produttore: 'Giovanni Rosso',
      zonaDiProduzione: 'Zona della DOP Etna Rosso',
      formato: '750 ml',
    },
  },
  {
    slug: 'confettura-di-fichi',
    name: 'Confettura di fichi',
    category: 'conserve',
    price: 8.5,
    availability: 'available',
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
    specs: {
      denominazione: 'Confettura artigianale',
      produttore: 'La Cantina di Monsignore',
      zonaDiProduzione: 'Sicilia',
      formato: '220 g',
    },
  },
  {
    slug: 'olio-evo-siciliano',
    name: 'Olio extravergine di oliva siciliano',
    category: 'olio',
    price: 12,
    availability: 'available',
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
    specs: {
      denominazione: 'Olio extravergine di oliva',
      produttore: 'La Cantina di Monsignore',
      zonaDiProduzione: 'Sicilia',
      formato: '500 ml',
    },
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

export function getShopProducts() {
  return SHOP_PRODUCTS;
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
export function getRelatedShopProducts(slug, limit = 3) {
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
