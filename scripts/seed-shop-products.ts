import { getPayload, type SanitizedConfig } from 'payload'
import { SHOP_PRODUCTS } from '../lib/shopProducts.js'

const DEPRECATED_SHOP_SLUGS = [
  'etna-rosato-giovanni-rosso',
  'etna-rosso-riserva-giovanni-rosso',
  'barolo-cerretta-giovanni-rosso',
  'barolo-prapo-giovanni-rosso',
  'langhe-nebbiolo-giovanni-rosso',
]

function mapShopProductToPayload(product, sortOrder) {
  return {
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    availability: product.availability,
    image: product.image,
    imageAlt: product.imageAlt ?? '',
    shortDescription: product.shortDescription,
    specs: product.specs ?? [],
    description: product.description ?? '',
    alcohol: product.alcohol ?? '',
    characteristics: (product.characteristics ?? []).map((item) => ({ item })),
    pairings: (product.pairings ?? []).map((item) => ({ item })),
    sortOrder,
    published: product.published,
  }
}

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config })
  const products = SHOP_PRODUCTS.filter((product) => product.category === 'vini')

  let created = 0
  let updated = 0
  let removed = 0

  for (const slug of DEPRECATED_SHOP_SLUGS) {
    const stale = await payload.find({
      collection: 'shop-products',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (stale.docs.length > 0) {
      await payload.delete({
        collection: 'shop-products',
        id: stale.docs[0].id,
      })
      removed += 1
    }
  }

  for (const [index, product] of products.entries()) {
    const data = mapShopProductToPayload(product, index)

    const existing = await payload.find({
      collection: 'shop-products',
      where: { slug: { equals: product.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'shop-products',
        id: existing.docs[0].id,
        data,
      })
      updated += 1
    } else {
      await payload.create({
        collection: 'shop-products',
        data,
      })
      created += 1
    }
  }

  console.log(
    `Seed shop completato: ${created} creati, ${updated} aggiornati, ${removed} rimossi (${products.length} vini shop).`,
  )
}
