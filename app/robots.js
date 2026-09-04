import { getSiteUrl } from '@/lib/restaurantInfo'
import { ROBOTS_DISALLOW_PATHS } from '@/lib/siteSeo'

export default function robots() {
  const siteUrl = getSiteUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ROBOTS_DISALLOW_PATHS,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
