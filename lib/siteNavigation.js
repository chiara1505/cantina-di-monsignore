/**
 * Navigazione principale del sito (header desktop + mobile).
 *
 * Pagine template rimosse dal menu ma ancora nel progetto — per reinserirle
 * basta aggiungere una voce qui o consultare git / branch `template-originale`:
 *
 * Homepage demo:     /index-2, /index-3, /index-4
 * Gallery:            /gallery, /gallery1
 * Team:               /team, /team-details
 * Blog:               /blog, /blog-2, /blog-details
 * Altro template:     /testmonial, /faq, /service, /error-page
 */

export const SITE_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Il Ristorante', href: '/about-us' },
  {
    label: 'Il Menù',
    href: '/menu',
    children: [
      { label: 'I Piatti', href: '/menu' },
      { label: 'La Carta dei Vini', href: '/menu/vini' },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Our Shop', href: '/shop' },
      { label: 'Shop Details', href: '/shop-details' },
      { label: 'Cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
    ],
  },
  { label: 'Contatti', href: '/contact' },
];

export const RESERVATION_LINK = {
  label: 'Riserva il tuo tavolo',
  href: '/reservation',
};

export const SITE_CONTACT_INFO = {
  address: "Piazza Sant'Antonio n. 5, Castiglione di Sicilia (ME)",
  phone: '0942 09 05 38',
  phoneHref: 'tel:+390942090538',
  whatsapp: '+39 388 89 88 098',
  whatsappHref: 'https://wa.me/393888988098',
  email: 'lacantinadimonsignore@gmail.com',
  emailHref: 'mailto:lacantinadimonsignore@gmail.com',
};
