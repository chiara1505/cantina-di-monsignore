import { SITE_CONTACT_INFO } from '@/lib/siteNavigation';
import { formatShopPrice } from '@/lib/shopProducts';

function normalizeEmailText(text) {
  return String(text).replace(/\u00a0/g, ' ');
}

/** Email destinazione ordini shop; override temporaneo via .env per test */
export function getShopOrderEmail() {
  return process.env.NEXT_PUBLIC_SHOP_ORDER_EMAIL?.trim() || SITE_CONTACT_INFO.email;
}

export function getShopOrderEmailHref() {
  return `mailto:${getShopOrderEmail()}`;
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function getShopOrderLineTotal(product, quantity) {
  const qty = Math.max(1, quantity);
  return product.price * qty;
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopOrderRecap(product, quantity) {
  const qty = Math.max(1, quantity);
  const lineTotal = getShopOrderLineTotal(product, qty);

  return {
    quantity: qty,
    unitPriceFormatted: formatShopPrice(product.price),
    lineTotalFormatted: formatShopPrice(lineTotal),
  };
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopOrderMessage(product, quantity) {
  return buildShopCartOrderMessage([{ product, quantity }]);
}

/**
 * @param {{ product: { name: string, price: number }, quantity: number }[]} items
 */
export function buildShopCartOrderMessage(items) {
  const normalizedItems = items.filter((entry) => entry?.product && entry.quantity > 0);

  if (normalizedItems.length === 0) {
    return 'Ciao, vorrei ordinare dal vostro shop.';
  }

  const lines = ['Ciao, vorrei ordinare dal vostro shop:', ''];
  let total = 0;

  normalizedItems.forEach(({ product, quantity }) => {
    const recap = buildShopOrderRecap(product, quantity);
    total += getShopOrderLineTotal(product, quantity);
    lines.push(`• ${recap.quantity}x ${product.name} — ${recap.lineTotalFormatted}`);
  });

  lines.push('', `Totale indicativo: ${formatShopPrice(total)}`, '', 'Grazie!');

  return lines.join('\n');
}

/**
 * @param {{ product: { name: string, price: number }, quantity: number }[]} items
 */
export function buildShopCartRecap(items) {
  const normalizedItems = items.filter((entry) => entry?.product && entry.quantity > 0);
  const lines = normalizedItems.map(({ product, quantity }) => ({
    product,
    quantity: Math.max(1, quantity),
    ...buildShopOrderRecap(product, quantity),
  }));
  const total = normalizedItems.reduce(
    (sum, { product, quantity }) => sum + getShopOrderLineTotal(product, quantity),
    0,
  );

  return {
    lines,
    totalFormatted: formatShopPrice(total),
  };
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopWhatsAppHref(product, quantity) {
  return buildShopCartWhatsAppHref([{ product, quantity }]);
}

/**
 * @param {{ product: { name: string, price: number }, quantity: number }[]} items
 */
export function buildShopCartOrderEmailMessage(items) {
  const normalizedItems = items.filter((entry) => entry?.product && entry.quantity > 0);

  if (normalizedItems.length === 0) {
    return 'Ciao,\n\nvorrei ordinare dal vostro shop.\n\nGrazie!';
  }

  const lines = ['Ciao,', '', 'vorrei ordinare dal vostro shop:', ''];
  let total = 0;

  normalizedItems.forEach(({ product, quantity }) => {
    const recap = buildShopOrderRecap(product, quantity);
    total += getShopOrderLineTotal(product, quantity);
    lines.push(
      `- ${recap.quantity}x ${normalizeEmailText(product.name)} (${normalizeEmailText(recap.lineTotalFormatted)})`,
    );
  });

  lines.push('', `Totale indicativo: ${normalizeEmailText(formatShopPrice(total))}`, '', 'Grazie!');

  return lines.join('\n');
}

function buildShopCartEmailSubject(items) {
  const normalizedItems = items.filter((entry) => entry?.product && entry.quantity > 0);

  return normalizedItems.length === 1
    ? `Ordine shop - ${normalizeEmailText(normalizedItems[0].product.name)}`
    : 'Ordine shop - La Cantina di Monsignore';
}

/**
 * @param {{ product: { name: string, price: number }, quantity: number }[]} items
 */
export function buildShopCartWhatsAppHref(items) {
  const message = buildShopCartOrderMessage(items);
  return `${SITE_CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(message)}`;
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopEmailHref(product, quantity) {
  return buildShopCartEmailHref([{ product, quantity }]);
}

/**
 * @param {{ product: { name: string, price: number }, quantity: number }[]} items
 */
export function buildShopCartEmailHref(items) {
  const subject = buildShopCartEmailSubject(items);
  const body = buildShopCartOrderEmailMessage(items);

  return `${getShopOrderEmailHref()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
