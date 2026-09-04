'use client'

import Link from 'next/link'
import { useRestaurantSettings } from '@/components/providers/RestaurantSettingsProvider'
import { getContactOpeningHoursLines } from '@/lib/normalizeRestaurantSettings'

export default function ContactInfoList() {
  const settings = useRestaurantSettings()
  const { contact, closedDay } = settings
  const openingHoursLines = getContactOpeningHoursLines(settings)

  return (
    <ul className="info-list clearfix">
      <li>
        <i className="icon-39"></i>
        <h5>Indirizzo</h5>
        <p>{contact.address}</p>
      </li>
      <li>
        <i className="icon-40"></i>
        <h5>Telefono</h5>
        <p>
          <Link href={contact.phoneHref}>{contact.phone}</Link>
        </p>
      </li>
      <li>
        <i className="fab fa-whatsapp"></i>
        <h5>WhatsApp</h5>
        <p>
          <Link href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            {contact.whatsapp}
          </Link>
        </p>
      </li>
      <li>
        <i className="icon-1"></i>
        <h5>Email</h5>
        <p>
          <Link href={contact.emailHref}>{contact.email}</Link>
        </p>
      </li>
      <li>
        <i className="icon-2"></i>
        <h5>Orari di Apertura</h5>
        <p>
          {openingHoursLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </li>
      <li>
        <i className="fas fa-calendar-times"></i>
        <h5>Giorno di Chiusura</h5>
        <p>{closedDay}</p>
      </li>
    </ul>
  )
}
