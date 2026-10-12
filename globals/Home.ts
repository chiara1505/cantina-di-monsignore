import type { GlobalConfig } from 'payload'

const kitchenPhotoHint =
  'Consigliato: circa 900×1000 px (proporzione verticale leggera). Formato JPG o WebP. Se lasciata vuota resta l’immagine predefinita.'

const specialtyPhotoHint =
  'Consigliato: circa 1400×1050 px (proporzione orizzontale 4:3). Formato JPG o WebP. Se lasciata vuota resta l’immagine predefinita.'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Sito',
    description:
      'Contenuti della homepage: foto di “La cucina” e piatti di “Le Specialità”.',
  },
  fields: [
    {
      type: 'group',
      name: 'kitchenHome',
      label: 'La Cucina',
      admin: {
        description:
          'Foto delle quattro card nella sezione “La cucina” in homepage.',
      },
      fields: [
        {
          name: 'antipastiImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto Antipasti',
          admin: { description: kitchenPhotoHint },
        },
        {
          name: 'primiImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto Primi Piatti',
          admin: { description: kitchenPhotoHint },
        },
        {
          name: 'secondiImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto Secondi Piatti',
          admin: { description: kitchenPhotoHint },
        },
        {
          name: 'dessertImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto Dessert',
          admin: { description: kitchenPhotoHint },
        },
      ],
    },
    {
      type: 'group',
      name: 'specialtiesHome',
      label: 'Le Specialità',
      admin: {
        description:
          'Foto e nomi dei due piatti nella sezione “Le Specialità” in homepage.',
      },
      fields: [
        {
          name: 'leftImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto sinistra',
          admin: { description: specialtyPhotoHint },
        },
        {
          name: 'leftName',
          type: 'text',
          label: 'Nome piatto sinistra',
          defaultValue: 'Lingotto di Parmigiana',
        },
        {
          name: 'rightImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto destra',
          admin: { description: specialtyPhotoHint },
        },
        {
          name: 'rightName',
          type: 'text',
          label: 'Nome piatto destra',
          defaultValue: 'Mezze lune “Home Made”',
        },
      ],
    },
  ],
}
