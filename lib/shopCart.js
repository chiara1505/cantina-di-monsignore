import { getShopProductImage } from './shopProducts';
import { SHOP_FALLBACK_IMAGE } from './resolvePayloadMediaUrl';

export const SHOP_CART_STORAGE_KEY = 'cantina-shop-cart';

/**
 * @param {{ slug: string, image?: string }} item
 */
export function resolveShopCartItemImage(item) {
  const fromProduct = item.image?.trim() || getShopProductImage(item);

  if (fromProduct && fromProduct !== SHOP_FALLBACK_IMAGE) {
    return fromProduct;
  }

  if (item.slug) {
    return `/assets/images/shop/${item.slug}.jpg`;
  }

  return SHOP_FALLBACK_IMAGE;
}

/**
 * @typedef {{ slug: string, name: string, price: number, image: string, imageAlt?: string, quantity: number }} ShopCartItem
 */

/**
 * @param {unknown} value
 * @returns {ShopCartItem[]}
 */
export function normalizeShopCartItems(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      const slug = typeof item?.slug === 'string' ? item.slug : '';
      const name = typeof item?.name === 'string' ? item.name : '';
      const price = Number(item?.price);
      const quantity = Number.parseInt(String(item?.quantity ?? ''), 10);
      const image = resolveShopCartItemImage({
        slug,
        image: typeof item?.image === 'string' ? item.image : '',
      });
      const imageAlt = typeof item?.imageAlt === 'string' ? item.imageAlt : undefined;

      if (!slug || !name || !Number.isFinite(price) || price < 0 || !Number.isFinite(quantity) || quantity < 1) {
        return null;
      }

      return {
        slug,
        name,
        price,
        image,
        imageAlt,
        quantity,
      };
    })
    .filter(Boolean);
}

/**
 * @returns {ShopCartItem[]}
 */
export function readShopCartFromStorage() {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(SHOP_CART_STORAGE_KEY);
    if (!raw) return [];
    return normalizeShopCartItems(JSON.parse(raw));
  } catch {
    return [];
  }
}

/**
 * @param {ShopCartItem[]} items
 */
export function writeShopCartToStorage(items) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SHOP_CART_STORAGE_KEY, JSON.stringify(items));
}

/**
 * @param {{ slug: string, name: string, price: number, image: string, imageAlt?: string }} product
 * @param {number} quantity
 * @returns {ShopCartItem}
 */
export function createCartItemFromProduct(product, quantity) {
  return {
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: resolveShopCartItemImage(product),
    imageAlt: product.imageAlt,
    quantity: Math.max(1, quantity),
  };
}

/**
 * @param {ShopCartItem[]} cart
 * @param {{ slug: string, name: string, price: number, image: string, imageAlt?: string }} product
 * @param {number} quantity
 * @returns {ShopCartItem[]}
 */
export function mergeCartItem(cart, product, quantity) {
  const qty = Math.max(1, quantity);
  const existingIndex = cart.findIndex((item) => item.slug === product.slug);

  if (existingIndex === -1) {
    return [...cart, createCartItemFromProduct(product, qty)];
  }

  return cart.map((item, index) =>
    index === existingIndex
      ? {
          ...item,
          name: product.name,
          price: product.price,
          image: resolveShopCartItemImage(product),
          imageAlt: product.imageAlt,
          quantity: item.quantity + qty,
        }
      : item,
  );
}

/**
 * @param {ShopCartItem[]} cart
 * @param {string} slug
 * @param {number} quantity
 * @returns {ShopCartItem[]}
 */
export function updateCartItemQuantity(cart, slug, quantity) {
  const qty = Math.max(1, quantity);

  return cart.map((item) => (item.slug === slug ? { ...item, quantity: qty } : item));
}

/**
 * @param {ShopCartItem[]} cart
 * @param {string} slug
 * @returns {ShopCartItem[]}
 */
export function removeCartItem(cart, slug) {
  return cart.filter((item) => item.slug !== slug);
}

/**
 * @param {ShopCartItem[]} cart
 */
export function getCartItemCount(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * @param {ShopCartItem[]} cart
 */
export function getCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
