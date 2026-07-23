import Link from "next/link"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage = PAGE_TITLE_IMAGES.default }) {
    return (
        <>
            <section className="page-title centred">
            <div className="bg-layer" style={{ backgroundImage: `url(${breadcrumbImage})` }}></div>
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


