import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Immagine',
    plural: 'Immagini',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Shop',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Testo alternativo',
      required: true,
      admin: {
        description: 'Descrizione breve per accessibilità e SEO',
      },
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../public/media'),
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 400,
        position: 'centre',
      },
      {
        name: 'card',
        width: 900,
        height: 900,
        position: 'centre',
      },
    ],
  },
}
