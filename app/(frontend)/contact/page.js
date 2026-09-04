'use client'
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES, PAGE_SECTION_BACKGROUNDS } from '@/lib/pageTitleImages';
import ScrollReveal from '@/components/elements/ScrollReveal';
import ContactDirectionsMap from '@/components/sections/contact/ContactDirectionsMap';
import ContactInfoList from '@/components/sections/contact/ContactInfoList';
import SocialLinks from '@/components/elements/SocialLinks';
import LegalFormConsent from '@/components/elements/LegalFormConsent';

export default function Home() {

    return (
        <>
            <Layout
              headerStyle={1}
              footerStyle={1}
              breadcrumbTitle="Contatti"
              breadcrumbPath="/contact"
              breadcrumbImage={PAGE_TITLE_IMAGES.contact}
              breadcrumbImagePosition="center 85%"
              breadcrumbClassName="page-title--contact"
            >
                <div className="contact-page">
                    <div className="contact-page__columns">
                    <section className="contact-section contact-section--info">
                        <div className="auto-container">
                            <div className="info-inner">
                                <div className="sec-title contact-section__title">
                                    <span className="sub-title">Contatti</span>
                                    <h2>Ci trovi qui</h2>
                                    <p>I nostri indirizzi e recapiti per rimanere in contatto</p>
                                </div>
                                <ContactInfoList />
                                <div className="contact-section__social">
                                    <h3 className="contact-section__social-title">Seguici sui social</h3>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section contact-section--form">
                        <div className="auto-container">
                            <div className="form-inner centred">
                                <h2>Scrivici per qualsiasi informazione</h2>
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Nome e Cognome" required="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required="" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required="" placeholder="Telefono" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Messaggio"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group form-group--legal-consent">
                                            <LegalFormConsent id="contact-legal-consent" name="contactPrivacyConsent" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                                            <button className="theme-btn-one" type="submit" name="submit-form">
                                                Invia Richiesta
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    </div>

                    <section className="contact-directions-section">
                        <div
                            className="bg-layer parallax-bg"
                            style={{ backgroundImage: `url(${PAGE_SECTION_BACKGROUNDS.contactDirections})` }}
                        />
                        <div className="auto-container contact-directions-section__content">
                            <ScrollReveal className="sec-title centred contact-directions-section__header">
                                <span className="sub-title">Raggiungici</span>
                                <h2>Nel centro storico di Castiglione di Sicilia</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={150} className="contact-directions-section__text centred">
                                <p>
                                    La Cantina di Monsignore si trova nel cuore del borgo. Trovarci camminando tra le sue stradine fa parte dell&apos;esperienza stessa.
                                </p>
                                <p>
                                    Questa riservatezza è il nostro valore più grande: ci permette di custodire un&apos;atmosfera intima e di garantirti la tranquillità necessaria per goderti il piacere della tavola, senza fretta.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={300} className="contact-directions-section__map">
                                <ContactDirectionsMap />
                            </ScrollReveal>
                        </div>
                    </section>

                </div>

            </Layout>
        </>
    )
}
