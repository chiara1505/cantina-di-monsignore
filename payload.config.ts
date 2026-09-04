import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { MenuDishes } from './collections/MenuDishes'
import { Wines } from './collections/Wines'
import { Media } from './collections/Media'
import { ShopProducts } from './collections/ShopProducts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  bin: [
    {
      key: 'seed:dishes',
      scriptPath: path.resolve(dirname, 'scripts/seed-menu-dishes.ts'),
    },
    {
      key: 'seed:wines',
      scriptPath: path.resolve(dirname, 'scripts/seed-menu-wines.ts'),
    },
    {
      key: 'seed:shop',
      scriptPath: path.resolve(dirname, 'scripts/seed-shop-products.ts'),
    },
    {
      key: 'sync:schema',
      scriptPath: path.resolve(dirname, 'scripts/sync-payload-schema.ts'),
    },
  ],
  admin: {
    user: Users.slug,
    suppressHydrationWarning: true,
    meta: {
      titleSuffix: ' — Cantina di Monsignore',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, MenuDishes, Wines, Media, ShopProducts],
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      clientUploads: true,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
})
