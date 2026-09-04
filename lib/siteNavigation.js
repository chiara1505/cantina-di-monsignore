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

import { DEFAULT_RESTAURANT_SETTINGS } from '@/lib/restaurantSettingsDefaults'

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
  { label: 'Shop', href: '/shop' },
  { label: 'Contatti', href: '/contact' },
];

export const RESERVATION_LINK = {
  label: 'Riserva il tuo tavolo',
  href: '/reservation',
};

/** Fallback statici — preferire useRestaurantSettings() nei componenti client. */
export const SITE_CONTACT_INFO = DEFAULT_RESTAURANT_SETTINGS.contact;

export const SITE_SOCIAL_LINKS = DEFAULT_RESTAURANT_SETTINGS.social.links;

export const SITE_SOCIAL_SAME_AS = DEFAULT_RESTAURANT_SETTINGS.social.sameAs;

export const SITE_SOCIAL_PROFILES = DEFAULT_RESTAURANT_SETTINGS.social.profiles;
