import Link from 'next/link';
import React from 'react';

export default function Menu() {
    return (
        <section className="menu-section bg-color-1" id="menu">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title light centred mb_100">
                        <span className="sub-title">Weekly Specials</span>
                        <h2>Menu Of The Day</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
                            <div className="menu-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape">
                                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                                    </div>
                                    <div className="inner">
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                                <span className="price">$12</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                <span className="price">$15</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                                                <span className="price">$20</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
                            <div className="menu-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="shape">
                                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                                    </div>
                                    <div className="inner">
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                                <span className="price">$12</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                                <span className="price">$15</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="upper-box">
                                                <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                                                <span className="price">$20</span>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet ultricies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn mt_110 centred">
                        <Link href="/" className="theme-btn-one">Download PDF</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

