import { getPayload, type SanitizedConfig } from 'payload'
import { menuWines } from '../lib/menuWinesData.js'

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config })

  let created = 0
  let updated = 0

  for (const [index, wine] of menuWines.entries()) {
    const data = {
      name: wine.name,
      slug: wine.id,
      category: wine.category,
      producer: wine.producer,
      description: wine.description,
      price: wine.price,
      servingTemp: wine.servingTemp ?? '',
      sortOrder: index,
      published: true,
    }

    const existing = await payload.find({
      collection: 'wines',
      where: { slug: { equals: wine.id } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'wines',
        id: existing.docs[0].id,
        data,
      })
      updated += 1
    } else {
      await payload.create({
        collection: 'wines',
        data,
      })
      created += 1
    }
  }

  console.log(`Seed vini completato: ${created} creati, ${updated} aggiornati (${menuWines.length} vini totali).`)
}
