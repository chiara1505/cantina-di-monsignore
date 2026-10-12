import { getPayload } from 'payload'
import config from '@payload-config'
import { normalizeHomeSettings } from './normalizeHomeSettings.js'
import { buildDefaultHomeSettings } from './homeSettingsDefaults.js'

export async function getHomeSettings() {
  try {
    const payload = await getPayload({ config })
    const doc = await payload.findGlobal({
      slug: 'home',
      depth: 1,
    })

    return normalizeHomeSettings(doc)
  } catch (error) {
    console.error('getHomeSettings fallback:', error)
    return buildDefaultHomeSettings()
  }
}
