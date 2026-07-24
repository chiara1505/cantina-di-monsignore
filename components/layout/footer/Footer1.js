'use client'
import Link from "next/link";
export default function Footer1() {
    return (
        <>
           <footer className="main-footer bg-color-1">
            <div className="footer-top pt_85 pb_100">
                <div className="auto-container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget schedule-widget text-right">
                                <div className="widget-title">
                                    <h3>Orari di Apertura</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li>Lunedì 18:30-22:30</li>
                                        <li>Mercoledì 18:30-22:30</li>
                                        <li>Giovedì — Sabato 12:30-14:30 / 18:30-22:30</li>
                                        <li>Domenica 18:30-22:30</li>
                                        <li>Martedì: <span>Chiuso</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget text-center">
                                <div className="widget-content">
                                    <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>Ristorante siciliano a Castiglione di Sicilia, vicino al vulcano Etna e alla Valle dell&apos;Alcantara. Piatti della tradizione rivisitati in chiave moderna.</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget text-left">
                                <div className="widget-title">
                                    <h3>Indirizzo e Contatti</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li><span>Indirizzo: </span>Piazza Sant&apos;Antonio n. 5, Castiglione di Sicilia (ME)</li>
                                        <li><span>Telefono: </span><Link href="tel:+390942090538">0942 09 05 38</Link></li>
                                        <li><span>WhatsApp: </span><Link href="https://wa.me/393888988098">+39 388 89 88 098</Link></li>
                                        <li><span>Email: </span><Link href="mailto:lacantinadimonsignore@gmail.com">lacantinadimonsignore@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom centred">
                <div className="auto-container">
                    <div className="copyright">
                        <p>Copyright 2024 by <Link href="/">ticrou</Link> All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
