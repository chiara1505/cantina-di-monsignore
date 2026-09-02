import Link from "next/link"
import HeroPreload from '@/components/elements/HeroPreload'
import { buildTwoLevelBreadcrumb } from '@/lib/generateBreadcrumbSchema'
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbPath,
  breadcrumbItems,
  breadcrumbImage = PAGE_TITLE_IMAGES.default,
  breadcrumbImagePosition = 'center',
  breadcrumbClassName = '',
}) {
    const breadcrumbSchema =
      breadcrumbPath ? buildTwoLevelBreadcrumb(breadcrumbTitle, breadcrumbPath) : null

    const trail = breadcrumbItems?.length
      ? breadcrumbItems
      : [{ name: 'Home', path: '/' }, { name: breadcrumbTitle, path: breadcrumbPath ?? '' }]

    return (
        <>
            <HeroPreload href={breadcrumbImage} />
            {breadcrumbSchema ? (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
              />
            ) : null}
            <section className={`page-title centred${breadcrumbClassName ? ` ${breadcrumbClassName}` : ''}`}>
            <div
              className="bg-layer"
              style={{
                backgroundImage: `url(${breadcrumbImage})`,
                backgroundPosition: breadcrumbImagePosition,
              }}
            ></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>{breadcrumbTitle}</h2>
                    <ul className="bread-crumb clearfix">
                        {trail.map((item, index) => {
                          const isLast = index === trail.length - 1

                          if (isLast || !item.path || item.path === '/') {
                            if (index === 0 && item.path === '/') {
                              return (
                                <li key={`${item.name}-${index}`}>
                                  <Link href="/">Home</Link>
                                </li>
                              )
                            }

                            return <li key={`${item.name}-${index}`}>{item.name}</li>
                          }

                          return (
                            <li key={`${item.name}-${index}`}>
                              <Link href={item.path}>{item.name}</Link>
                            </li>
                          )
                        })}
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

