import { getPayload } from 'payload'
import config from '@payload-config'

async function main() {
  process.env.NODE_ENV = 'development'
  process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = 'true'

  const payload = await getPayload({ config })
  payload.logger.info('Schema sync completed.')
  await payload.destroy()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
