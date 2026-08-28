/** Preload LCP hero image — Next.js hoists <link> into document head. */
export default function HeroPreload({ href }) {
  if (!href) return null

  const normalized = href.startsWith('/') ? href : `/${href.replace(/^\/?/, '')}`

  return (
    <link rel="preload" as="image" href={normalized} fetchPriority="high" />
  )
}
