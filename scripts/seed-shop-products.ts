import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload, type SanitizedConfig } from 'payload'
import { SHOP_PRODUCTS } from '../lib/shopProducts.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const publicDir = path.resolve(dirname, '../public')

const DEPRECATED_SHOP_SLUGS = [
  'etna-rosato-giovanni-rosso',
  'etna-rosso-riserva-giovanni-rosso',
  'barolo-cerretta-giovanni-rosso',
  'barolo-prapo-giovanni-rosso',
  'langhe-nebbiolo-giovanni-rosso',
]

async function findOrCreateMediaFromPath(payload, absolutePath, alt) {
  if (!fs.existsSync(absolutePath)) {
    return null
  }

  const filename = path.basename(absolutePath)
  const existing = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: filename,
      },
    },
    limit: 1,
  })

  if (existing.docs[0]) {
    return existing.docs[0].id
  }

  const media = await payload.create({
    collection: 'media',
    data: {
      alt,
    },
    filePath: absolutePath,
  })

  return media.id
}

async function resolveMediaId(payload, publicPath, alt) {
  if (!publicPath?.startsWith('/')) {
    return null
  }

  const absolutePath = path.join(publicDir, publicPath.replace(/^\//, ''))
  return findOrCreateMediaFromPath(payload, absolutePath, alt)
}

async function mapShopProductToPayload(payload, product, sortOrder) {
  const alt = product.imageAlt ?? product.name
  const imageId = await resolveMediaId(payload, product.image, alt)
  const carouselPath = `/assets/images/shop/${product.slug}.png`
  const carouselId = await resolveMediaId(payload, carouselPath, alt)

  if (!imageId) {
    throw new Error(`Immagine mancante per ${product.slug}: ${product.image}`)
  }

  return {
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    availability: product.availability,
    image: product.image,
    productImage: imageId,
    ...(carouselId ? { carouselImage: carouselId } : {}),
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
    const data = await mapShopProductToPayload(payload, product, index)

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

  console.log(`Shop seed completato: ${created} creati, ${updated} aggiornati, ${removed} rimossi.`)
}
