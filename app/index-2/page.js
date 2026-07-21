import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Story from "@/components/sections/home2/Story"
import Menu from "@/components/sections/home2/Menu"
import Shop from "@/components/sections/home2/Shop"
import Testmonial from "@/components/sections/home2/Testmonial"
import Video from "@/components/sections/home2/Video"
import Promotion from "@/components/sections/home2/Promotion"
import Cta from "@/components/sections/home2/Cta"
import News from "@/components/sections/home2/News"
import Order from "@/components/sections/home2/Order"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <About />
                <Story />
                <Menu />
                <Shop />
                <Testmonial />
                <Video />
                <Promotion />
                <Cta />
                <News />
                <Order />
            </Layout>
        </>
    )
} 