// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
import Layout from "@/components/layout/Layout"
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})

import Link from "next/link"
export default function Gallery() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
            <section className="gallery-style-three">
                <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1/>
                        </div>
                    </div>
                </section>

                </Layout>
        </>
    )
}