'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';
import ScrollReveal from '@/components/elements/ScrollReveal';

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contatti" breadcrumbImage={PAGE_TITLE_IMAGES.contact}>
                <div className="contact-page">
                    <div className="contact-page__columns">
                    <section className="contact-section contact-section--info bg-color-panna">
                        <div className="auto-container">
                            <div className="info-inner">
                                <div className="text">
                                    <h2>Ci trovi qui</h2>
                                    <p>I nostri indirizzi e recapiti per rimanere in contatto</p>
                                </div>
                                <ul className="info-list clearfix">
                                    <li>
                                        <i className="icon-39"></i>
                                        <h5>Indirizzo</h5>
                                        <p>Piazza Sant&apos;Antonio n. 5, Castiglione di Sicilia (ME)</p>
                                    </li>
                                    <li>
                                        <i className="icon-40"></i>
                                        <h5>Telefono</h5>
                                        <p>
                                            <Link href="tel:+390942090538">0942 09 05 38</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fab fa-whatsapp"></i>
                                        <h5>WhatsApp</h5>
                                        <p>
                                            <Link href="https://wa.me/393888988098">+39 388 89 88 098</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <i className="icon-1"></i>
                                        <h5>Email</h5>
                                        <p>
                                            <Link href="mailto:lacantinadimonsignore@gmail.com">lacantinadimonsignore@gmail.com</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <i className="icon-2"></i>
                                        <h5>Orari di Apertura</h5>
                                        <p>
                                            Lunedì 18:30 - 22:30<br />
                                            Mercoledì 18:30 - 22:30<br />
                                            Giovedì 12:30 - 14:30 / 18:30 - 22:30<br />
                                            Venerdì 12:30 - 14:30 / 18:30 - 22:30<br />
                                            Sabato 12:30 - 14:30 / 18:30 - 22:30<br />
                                            Domenica 18:30 - 22:30
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fas fa-calendar-times"></i>
                                        <h5>Giorno di Chiusura</h5>
                                        <p>Martedì</p>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li>
                                        <Link href="contact">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="contact">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="contact">
                                            <i className="fab fa-pinterest"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="contact">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section contact-section--form bg-color-panna">
                        <div className="auto-container">
                            <div className="form-inner centred">
                                <h2>Scrivici per qualsiasi informazione</h2>
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Your email" required="" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required="" placeholder="Phone" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                                            <button className="theme-btn-one" type="submit" name="submit-form">
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    </div>

                    <section className="contact-directions-section bg-color-panna">
                        <div className="auto-container">
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
                        </div>
                    </section>

                    <section className="google-map-section">
                        <div className="map-inner p_relative d_block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading={true} referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>

                </div>

            </Layout>
        </>
    )
}
