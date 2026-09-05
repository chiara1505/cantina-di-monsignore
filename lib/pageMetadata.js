import { getSiteUrl } from '@/lib/restaurantInfo';

export const SITE_NAME = 'La Cantina di Monsignore';

export const OG_IMAGE_PATH = '/assets/images/og/og-image.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

const OG_IMAGE_ALT = `${SITE_NAME} — Ristorante a Castiglione di Sicilia`;

function getOpenGraphImages() {
  return [
    {
      url: OG_IMAGE_PATH,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: OG_IMAGE_ALT,
    },
  ];
}

export function buildPageMetadata({ title, description, path }) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: 'it_IT',
      type: 'website',
      images: getOpenGraphImages(),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export const NOINDEX_ROBOTS = {
  index: false,
  follow: false,
};

/**
 * Metadata per pagine template/demo non indicizzabili.
 * @param {{ title: string, path: string }} page
 */
export function buildTemplatePageMetadata({ title, path }) {
  return {
    ...buildPageMetadata({
      title: `${title} — Template`,
      description: 'Pagina dimostrativa del tema, non indicizzata nei motori di ricerca.',
      path,
    }),
    robots: NOINDEX_ROBOTS,
  };
}

export const DEFAULT_METADATA = buildPageMetadata({
  title: SITE_NAME,
  description:
    'Ristorante di cucina siciliana nel centro di Castiglione di Sicilia, vicino Etna e Gole dell\'Alcantara.',
  path: '/',
});

export const PAGE_METADATA = {
  home: buildPageMetadata({
    title: 'La Cantina di Monsignore - Ristorante Castiglione di Sicilia',
    description:
      'Ristorante di cucina siciliana nel centro di Castiglione di Sicilia, vicino Etna e Gole dell\'Alcantara. Piatti della tradizione rivisitati. Prenota un tavolo.',
    path: '/',
  }),
  about: buildPageMetadata({
    title: 'Storia e valori - La Cantina di Monsignore',
    description:
      'La nostra storia, i nostri valori e la nostra idea di ristorazione, nel centro storico di Castiglione di Sicilia. Scopri la location e incontra la squadra.',
    path: '/about-us',
  }),
  menu: buildPageMetadata({
    title: 'Menù alla Carta - La Cantina di Monsignore',
    description:
      'Piatti della tradizione siciliana rivistati in chiave moderna e preparati con prodotti del territorio. Leggi il menù del ristorante a Castiglione di Sicilia.',
    path: '/menu',
  }),
  wines: buildPageMetadata({
    title: 'Carta dei Vini - La Cantina di Monsignore',
    description:
      'Le migliori etichette del territorio etneo, siciliano, nazionale e internazionale, selezionate per accompagnare i piatti. Leggi la Carta dei Vini e Champagne.',
    path: '/menu/vini',
  }),
  contact: buildPageMetadata({
    title: 'Contatti - La Cantina di Monsignore',
    description:
      'La Cantina di Monsignore si trova in Piazza Sant\'Antonio n. 5 nel cuore di Castiglione di Sicilia. Contattaci e raggiungici per vivere la tua esperienza a tavola.',
    path: '/contact',
  }),
  reservation: buildPageMetadata({
    title: 'Prenotazioni - La Cantina di Monsignore',
    description:
      'Compila il modulo, scrivici o chiama per prenotare il tuo tavolo. Ti aspettiamo a Castiglione di Sicilia per farti assaporare le eccellenze del territorio.',
    path: '/reservation',
  }),
  privacy: buildPageMetadata({
    title: 'Privacy Policy - La Cantina di Monsignore',
    description:
      'Informativa sul trattamento dei dati personali per i visitatori del sito de La Cantina di Monsignore, ristorante a Castiglione di Sicilia.',
    path: '/privacy-policy',
  }),
  cookie: buildPageMetadata({
    title: 'Cookie Policy - La Cantina di Monsignore',
    description:
      'Informazioni su cookie e tecnologie simili utilizzate sul sito de La Cantina di Monsignore e su come gestire le preferenze.',
    path: '/cookie-policy',
  }),
  terms: buildPageMetadata({
    title: 'Termini e condizioni Shop - La Cantina di Monsignore',
    description:
      'Condizioni di vendita della sezione Shop de La Cantina di Monsignore: richiesta ordine, conferma, pagamento, consegna e diritto di recesso.',
    path: '/termini-e-condizioni',
  }),
  cart: buildPageMetadata({
    title: 'Carrello - La Cantina di Monsignore',
    description:
      'Rivedi i prodotti selezionati nello shop de La Cantina di Monsignore e invia la richiesta d\'ordine via WhatsApp o email.',
    path: '/cart',
  }),
  shop: buildPageMetadata({
    title: 'Shop - La Cantina di Monsignore',
    description:
      'Vini, conserve e olio selezionati de La Cantina di Monsignore. Scopri i prodotti del territorio e ordina comodamente su WhatsApp.',
    path: '/shop',
  }),
};

/**
 * @param {{ name: string, shortDescription: string, slug: string }} product
 */
export function buildShopProductMetadata(product) {
  return buildPageMetadata({
    title: `${product.name} - Shop - La Cantina di Monsignore`,
    description: product.shortDescription,
    path: `/shop/${product.slug}`,
  });
}

export function getMetadataBaseUrl() {
  return new URL(getSiteUrl());
}
