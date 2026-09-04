export const SHOP_FALLBACK_IMAGE = '/assets/images/background/shop-bg.jpg'

/**
 * @param {string | number | { url?: string, filename?: string, sizes?: Record<string, { url?: string }> } | null | undefined} media
 * @param {string} [fallback]
 * @param {'card' | 'thumbnail' | 'original'} [size]
 */
export function resolvePayloadMediaUrl(media, fallback = SHOP_FALLBACK_IMAGE, size = 'original') {
  if (!media) return fallback

  if (typeof media === 'string') {
    if (media.startsWith('/') || media.startsWith('http')) return media
    return fallback
  }

  if (typeof media === 'number') return fallback

  if (size !== 'original' && media.sizes?.[size]?.url) {
    return media.sizes[size].url
  }

  if (media.url) return media.url

  if (media.filename) {
    return `/media/${media.filename}`
  }

  return fallback
}
