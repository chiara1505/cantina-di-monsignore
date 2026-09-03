import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { MenuDishes } from './collections/MenuDishes'
import { Wines } from './collections/Wines'
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
  collections: [Users, MenuDishes, Wines, ShopProducts],
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
