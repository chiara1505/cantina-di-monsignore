import { CONTACT_MAP_COORDS } from '@/lib/contactInfo';

const MENU_SECTIONS = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'bevande', label: 'Bevande' },
];

function parsePrice(priceText) {
  if (!priceText) return null;

  const normalized = priceText
    .replace(/\s/g, '')
    .replace('€', '')
    .replace(',', '.');

  const value = Number.parseFloat(normalized);

  if (Number.isNaN(value)) return null;

  return {
    '@type': 'Offer',
    price: value.toFixed(2),
    priceCurrency: 'EUR',
  };
}

function buildMenuItem(dish) {
  const item = {
    '@type': 'MenuItem',
    name: dish.name,
  };

  if (dish.description) {
    item.description = dish.description;
  }

  const offers = parsePrice(dish.price);
  if (offers) {
    item.offers = offers;
  }

  if (dish.allergens) {
    item.description = [item.description, `Allergeni: ${dish.allergens}`]
      .filter(Boolean)
      .join(' ');
  }

  return item;
}

export function generateMenuSchema(dishes) {
  const dishesByCategory = MENU_SECTIONS.reduce((acc, section) => {
    acc[section.id] = dishes.filter((dish) => dish.category === section.id);
    return acc;
  }, {});

  const hasMenuSection = MENU_SECTIONS.filter((section) => dishesByCategory[section.id]?.length)
    .map((section) => ({
      '@type': 'MenuSection',
      name: section.label,
      hasMenuItem: dishesByCategory[section.id].map(buildMenuItem),
    }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Cantina di Monsignore',
    servesCuisine: 'Italian',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Piazza Sant'Antonio n. 5",
      addressLocality: 'Castiglione di Sicilia',
      addressRegion: 'ME',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT_MAP_COORDS.lat,
      longitude: CONTACT_MAP_COORDS.lng,
    },
    hasMenu: {
      '@type': 'Menu',
      name: 'Menù alla Carta',
      hasMenuSection,
    },
  };

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    schema.url = process.env.NEXT_PUBLIC_SITE_URL;
    schema.hasMenu.url = `${process.env.NEXT_PUBLIC_SITE_URL}/menu`;
  }

  return schema;
}
