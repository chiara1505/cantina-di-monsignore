import { normalizeShopCartItems, getCartSubtotal } from '@/lib/shopCart';
import { formatShopPrice } from '@/lib/shopProducts';
import { getShopOrderEmail } from '@/lib/shopOrder';
import {
  DEFAULT_RESERVATION_FROM_EMAIL,
  getReservationFromEmail,
} from '@/lib/reservationEmail';

export function getShopOrderToEmail() {
  return process.env.SHOP_ORDER_TO_EMAIL?.trim() || getShopOrderEmail();
}

export function getShopOrderFromEmail() {
  return process.env.SHOP_ORDER_FROM_EMAIL?.trim() || getReservationFromEmail() || DEFAULT_RESERVATION_FROM_EMAIL;
}

/**
 * @param {Record<string, unknown>} body
 */
export function parseShopOrderRequest(body) {
  const honeypot = String(body.company ?? '').trim();
  if (honeypot) {
    return { ok: false, error: 'Richiesta non valida.' };
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const notes = String(body.notes ?? '').trim();
  const shopOrderConsent = body.shopOrderConsent === true || body.shopOrderConsent === 'yes';

  if (!shopOrderConsent) {
    return { ok: false, error: 'Devi accettare i Termini e condizioni dello Shop e la Privacy Policy.' };
  }

  if (!name || name.length < 2) {
    return { ok: false, error: 'Inserisci nome e cognome.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Inserisci un indirizzo email valido.' };
  }

  const items = normalizeShopCartItems(body.items);

  if (!items.length) {
    return { ok: false, error: 'Il carrello è vuoto.' };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      notes,
      items,
    },
  };
}

/**
 * @param {{
 *   name: string,
 *   email: string,
 *   notes: string,
 *   items: import('@/lib/shopCart').ShopCartItem[],
 * }} order
 */
export function buildShopOrderEmailContent(order) {
  const subject =
    order.items.length === 1
      ? `Ordine shop - ${order.items[0].name}`
      : 'Ordine shop - La Cantina di Monsignore';

  const itemLines = order.items.map(
    (item) => `- ${item.quantity}x ${item.name} (${formatShopPrice(item.price * item.quantity)})`,
  );
  const total = getCartSubtotal(order.items);

  const lines = [
    'Nuova richiesta ordine shop dal sito web.',
    '',
    `Nome: ${order.name}`,
    `Email: ${order.email}`,
    '',
    'Prodotti richiesti:',
    ...itemLines,
    '',
    `Totale indicativo: ${formatShopPrice(total)}`,
    order.notes ? `Note del cliente: ${order.notes}` : 'Note del cliente: —',
    '',
    'Contattare il cliente per confermare disponibilità, consegna o ritiro.',
  ];

  const text = lines.join('\n');
  const html = lines
    .map((line) => (line ? `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>` : '<br />'))
    .join('');

  return { subject, text, html };
}
