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

/** Pagine demo del tema — noindex esplicito + escluse da sitemap/robots. */
export const TEMPLATE_PAGE_DEFINITIONS = [
  { path: '/index-2', title: 'Demo Homepage 2' },
  { path: '/index-3', title: 'Demo Homepage 3' },
  { path: '/index-4', title: 'Demo Homepage 4' },
  { path: '/gallery', title: 'Gallery' },
  { path: '/gallery1', title: 'Gallery 1' },
  { path: '/team', title: 'Team' },
  { path: '/team-details', title: 'Team Details' },
  { path: '/blog', title: 'Blog Grid' },
  { path: '/blog-2', title: 'Blog List' },
  { path: '/blog-details', title: 'Blog Details' },
  { path: '/testmonial', title: 'Testimonials' },
  { path: '/faq', title: 'FAQ' },
  { path: '/service', title: 'Service' },
  { path: '/cart', title: 'Cart' },
  { path: '/checkout', title: 'Checkout' },
  { path: '/shop-details', title: 'Shop Details' },
]

export const TEMPLATE_PAGE_PATHS = TEMPLATE_PAGE_DEFINITIONS.map((page) => page.path)

/** Percorsi template o interni da non indicizzare. */
export const ROBOTS_DISALLOW_PATHS = [
  '/admin',
  '/api/',
  ...TEMPLATE_PAGE_PATHS,
]
