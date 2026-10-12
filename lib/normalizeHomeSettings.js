import {
  DEFAULT_KITCHEN_HOME_IMAGES,
  DEFAULT_SPECIALTIES_HOME,
  buildDefaultHomeSettings,
} from './homeSettingsDefaults.js'
import { resolvePayloadMediaUrl } from './resolvePayloadMediaUrl.js'

/**
 * @param {unknown} media
 * @param {{ image: string, imageAlt: string }} fallback
 * @param {'card' | 'original'} [size]
 */
function normalizeHomeImage(media, fallback, size = 'card') {
  const image = resolvePayloadMediaUrl(media, fallback.image, size)
  const mediaAlt =
    typeof media === 'object' &&
    media &&
    typeof media.alt === 'string' &&
    media.alt.trim()
      ? media.alt.trim()
      : ''

  return {
    image,
    imageAlt: mediaAlt || fallback.imageAlt,
  }
}

/**
 * @param {Record<string, unknown> | null | undefined} kitchenHome
 */
function normalizeKitchenHome(kitchenHome) {
  const group = kitchenHome && typeof kitchenHome === 'object' ? kitchenHome : {}

  return {
    antipasti: normalizeHomeImage(group.antipastiImage, DEFAULT_KITCHEN_HOME_IMAGES.antipasti),
    primi: normalizeHomeImage(group.primiImage, DEFAULT_KITCHEN_HOME_IMAGES.primi),
    secondi: normalizeHomeImage(group.secondiImage, DEFAULT_KITCHEN_HOME_IMAGES.secondi),
    dessert: normalizeHomeImage(group.dessertImage, DEFAULT_KITCHEN_HOME_IMAGES.dessert),
  }
}

/**
 * @param {Record<string, unknown> | null | undefined} specialtiesHome
 */
function normalizeSpecialtiesHome(specialtiesHome) {
  const group = specialtiesHome && typeof specialtiesHome === 'object' ? specialtiesHome : {}

  const leftFallback = DEFAULT_SPECIALTIES_HOME.left
  const rightFallback = DEFAULT_SPECIALTIES_HOME.right
  const leftMedia = normalizeHomeImage(group.leftImage, leftFallback, 'original')
  const rightMedia = normalizeHomeImage(group.rightImage, rightFallback, 'original')
  const leftName = String(group.leftName ?? '').trim() || leftFallback.name
  const rightName = String(group.rightName ?? '').trim() || rightFallback.name

  return {
    left: {
      name: leftName,
      image: leftMedia.image,
      imageAlt:
        leftMedia.imageAlt === leftFallback.imageAlt
          ? `${leftName} — La Cantina di Monsignore`
          : leftMedia.imageAlt,
    },
    right: {
      name: rightName,
      image: rightMedia.image,
      imageAlt:
        rightMedia.imageAlt === rightFallback.imageAlt
          ? `${rightName} — La Cantina di Monsignore`
          : rightMedia.imageAlt,
    },
  }
}

/**
 * @param {Record<string, unknown> | null | undefined} doc
 */
export function normalizeHomeSettings(doc) {
  if (!doc) {
    return buildDefaultHomeSettings()
  }

  return {
    kitchenHome: normalizeKitchenHome(doc.kitchenHome),
    specialtiesHome: normalizeSpecialtiesHome(doc.specialtiesHome),
  }
}
