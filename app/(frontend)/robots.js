import { getSiteUrl } from '@/lib/restaurantInfo'
import { ROBOTS_DISALLOW_PATHS } from '@/lib/siteSeo'

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  const siteUrl = getSiteUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ROBOTS_DISALLOW_PATHS,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
