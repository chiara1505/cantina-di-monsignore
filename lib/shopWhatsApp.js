import { buildShopWhatsAppHref as buildHref, buildShopOrderMessage } from '@/lib/shopOrder';

/** @deprecated Usare lib/shopOrder.js */
export function buildShopWhatsAppMessage(product, quantity = 1) {
  return buildShopOrderMessage(product, quantity);
}

/** @deprecated Usare lib/shopOrder.js */
export function buildShopWhatsAppHref(product, quantity = 1) {
  return buildHref(product, quantity);
}
