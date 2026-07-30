import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepage/Banner"
import Testmonial from "@/components/sections/onepage/Testmonial"
import Cta from "@/components/sections/onepage/Cta"
import About from "@/components/sections/onepage/About"
import Menu from "@/components/sections/onepage/Menu"
import Shop from "@/components/sections/onepage/Shop"
import Gallery from "@/components/sections/onepage/Gallery"
import Promotion from "@/components/sections/onepage/Promotion"
import News from "@/components/sections/onepage/News"
import Order from "@/components/sections/onepage/Order"
export default function Home() {
    return (
        <Layout headerStyle={4} footerStyle={1}>
            <Banner />
            <About />
            <Menu />
            <Shop />
            <Gallery />
            <Promotion />
            <Testmonial />
            <Cta />
            <News />
            <Order />
        </Layout>

    )
}