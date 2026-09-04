import { getPayload } from 'payload'
import config from '@payload-config'

export async function getMenuWines() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'wines',
    where: {
      published: {
        equals: true,
      },
    },
    sort: 'sortOrder',
    limit: 500,
    pagination: false,
  })

  return docs.map((doc) => ({
    id: doc.slug,
    category: doc.category,
    name: doc.name,
    producer: doc.producer,
    description: doc.description,
    price: doc.price,
    servingTemp: doc.servingTemp || '',
  }))
}
