import Link from "next/link"
import { buildTwoLevelBreadcrumb } from '@/lib/generateBreadcrumbSchema'
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbPath,
  breadcrumbImage = PAGE_TITLE_IMAGES.default,
  breadcrumbImagePosition = 'center',
  breadcrumbClassName = '',
}) {
    const breadcrumbSchema =
      breadcrumbPath ? buildTwoLevelBreadcrumb(breadcrumbTitle, breadcrumbPath) : null

    return (
        <>
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
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

