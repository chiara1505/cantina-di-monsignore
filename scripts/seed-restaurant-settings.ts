import { getPayload, type SanitizedConfig } from 'payload'
import {
  DEFAULT_CONTACT,
  DEFAULT_SOCIAL_URLS,
  DEFAULT_WEEKLY_HOURS,
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
      openingHours: DEFAULT_WEEKLY_HOURS.map((day) => ({
        weekday: day.weekday,
        closed: day.closed,
        periods: day.closed
          ? []
          : day.periods.map((period) => ({
              open: period.open,
              close: period.close,
            })),
      })),
      closureNotice: '',
      facebookUrl: DEFAULT_SOCIAL_URLS.facebook,
      instagramUrl: DEFAULT_SOCIAL_URLS.instagram,
    },
  })

  console.log('Impostazioni ristorante aggiornate con i valori predefiniti.')
}
