'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Team">
                <div>
                <section className="team-page-section p_relative">
            <div className="auto-container">
                <div className="inner-container wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">George Clooney</Link></h3>
                                        <span className="designation">Master Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Orlando Bloom</Link></h3>
                                        <span className="designation">Sous Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Brendan Fraser</Link></h3>
                                        <span className="designation">Seafood Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Martin Lawrence</Link></h3>
                                        <span className="designation">Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-5.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Robert Downey</Link></h3>
                                        <span className="designation">Master Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-6.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Tom Hardy</Link></h3>
                                        <span className="designation">Sous Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-7.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Ben Stiller</Link></h3>
                                        <span className="designation">Seafood Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-8.jpg" alt="" /></figure>
                                        <div className="share-box p_absolute">
                                            <Link href="/" className="share-icon"><i className="icon-15"></i></Link>
                                            <ul className="share-links p_absolute clearfix">
                                                <li><Link href="index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="index-3"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details">Aaron Paul</Link></h3>
                                        <span className="designation">Chef</span>
                                        <p>Lorem ipsum dolor sit amet risus consectetur adipiscing elit cursus at molestie.</p>
                                    </div>
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