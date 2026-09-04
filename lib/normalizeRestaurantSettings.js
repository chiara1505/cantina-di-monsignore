import {
  DEFAULT_CLOSED_DAY,
  DEFAULT_CONTACT,
  DEFAULT_OPENING_HOUR_LINES,
  DEFAULT_SOCIAL_URLS,
  buildDefaultRestaurantSettings,
  buildEmailHref,
  buildHeaderClosedText,
  buildPhoneHref,
  buildSocialProfiles,
  buildWhatsAppHref,
} from './restaurantSettingsDefaults.js'

/**
 * @param {Record<string, unknown> | null | undefined} doc
 */
export function normalizeRestaurantSettings(doc) {
  const defaults = buildDefaultRestaurantSettings()

  if (!doc) {
    return defaults
  }

  const phone = String(doc.phone ?? defaults.contact.phone).trim() || defaults.contact.phone
  const whatsapp = String(doc.whatsapp ?? defaults.contact.whatsapp).trim() || defaults.contact.whatsapp
  const email = String(doc.email ?? defaults.contact.email).trim() || defaults.contact.email
  const address = String(doc.address ?? defaults.contact.address).trim() || defaults.contact.address
  const closedDay = String(doc.closedDay ?? defaults.closedDay).trim() || DEFAULT_CLOSED_DAY
  const closureNotice = String(doc.closureNotice ?? '').trim()

  const openingHours = (doc.openingHours || [])
    .map((entry) => String(entry?.line ?? '').trim())
    .filter(Boolean)

  const facebookUrl = String(doc.facebookUrl ?? DEFAULT_SOCIAL_URLS.facebook).trim()
  const instagramUrl = String(doc.instagramUrl ?? DEFAULT_SOCIAL_URLS.instagram).trim()
  const socialProfiles = buildSocialProfiles(facebookUrl, instagramUrl)

  return {
    contact: {
      address,
      phone,
      phoneHref: buildPhoneHref(phone),
      whatsapp,
      whatsappHref: buildWhatsAppHref(whatsapp),
      email,
      emailHref: buildEmailHref(email),
    },
    openingHours: openingHours.length > 0 ? openingHours : [...DEFAULT_OPENING_HOUR_LINES],
    closedDay,
    headerClosedText: buildHeaderClosedText(closedDay),
    closureNotice,
    social: {
      links: {
        facebook: facebookUrl,
        instagram: instagramUrl,
      },
      profiles: socialProfiles,
      sameAs: socialProfiles.map((profile) => profile.href),
    },
  }
}

/** @param {ReturnType<typeof normalizeRestaurantSettings>} settings */
export function getFooterOpeningHours(settings) {
  return [
    ...settings.openingHours,
    `${settings.closedDay}: Chiuso`,
  ]
}

/** @param {ReturnType<typeof normalizeRestaurantSettings>} settings */
export function getContactOpeningHoursLines(settings) {
  const lines = [...settings.openingHours]

  if (settings.closureNotice) {
    lines.push(settings.closureNotice)
  }

  return lines
}
