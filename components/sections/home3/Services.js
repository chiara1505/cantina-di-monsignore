import React from 'react';
import Link from 'next/link';
export default function Service() {
    return (
        <section className="service-section sec-pad centred">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title mb_50">
                    <span className="sub-title">Services</span>
                    <h2>Quality & Passion with <br />Our Services</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <h3><Link href="index-3">Birtdhday Party</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet tricies.</p>
                                <div className="btn-box">
                                    <Link href="index-3" className="theme-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-18"></i></div>
                                <h3><Link href="index-3">French Bakery</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet tricies.</p>
                                <div className="btn-box">
                                    <Link href="index-3" className="theme-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-19"></i></div>
                                <h3><Link href="index-3">Coffee to Go</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet tricies.</p>
                                <div className="btn-box">
                                    <Link href="index-3" className="theme-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-20"></i></div>
                                <h3><Link href="index-3">Online Delivery</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet tricies.</p>
                                <div className="btn-box">
                                    <Link href="index-3" className="theme-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

