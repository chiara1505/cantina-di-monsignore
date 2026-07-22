import Link from 'next/link';
import React from 'react';

export default function About() {
    return (
        <section className="about-section sec-pad" id="about">
            <div className="image_block_one">
                <div className="image-box">
                    <figure className="image-1 wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                    <figure className="image-2"><img src="assets/images/resource/about-2.png" alt="" /></figure>
                    <figure className="vector-1"><img src="assets/images/icons/vector-1.png" alt="" /></figure>
                    <div className="shape">
                        <div className="shape-1"></div>
                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box">
                                <div className="sec-title mb_30">
                                    <span className="sub-title">Our Story</span>
                                    <h2>Traditional & Modern Service <span>Since 1970</span></h2>
                                </div>
                                <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.</p>
                                </div>
                                <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="about" className="theme-btn-one">Our Story</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

