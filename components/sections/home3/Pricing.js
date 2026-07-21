import React from 'react';
import Link from 'next/link';
export default function Pricing() {
    return (
        <section className="pricing-style-two pb_120 centred">
            <div className="auto-container">
                <div className="sec-title mb_55">
                    <span className="sub-title-two">Pricing</span>
                    <h2>Affordable Pricing</h2>
                </div>
                <div className="row clearfix">
                    {/* Pricing Block 1 */}
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="table-header mb_40">
                                    <h3>Personal Plan</h3>
                                    <p>For bloggers, freelancers and businesses</p>
                                    <h2>$35<span> /Month</span></h2>
                                    <Link href="index-3" className="theme-btn btn-one">Buy The Plan</Link>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Up to 10 Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Block 2 */}
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="table-header mb_40">
                                    <h3>Business Plan</h3>
                                    <p>For bloggers, freelancers and businesses</p>
                                    <h2>$45<span> /Month</span></h2>
                                    <Link href="index-3" className="theme-btn btn-one">Buy The Plan</Link>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Up to 10 Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Block 3 */}
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="table-header mb_40">
                                    <h3>Professional Plan</h3>
                                    <p>For bloggers, freelancers and businesses</p>
                                    <h2>$55<span> /Month</span></h2>
                                    <Link href="index-3" className="theme-btn btn-one">Buy The Plan</Link>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Up to 10 Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Block 4 */}
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="table-header mb_40">
                                    <h3>Team Plan</h3>
                                    <p>For bloggers, freelancers and businesses</p>
                                    <h2>$65<span> /Month</span></h2>
                                    <Link href="index-3" className="theme-btn btn-one">Buy The Plan</Link>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Up to 10 Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

