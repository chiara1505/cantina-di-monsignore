/** Valori di fallback allineati al sito attuale. */

import {
  DEFAULT_WEEKLY_HOURS,
  buildClosedDaySummary,
  buildContactOpeningHourLines,
  buildFooterOpeningHourLines,
  getClosedDayLabels,
} from './openingHours.js'

export { DEFAULT_WEEKLY_HOURS }

export const DEFAULT_OPENING_HOUR_LINES = buildContactOpeningHourLines(DEFAULT_WEEKLY_HOURS)

export const DEFAULT_CLOSED_DAY = buildClosedDaySummary(getClosedDayLabels(DEFAULT_WEEKLY_HOURS)) || 'Martedì'

export const DEFAULT_CONTACT = {
  address: "Piazza Sant'Antonio n. 5, Castiglione di Sicilia (CT)",
  phone: '+39 0942 09 05 38',
  whatsapp: '+39 388 89 88 098',
  email: 'lacantinadimonsignore@gmail.com',
}

export const DEFAULT_SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/lacantinadimonsignore',
  instagram: 'https://www.instagram.com/la_cantina_di_monsignore',
}

function digitsOnly(value) {
  return String(value || '').replace(/\D/g, '')
}

export function buildPhoneHref(phone) {
  const digits = digitsOnly(phone)
  return digits ? `tel:+${digits}` : 'tel:'
}

export function buildWhatsAppHref(whatsapp) {
  const digits = digitsOnly(whatsapp)
  return digits ? `https://wa.me/${digits}` : 'https://wa.me/'
}

export function buildEmailHref(email) {
  const trimmed = String(email || '').trim()
  return trimmed ? `mailto:${trimmed}` : 'mailto:'
}

export function buildHeaderClosedText(closedDay) {
  const day = String(closedDay || DEFAULT_CLOSED_DAY).trim()
  return day ? `Chiuso il ${day}` : 'Chiuso'
}

export function buildSocialProfiles(facebookUrl, instagramUrl) {
  const profiles = []

  if (facebookUrl) {
    profiles.push({
      label: 'Facebook di La Cantina di Monsignore',
      href: facebookUrl,
      icon: 'fab fa-facebook-f',
      mobileIcon: 'fab fa-facebook-square',
    })
  }

  if (instagramUrl) {
    profiles.push({
      label: 'Instagram di La Cantina di Monsignore',
      href: instagramUrl,
      icon: 'fab fa-instagram',
    })
  }

  return profiles
}

export function buildDefaultRestaurantSettings() {
  const contact = {
    ...DEFAULT_CONTACT,
    phoneHref: buildPhoneHref(DEFAULT_CONTACT.phone),
    whatsappHref: buildWhatsAppHref(DEFAULT_CONTACT.whatsapp),
    emailHref: buildEmailHref(DEFAULT_CONTACT.email),
  }

  const socialLinks = { ...DEFAULT_SOCIAL_URLS }
  const socialProfiles = buildSocialProfiles(socialLinks.facebook, socialLinks.instagram)
  const weeklyHours = DEFAULT_WEEKLY_HOURS.map((day) => ({
    weekday: day.weekday,
    closed: day.closed,
    periods: day.periods.map((period) => ({ ...period })),
  }))
  const closedDay = buildClosedDaySummary(getClosedDayLabels(weeklyHours)) || DEFAULT_CLOSED_DAY

  return {
    contact,
    weeklyHours,
    openingHours: buildContactOpeningHourLines(weeklyHours),
    footerOpeningHours: buildFooterOpeningHourLines(weeklyHours),
    closedDay,
    headerClosedText: buildHeaderClosedText(closedDay),
    closureNotice: '',
    social: {
      links: socialLinks,
      profiles: socialProfiles,
      sameAs: socialProfiles.map((profile) => profile.href),
    },
  }
}

export const DEFAULT_RESTAURANT_SETTINGS = buildDefaultRestaurantSettings()
