'use client'
import AboutScrollGallery from '@/components/sections/about/AboutScrollGallery'
import AboutOwnerSection from '@/components/sections/about/AboutOwnerSection'
import AboutValuesSection from '@/components/sections/about/AboutValuesSection'
import AboutChefPhilosophy from '@/components/sections/about/AboutChefPhilosophy'
import AboutCtaSection from '@/components/sections/about/AboutCtaSection'
import Team from '@/components/sections/home1/Team'
import Testimonial from '@/components/sections/home1/Testimonial'
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Il Ristorante" breadcrumbImage={PAGE_TITLE_IMAGES.about} wrapperCls="about-page">
                {/* about-section */}
                <section className="about-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title centred mb_40">
                    <span className="sub-title">La nostra storia</span>
                    <h2>Una storia di radici e legame con il territorio</h2>
                </div>
                <div className="text-inner p_relative d_block mb_60">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text mr_30">
                                <p>
                                    La Cantina di Monsignore deve il suo nome a una figura centrale della storia di questo borgo, Monsignor Gaetano Alibrandi, Arcivescovo e Nunzio Apostolico d&apos;Irlanda, da sempre legato all&apos;Etna e alla sua tradizione vitivinicola.
                                </p>
                                <p>
                                    Nel centro del borgo, l&apos;Arcivescovo possedeva un antico palazzotto dove aveva allestito la sua cantina personale.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text ml_30">
                                <p>
                                    Dopo molti anni di abbandono, il fascino di questa antica bottaia ci ha conquistati. Il restauro conservativo è durato due anni: un percorso lungo e impegnativo, guidato dall&apos;obiettivo di non alterare l&apos;anima del luogo.
                                </p>
                                <p>
                                    Oggi quel palazzo è tornato a nuova vita. Abbiamo riaperto queste porte nel 2021 per far rivivere l&apos;atmosfera di questo posto storico e offrire ai nostri ospiti un punto di ritrovo autentico dedicato alla cucina del nostro territorio e ai suoi prodotti d&apos;eccellenza.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                {/* about-section end */}
                <AboutScrollGallery />
                <AboutOwnerSection />
                <AboutValuesSection />
                <AboutChefPhilosophy />
                <Team />
                <AboutCtaSection />
                <Testimonial />

                </Layout>
        </>
    )
}


