import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Service from "@/components/sections/home3/Services"
import Testimonial from "@/components/sections/home3/Testmonial"
import About from "@/components/sections/home3/About"
import Deal from "@/components/sections/home3/Deal"
import Menu from "@/components/sections/home3/Menu"
import Team from "@/components/sections/home3/Team"
import Gallery from "@/components/sections/home3/Gallery"
import Cta from "@/components/sections/home3/Cta"
import Video from "@/components/sections/home3/Video"
import News from "@/components/sections/home3/News"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <About />
                <Deal />
                <Menu />
                <Team />
                <Gallery />
                <Cta />
                <Testimonial />
                <Service />
                <Video />
                <News />
            </Layout>
        </>
    )
}