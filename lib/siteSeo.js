/**
 * Pagine pubbliche indicizzabili (menu di navigazione + legali + prenotazioni).
 * Le pagine template demo restano fuori dalla sitemap e bloccate in robots.txt.
 */

/** @type {{ path: string, changeFrequency: string, priority: number }[]} */
export const PUBLIC_SITEMAP_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/menu', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/menu/vini', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/shop', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/reservation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
]

/** Percorsi template o interni da non indicizzare. */
export const ROBOTS_DISALLOW_PATHS = [
  '/admin',
  '/api/',
  '/index-2',
  '/index-3',
  '/index-4',
  '/gallery',
  '/gallery1',
  '/team',
  '/team-details',
  '/blog',
  '/blog-2',
  '/blog-details',
  '/testmonial',
  '/faq',
  '/service',
  '/cart',
  '/checkout',
  '/shop-details',
]
