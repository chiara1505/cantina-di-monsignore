'use client'

import { useRestaurantSettings } from '@/components/providers/RestaurantSettingsProvider'

export default function OrderBookingContacts() {
  const { contact } = useRestaurantSettings()

  const bookingContacts = [
    {
      label: contact.phone,
      href: contact.phoneHref,
      icon: 'fa-phone',
      iconStyle: 'fas',
    },
    {
      label: contact.whatsapp,
      href: contact.whatsappHref,
      icon: 'fa-whatsapp',
      iconStyle: 'fab',
    },
  ]

  return (
    <ul className="order-section__contacts clearfix">
      {bookingContacts.map((item) => (
        <li key={item.href} className="order-section__contact">
          <span className="order-section__contact-icon" aria-hidden="true">
            <i className={`${item.iconStyle} ${item.icon}`}></i>
          </span>
          <a
            href={item.href}
            className="order-section__contact-link"
            {...(item.href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
