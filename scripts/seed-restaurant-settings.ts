import { getPayload, type SanitizedConfig } from 'payload'
import {
  DEFAULT_CLOSED_DAY,
  DEFAULT_CONTACT,
  DEFAULT_OPENING_HOUR_LINES,
  DEFAULT_SOCIAL_URLS,
} from '../lib/restaurantSettingsDefaults.js'

export async function script(config: SanitizedConfig) {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'restaurant-settings',
    data: {
      phone: DEFAULT_CONTACT.phone,
      whatsapp: DEFAULT_CONTACT.whatsapp,
      email: DEFAULT_CONTACT.email,
      address: DEFAULT_CONTACT.address,
      closedDay: DEFAULT_CLOSED_DAY,
      openingHours: DEFAULT_OPENING_HOUR_LINES.map((line) => ({ line })),
      closureNotice: '',
      facebookUrl: DEFAULT_SOCIAL_URLS.facebook,
      instagramUrl: DEFAULT_SOCIAL_URLS.instagram,
    },
  })

  console.log('Impostazioni ristorante aggiornate con i valori predefiniti.')
}
