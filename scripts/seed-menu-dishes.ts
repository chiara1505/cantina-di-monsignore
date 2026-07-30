import { getPayload } from 'payload'
import config from '../payload.config'
import { menuDishes } from '../lib/menuDishesData.js'

async function seed() {
  const payload = await getPayload({ config })

  let created = 0
  let updated = 0

  for (const [index, dish] of menuDishes.entries()) {
    const data = {
      name: dish.name,
      slug: dish.id,
      category: dish.category,
      description: dish.description ?? '',
      price: dish.price,
      allergens: dish.allergens ?? '',
      frozen: dish.frozen ?? false,
      mediumCooking: dish.mediumCooking ?? false,
      sortOrder: index,
      published: true,
    }

    const existing = await payload.find({
      collection: 'menu-dishes',
      where: { slug: { equals: dish.id } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'menu-dishes',
        id: existing.docs[0].id,
        data,
      })
      updated += 1
    } else {
      await payload.create({
        collection: 'menu-dishes',
        data,
      })
      created += 1
    }
  }

  console.log(`Seed completato: ${created} creati, ${updated} aggiornati (${menuDishes.length} piatti totali).`)
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
