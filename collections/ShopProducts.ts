import type { CollectionConfig } from 'payload'

const SHOP_CATEGORIES = [
  { label: 'Vini', value: 'vini' },
  { label: 'Conserve', value: 'conserve' },
  { label: 'Olio', value: 'olio' },
]

const AVAILABILITY_OPTIONS = [
  { label: 'Disponibile', value: 'available' },
  { label: 'In riassortimento', value: 'restocking' },
  { label: 'Esaurito', value: 'out_of_stock' },
]

export const ShopProducts: CollectionConfig = {
  slug: 'shop-products',
  labels: {
    singular: 'Prodotto shop',
    plural: 'Prodotti shop',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'availability', 'published'],
    group: 'Shop',
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
        description: 'URL del prodotto, es. etna-rosso-giovanni-rosso',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      required: true,
      options: SHOP_CATEGORIES,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Prezzo',
      required: true,
      admin: {
        description: 'Prezzo in euro, es. 18',
      },
    },
    {
      name: 'availability',
      type: 'select',
      label: 'Disponibilità',
      required: true,
      defaultValue: 'available',
      options: AVAILABILITY_OPTIONS,
    },
    {
      name: 'image',
      type: 'text',
      label: 'Immagine (legacy)',
      admin: {
        hidden: true,
        readOnly: true,
        description: 'Campo deprecato: usare “Immagine prodotto”.',
      },
    },
    {
      name: 'productImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Immagine prodotto',
      admin: {
        description: 'Carica la foto del prodotto dal computer (JPG, PNG o WebP)',
      },
    },
    {
      name: 'carouselImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Immagine carosello Home (opzionale)',
      admin: {
        description:
          'PNG con sfondo trasparente per la homepage. Se vuota, viene usata l’immagine prodotto.',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Testo alternativo immagine',
      admin: {
        description: 'Opzionale. Se vuoto, usa il testo alternativo dell’immagine caricata.',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Descrizione breve',
      required: true,
      admin: {
        description: 'Testo sotto prezzo e disponibilità in pagina prodotto',
      },
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Scheda sintetica',
      admin: {
        description: 'Voci sotto la descrizione breve, es. Denominazione, Produttore, Formato…',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etichetta',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Valore',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrizione',
      admin: {
        description: 'Testo della sezione a fisarmonica (sempre visibile)',
      },
    },
    {
      name: 'alcohol',
      type: 'text',
      label: 'Gradazione alcolica',
      admin: {
        description: 'Es. 13,0 — viene mostrata in coda alla descrizione',
      },
    },
    {
      name: 'characteristics',
      type: 'array',
      label: 'Caratteristiche',
      admin: {
        description: 'Una voce per riga, formato consigliato: Etichetta: valore',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Voce',
          required: true,
        },
      ],
    },
    {
      name: 'pairings',
      type: 'array',
      label: 'Abbinamenti consigliati',
      admin: {
        description: 'Opzionale. Lasciare vuoto se non applicabile.',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Abbinamento',
          required: true,
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Ordine',
      defaultValue: 0,
      admin: {
        description: 'Numero più basso = compare prima nel catalogo',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Pubblicato',
      defaultValue: false,
      admin: {
        description: 'Visibile nel catalogo shop e sul sito',
      },
    },
  ],
}
