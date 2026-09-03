/**
 * Converte un documento Payload `shop-products` nel formato usato dal frontend.
 * @param {{
 *   slug: string,
 *   name: string,
 *   category: string,
 *   price: number,
 *   availability: string,
 *   published?: boolean,
 *   shortDescription: string,
 *   description?: string | null,
 *   alcohol?: string | null,
 *   characteristics?: { item: string }[] | null,
 *   pairings?: { item: string }[] | null,
 *   image: string,
 *   imageAlt?: string | null,
 *   specs?: { label: string, value: string }[] | null,
 * }} doc
 */
export function mapShopProductFromPayload(doc) {
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
    image: doc.image,
    imageAlt: doc.imageAlt ?? undefined,
    specs:
      doc.specs?.map((spec) => ({
        label: spec.label,
        value: spec.value,
      })) ?? [],
  };
}
