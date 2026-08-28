import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

/** Immagini usate sul sito live — esclusi backup (*-.jpg) e template demo. */
const TARGETS = [
  { file: 'assets/images/banner/banner-1.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/philosophy-bg.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/shop-bg.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/page-title-menu.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/page-title-menu-vini.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/page-title-reservation.jpg', maxDimension: 1920 },
  { file: 'assets/images/background/menu-dishes-bg.jpg', maxDimension: 1920 },
  ...Array.from({ length: 12 }, (_, i) => ({
    file: `assets/images/about/gallery-${i + 1}.jpg`,
    maxDimension: 1920,
  })),
  ...Array.from({ length: 4 }, (_, i) => ({
    file: `assets/images/about/chef-philosophy-${i + 1}.jpg`,
    maxDimension: 1600,
  })),
  { file: 'assets/images/about/owner-placeholder.jpg', maxDimension: 1920 },
  { file: 'assets/images/about/chef-values-placeholder.jpg', maxDimension: 1920 },
  { file: 'assets/images/team/team-1.jpg', maxDimension: 1200 },
  { file: 'assets/images/team/team-2.jpg', maxDimension: 1200 },
  { file: 'assets/images/resource/about-2.jpg', maxDimension: 1600 },
  { file: 'assets/images/resource/about-3.jpg', maxDimension: 1600 },
  { file: 'assets/images/resource/about-4.jpg', maxDimension: 1600 },
  { file: 'assets/images/resource/about-5.jpg', maxDimension: 1600 },
  { file: 'assets/images/resource/menu-antipasti.jpg', maxDimension: 1200 },
  { file: 'assets/images/resource/menu-primi.jpg', maxDimension: 1200 },
  { file: 'assets/images/resource/menu-secondi.jpg', maxDimension: 1200 },
  { file: 'assets/images/resource/menu-dolci.jpg', maxDimension: 1200 },
  { file: 'assets/images/resource/promotion-1.jpg', maxDimension: 1920 },
  { file: 'assets/images/resource/promotion-2.jpg', maxDimension: 1600 },
  { file: 'assets/images/logo.png', maxDimension: 512, png: true },
  { file: 'assets/images/footer-logo.png', maxDimension: 512, png: true },
]

async function optimize({ file, maxDimension, png = false }) {
  const inputPath = path.join(publicDir, file)

  try {
    await fs.access(inputPath)
  } catch {
    return { file, skipped: true, reason: 'missing' }
  }

  const tempPath = `${inputPath}.optimized.tmp`
  const before = await fs.stat(inputPath)
  const meta = await sharp(inputPath).metadata()

  let pipeline = sharp(inputPath).rotate().resize({
    width: maxDimension,
    height: maxDimension,
    fit: 'inside',
    withoutEnlargement: true,
  })

  if (png) {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true })
  } else {
    pipeline = pipeline.jpeg({ quality: 85, progressive: true, mozjpeg: true })
  }

  await pipeline.toFile(tempPath)
  await fs.rename(tempPath, inputPath)

  const after = await fs.stat(inputPath)
  const afterMeta = await sharp(inputPath).metadata()

  return {
    file,
    beforeKB: Math.round(before.size / 1024),
    afterKB: Math.round(after.size / 1024),
    beforePx: `${meta.width}x${meta.height}`,
    afterPx: `${afterMeta.width}x${afterMeta.height}`,
  }
}

const results = []
for (const target of TARGETS) {
  results.push(await optimize(target))
}

const optimized = results.filter((r) => !r.skipped)
const savedKB = optimized.reduce((sum, r) => sum + (r.beforeKB - r.afterKB), 0)

console.log(JSON.stringify({ savedKB, results }, null, 2))
