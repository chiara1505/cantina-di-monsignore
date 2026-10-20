import type { GlobalConfig } from 'payload'
import { WEEKDAY_OPTIONS } from '../lib/openingHours'

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
      name: 'openingHours',
      type: 'array',
      label: 'Orari di apertura',
      labels: {
        singular: 'Giorno',
        plural: 'Giorni',
      },
      admin: {
        description:
          'Una riga per ogni giorno della settimana. Questi orari aggiornano footer, contatti e gli slot del modulo di prenotazione. Usa il formato HH:mm (es. 18:30).',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'weekday',
          type: 'select',
          label: 'Giorno',
          required: true,
          options: WEEKDAY_OPTIONS,
        },
        {
          name: 'closed',
          type: 'checkbox',
          label: 'Chiuso',
          defaultValue: false,
          admin: {
            description: 'Se selezionato, quel giorno non è prenotabile e compare come chiuso.',
          },
        },
        {
          name: 'periods',
          type: 'array',
          label: 'Fasce orarie',
          labels: {
            singular: 'Fascia',
            plural: 'Fasce',
          },
          admin: {
            condition: (_data, siblingData) => !siblingData?.closed,
            description: 'Es. pranzo 12:30–14:30 e cena 18:30–22:30.',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'open',
                  type: 'text',
                  label: 'Apertura',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Es. 12:30',
                    placeholder: '12:30',
                  },
                },
                {
                  name: 'close',
                  type: 'text',
                  label: 'Chiusura',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Es. 14:30',
                    placeholder: '14:30',
                  },
                },
              ],
            },
          ],
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
