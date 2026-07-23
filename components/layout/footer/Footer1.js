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
                                    <h3>Opening Times</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li>Monday – Thursday: 08AM – 10PM</li>
                                        <li>Friday – Saturday: 10AM–11:30PM</li>
                                        <li>Sunday: <span>Closed</span></li>
                                        <li>Booking Time: 24/7 Hours</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget text-center">
                                <div className="widget-content">
                                    <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orc leo consequat vitae erat gravida lobortis nec et sagittis.</p>
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
                                    <h3>Contact Info</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li><span>Address: </span>New Hyde Park, NY 11040</li>
                                        <li><span>Email: </span><Link href="mailto:example@info.com">example@info.com</Link></li>
                                        <li><span>Call: </span><Link href="tel:912136660027">(+91) 213 666 0027</Link></li>
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
