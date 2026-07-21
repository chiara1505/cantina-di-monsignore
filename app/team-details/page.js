'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
                <div>
                <section className="team-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                        <div className="image-box mr_50">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                            <figure className="image"><img src="assets/images/team/team-9.jpg" alt="" /></figure>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="team-details-content">
                            <div className="team-info">
                                <h2>Robert Downey</h2>
                                <span className="designation">Master Chef</span>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend. Proin ut eget sagittis mi quis viverra.</p>
                                    <p>Dictum tellus sollicitudin senectus. Eu nullam posuere aliquet bibendum id sed ipsum semper. Feugiat augue parturient id enim.</p>
                                </div>
                                <ul className="info-list clearfix">
                                    <li><span>Expertise: </span>Strategy, Leadership</li>
                                    <li><span>Experience: </span>20 Years</li>
                                    <li><span>Email: </span><Link href="mailto:robertdowney@gmail.com">robertdowney@gmail.com</Link></li>
                                    <li><span>Phone: </span><Link href="tel:913336660021">(+91) 333 666 0021</Link></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><Link href="team-details"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="team-details"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="team-details"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                            <div className="skills-inner mb_70">
                                <div className="text mb_30">
                                    <h3>My Skills</h3>
                                    <p>Consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend. Proin ut eget sagittis mi quis viverra.</p>
                                </div>
                                <div className="progress-box">
                                <div className="progress-box p_relative d_block mb_35">
                                    <ProgressBar label="Skilled Doctor" percent={75} />
                                    <ProgressBar label="Modernized Equipment" percent={90} />
                                    <ProgressBar label="Dedicated Team" percent={80} />
                                    <ProgressBar label="Dedicated Team" percent={70} />
                                 </div>
                                </div>
                            </div>
                            <div className="contact-inner">
                                <h3>Contact Me</h3>
                                <div className="form-inner">
                                    <form action="team-details" method="post">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your name" required="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your email" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="phone" placeholder="Phone number" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Type message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn-one">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
              
                </div>

            </Layout>
        </>
    )
}