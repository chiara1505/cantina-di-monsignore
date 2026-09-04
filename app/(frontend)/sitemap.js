import { getAllShopProductSlugs } from '@/lib/getShopProductsFromCms'
import { getSiteUrl } from '@/lib/restaurantInfo'
import { PUBLIC_SITEMAP_ROUTES } from '@/lib/siteSeo'

export const revalidate = 60

/** @returns {Promise<import('next').MetadataRoute.Sitemap>} */
export default async function sitemap() {
  const siteUrl = getSiteUrl()
  const shopSlugs = await getAllShopProductSlugs()
  const lastModified = new Date()

  const staticEntries = PUBLIC_SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))

  const shopEntries = shopSlugs.map((slug) => ({
    url: `${siteUrl}/shop/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticEntries, ...shopEntries]
}
