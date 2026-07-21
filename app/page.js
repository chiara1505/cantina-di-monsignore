import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"

import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"

import Menu from "@/components/sections/home1/Menu"
import Shop from "@/components/sections/home1/Shop"
import Gallery from "@/components/sections/home1/Gallery"
import Promotion from "@/components/sections/home1/Promotion"
import Cta from "@/components/sections/home1/Cta"
import Order from "@/components/sections/home1/Order"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Menu />
                <Shop />
                <Gallery />
                <Promotion />
                <Testimonial />
                <Cta />
                <News />
                <Order />
               
            </Layout>
        </>
    )
}