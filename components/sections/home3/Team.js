import Link from "next/link"
import React from 'react';

export default function Team() {
    return (
        <>
            
            <section className="team-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred mb_45">
                    <span className="sub-title">Our Chef</span>
                    <h2>Our Smart Chef</h2>
                </div>
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
                    </div>
                </div>
                <div className="more-btn centred mt_60">
                    <Link href="team" className="theme-btn-one">More Staff</Link>
                </div>
            </div>
        </section>

        </>
    )
}
