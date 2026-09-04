import type { GlobalConfig } from 'payload'

export const RestaurantSettings: GlobalConfig = {
  slug: 'restaurant-settings',
  label: 'Impostazioni ristorante',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Sito',
    description:
      'Orari, contatti e social usati in footer, header, pagina Contatti e prenotazioni.',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Telefono',
          required: true,
          admin: { width: '50%', description: 'Es. +39 0942 09 05 38' },
        },
        {
          name: 'whatsapp',
          type: 'text',
          label: 'WhatsApp',
          required: true,
          admin: { width: '50%', description: 'Es. +39 388 89 88 098' },
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Indirizzo',
      required: true,
      admin: {
        description: 'Indirizzo completo mostrato nel sito.',
      },
    },
    {
      name: 'closedDay',
      type: 'text',
      label: 'Giorno di chiusura',
      required: true,
      defaultValue: 'Martedì',
      admin: {
        description: 'Compare nella striscia in alto (“Chiuso il …”) e in Contatti.',
      },
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Orari di apertura',
      admin: {
        description: 'Una riga per ogni fascia oraria, come nel footer.',
      },
      fields: [
        {
          name: 'line',
          type: 'text',
          label: 'Voce orario',
          required: true,
        },
      ],
    },
    {
      name: 'closureNotice',
      type: 'textarea',
      label: 'Avviso chiusura straordinaria (opzionale)',
      admin: {
        description: 'Es. “Chiuso per ferie dal 15 al 25 agosto”. Lasciare vuoto se non serve.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'facebookUrl',
          type: 'text',
          label: 'Facebook',
          admin: { width: '50%' },
        },
        {
          name: 'instagramUrl',
          type: 'text',
          label: 'Instagram',
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
