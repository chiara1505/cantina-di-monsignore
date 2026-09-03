import { SITE_CONTACT_INFO } from '@/lib/siteNavigation';
import { formatShopPrice } from '@/lib/shopProducts';

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
  const recap = buildShopOrderRecap(product, quantity);
  const lines = [
    'Ciao, vorrei ordinare dal vostro shop:',
    '',
    `• ${recap.quantity}x ${product.name}`,
    `Prezzo unitario: ${recap.unitPriceFormatted}`,
    `Totale indicativo: ${recap.lineTotalFormatted}`,
    '',
    'Grazie!',
  ];

  return lines.join('\n');
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopWhatsAppHref(product, quantity) {
  const message = buildShopOrderMessage(product, quantity);
  return `${SITE_CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(message)}`;
}

/**
 * @param {{ name: string, price: number }} product
 * @param {number} quantity
 */
export function buildShopEmailHref(product, quantity) {
  const subject = `Ordine shop - ${product.name}`;
  const body = buildShopOrderMessage(product, quantity);
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `${getShopOrderEmailHref()}?${params.toString()}`;
}
