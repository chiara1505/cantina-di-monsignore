import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Testimonial from "@/components/sections/home1/Testimonial"
import Menu from "@/components/sections/home1/Menu"
import Philosophy from "@/components/sections/home1/Philosophy"
import Shop from "@/components/sections/home1/Shop"
import Promotion from "@/components/sections/home1/Promotion"
import Team from "@/components/sections/home1/Team"
import Order from "@/components/sections/home1/Order"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Menu />
                <Philosophy />
                <Promotion />
                <Team />
                <Testimonial />
                <Shop />
                <Order />
               
            </Layout>
        </>
    )
}