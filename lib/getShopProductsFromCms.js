import { getPayload } from 'payload'
import config from '@payload-config'
import { mapShopProductFromPayload } from './mapShopProductFromPayload.js'

async function fetchPublishedShopProducts() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'shop-products',
    where: {
      published: {
        equals: true,
      },
    },
    sort: 'sortOrder',
    limit: 500,
    pagination: false,
    depth: 1,
  })

  return docs.map(mapShopProductFromPayload)
}

export async function getShopCatalogProducts() {
  return fetchPublishedShopProducts()
}

export async function getShopProductBySlug(slug) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'shop-products',
    where: {
      and: [
        { slug: { equals: slug } },
        { published: { equals: true } },
      ],
    },
    limit: 1,
    depth: 1,
  })

  const doc = docs[0]
  return doc ? mapShopProductFromPayload(doc) : null
}

export async function getAllShopProductSlugs() {
  const products = await fetchPublishedShopProducts()
  return products.map((product) => product.slug)
}

export async function getRelatedShopProducts(slug, limit = 4) {
  const products = await fetchPublishedShopProducts()
  const current = products.find((product) => product.slug === slug)

  if (!current) return []

  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  )
  const others = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  )

  return [...sameCategory, ...others].slice(0, limit)
}
