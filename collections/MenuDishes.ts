import type { CollectionConfig } from 'payload'

const DISH_CATEGORIES = [
  { label: 'Antipasti', value: 'antipasti' },
  { label: 'Primi', value: 'primi' },
  { label: 'Secondi', value: 'secondi' },
  { label: 'Contorni', value: 'contorni' },
  { label: 'Dessert', value: 'dessert' },
  { label: 'Bevande', value: 'bevande' },
]

const DISH_SEASONALITIES = [
  { label: 'Invernale', value: 'invernale' },
  { label: 'Autunnale', value: 'autunnale' },
  { label: 'Primaverile', value: 'primaverile' },
  { label: 'Estivo', value: 'estivo' },
  { label: 'Tutte', value: 'tutte' },
]

export const MenuDishes: CollectionConfig = {
  slug: 'menu-dishes',
  labels: {
    singular: 'Piatto',
    plural: 'Piatti',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'seasonality', 'price', 'published'],
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
      admin: {
        description: 'Identificativo univoco (es. parmigiana)',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      required: true,
      options: DISH_CATEGORIES,
    },
    {
      name: 'seasonality',
      type: 'select',
      label: 'Stagionalità',
      options: DISH_SEASONALITIES,
      filterOptions: ({ options, siblingData }) => {
        if (siblingData?.category === 'bevande') {
          return options
        }

        return options.filter((option) => {
          const value = typeof option === 'string' ? option : option.value
          return value !== 'tutte'
        })
      },
      admin: {
        description:
          'Usata per filtrare i piatti per stagione nella lista. Per le Bevande è disponibile anche “Tutte”.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrizione',
    },
    {
      name: 'price',
      type: 'text',
      label: 'Prezzo',
      required: true,
      admin: {
        description: 'Es. € 12,00',
      },
    },
    {
      name: 'allergens',
      type: 'text',
      label: 'Allergeni',
      admin: {
        description: 'Numeri separati da virgola (es. 1, 3, 6, 7)',
      },
    },
    {
      name: 'frozen',
      type: 'checkbox',
      label: 'Prodotto surgelato',
      defaultValue: false,
    },
    {
      name: 'mediumCooking',
      type: 'checkbox',
      label: 'Cottura media',
      defaultValue: false,
      admin: {
        description: 'Per le preparazioni con cottura media prevista',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Ordine',
      defaultValue: 0,
      admin: {
        description: 'Numero più basso = compare prima nella categoria',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Visibile',
      defaultValue: true,
      admin: {
        description:
          'Se deselezionato, il piatto resta in admin ma non compare nel menù del sito.',
        components: {
          Cell: '/components/admin/VisibleToggleCell',
        },
      },
    },
  ],
}
