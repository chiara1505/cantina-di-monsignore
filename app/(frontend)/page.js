import HeroPreload from '@/components/elements/HeroPreload'
import { HOME_HERO_IMAGE } from '@/lib/heroImages'
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
import { PAGE_METADATA } from '@/lib/pageMetadata'
import { generateHomeSchema } from '@/lib/generateHomeSchema'
import { getShopCatalogProducts } from '@/lib/getShopProductsFromCms'
import { getRestaurantSettings } from '@/lib/getRestaurantSettings'
import { getHomeSettings } from '@/lib/getHomeSettings'

export const metadata = PAGE_METADATA.home
export const revalidate = 60

export default async function Home() {
    const [settings, homeSettings] = await Promise.all([
        getRestaurantSettings(),
        getHomeSettings(),
    ])
    const homeSchema = generateHomeSchema(settings)
    const shopProducts = await getShopCatalogProducts()

    return (
        <>
            <HeroPreload href={HOME_HERO_IMAGE} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
            />
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Menu kitchenHome={homeSettings.kitchenHome} />
                <Philosophy />
                <Promotion specialtiesHome={homeSettings.specialtiesHome} />
                <Testimonial />
                <Team />
                <Shop products={shopProducts} />
                <Order />
               
            </Layout>
        </>
    )
}