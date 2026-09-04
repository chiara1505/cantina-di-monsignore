import type { CollectionConfig } from 'payload'

const WINE_CATEGORIES = [
  { label: 'Bollicine', value: 'bollicine' },
  { label: 'Bianchi', value: 'bianchi' },
  { label: 'Rossi', value: 'rossi' },
  { label: 'Rosati', value: 'rosati' },
  { label: 'Champagne', value: 'champagne' },
]

export const Wines: CollectionConfig = {
  slug: 'wines',
  labels: {
    singular: 'Vino',
    plural: 'Vini',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'published'],
    group: 'Menù',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nome',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      required: true,
      options: WINE_CATEGORIES,
    },
    {
      name: 'producer',
      type: 'text',
      label: 'Produttore / Denominazione',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrizione',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      label: 'Prezzo',
      required: true,
      admin: {
        description: 'Es. € 68,00',
      },
    },
    {
      name: 'servingTemp',
      type: 'text',
      label: 'Temperatura di servizio',
      admin: {
        description: 'Es. 4–6 °C',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Ordine',
      defaultValue: 0,
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Pubblicato',
      defaultValue: true,
    },
  ],
}
