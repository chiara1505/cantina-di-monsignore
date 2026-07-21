// import PortfolioFilter1 from ""
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), {
    ssr: false,
})

import Link from "next/link"
export default function Gallery() {

    return (
        <>
             <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery 2">
            <section className="gallery-style-three alternat-2">
      <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter2/>
                        </div>
                    </div>
                </section>

                </Layout>
        </>
    )
}