'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contuct Us">
                <div>
                     {/* Contact Form Section */}
                     <section className="contact-section">
      <figure className="vector-1">
        <img src="assets/images/icons/vector-2.png" alt="" />
      </figure>
      <figure className="vector-2">
        <img src="assets/images/icons/vector-4.png" alt="" />
      </figure>
      <figure className="vector-3">
        <img src="assets/images/icons/vector-6.png" alt="" />
      </figure>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 info-column">
            <div className="info-inner">
              <div className="text">
                <h2>Ticrou Info</h2>
                <p>Mauris magna sit elementum facilis lacusacphar.</p>
              </div>
              <ul className="info-list clearfix">
                <li>
                  <i className="icon-39"></i>
                  <h5>Restaurant</h5>
                  <p>New Hyde Park, NY 11040</p>
                </li>
                <li>
                  <i className="icon-40"></i>
                  <h5>Phone No:</h5>
                  <p>
                    <Link href="tel:913336660021">(+91) 333 666 0021</Link>
                  </p>
                </li>
                <li>
                  <i className="icon-1"></i>
                  <h5>Email:</h5>
                  <p>
                    <Link href="mailto:example@info.com">example@info.com</Link>
                  </p>
                </li>
                <li>
                  <i className="icon-2"></i>
                  <h5>Opening Hours:</h5>
                  <p>Mon - Fri: 8:00AM - 6:00PM</p>
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
          <div className="col-lg-8 col-md-12 col-sm-12 form-column">
            <div className="form-inner centred">
              <h2>
                Get In Touch with <br />
                Ticrou
              </h2>
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
        </div>
      </div>
    </section>
                    {/* Contact Form Section End */}
                      {/* Google Map Section */}
                      <section className="google-map-section">
                        {/*Map Outer*/}
                        <div className="map-inner p_relative d_block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                    {/* Google Map Section End */}
                   
                </div>

            </Layout>
        </>
    )
}
