import { getPayload } from 'payload'
import config from '@payload-config'
import { normalizeRestaurantSettings } from './normalizeRestaurantSettings.js'
import { buildDefaultRestaurantSettings } from './restaurantSettingsDefaults.js'

export async function getRestaurantSettings() {
  try {
    const payload = await getPayload({ config })
    const doc = await payload.findGlobal({
      slug: 'restaurant-settings',
    })

    return normalizeRestaurantSettings(doc)
  } catch (error) {
    console.error('getRestaurantSettings fallback:', error)
    return buildDefaultRestaurantSettings()
  }
}
