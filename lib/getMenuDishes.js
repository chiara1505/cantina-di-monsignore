import { getPayload } from 'payload'
import config from '@payload-config'

export async function getMenuDishes() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'menu-dishes',
    where: {
      published: {
        equals: true,
      },
    },
    sort: 'sortOrder',
    limit: 200,
    pagination: false,
  })

  return docs.map((doc) => ({
    id: doc.slug || String(doc.id),
    category: doc.category,
    name: doc.name,
    description: doc.description || null,
    price: doc.price,
    allergens: doc.allergens || '',
    frozen: Boolean(doc.frozen),
    mediumCooking: Boolean(doc.mediumCooking),
  }))
}
