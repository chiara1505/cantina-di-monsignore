import { resolvePayloadMediaUrl, SHOP_FALLBACK_IMAGE } from './resolvePayloadMediaUrl.js'

/**
 * Converte un documento Payload `shop-products` nel formato usato dal frontend.
 * @param {Record<string, unknown>} doc
 */
export function mapShopProductFromPayload(doc) {
  const productMedia = doc.productImage ?? doc.image
  const carouselMedia = doc.carouselImage
  const legacyImagePath =
    typeof doc.image === 'string' && doc.image.startsWith('/') ? doc.image : SHOP_FALLBACK_IMAGE

  const image = resolvePayloadMediaUrl(productMedia, legacyImagePath, 'card')
  const imageCarousel = carouselMedia
    ? resolvePayloadMediaUrl(carouselMedia, image, 'card')
    : image

  const imageAlt =
    (typeof doc.imageAlt === 'string' && doc.imageAlt.trim()) ||
    (typeof productMedia === 'object' &&
      productMedia &&
      typeof productMedia.alt === 'string' &&
      productMedia.alt.trim()) ||
    doc.name

  return {
    slug: doc.slug,
    name: doc.name,
    category: doc.category,
    price: doc.price,
    availability: doc.availability,
    published: doc.published ?? false,
    shortDescription: doc.shortDescription,
    description: doc.description ?? undefined,
    alcohol: doc.alcohol ?? undefined,
    characteristics: doc.characteristics?.map((entry) => entry.item).filter(Boolean) ?? [],
    pairings: doc.pairings?.map((entry) => entry.item).filter(Boolean) ?? [],
    image,
    imageCarousel,
    imageAlt,
    specs:
      doc.specs?.map((spec) => ({
        label: spec.label,
        value: spec.value,
      })) ?? [],
  }
}
