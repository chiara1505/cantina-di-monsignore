'use client'
import Layout from "@/components/layout/Layout"
import MenuSlider from '@/components/slider/MenuSlider'
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
                <div>
                    {/* service-style- */}
                    <section className="service-section service-page alternat-2 centred">
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
                                <h3><Link href="index-3">Birthday Party</Link></h3>
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
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-21"></i></div>
                                <h3><Link href="index-3">Catering Services</Link></h3>
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
                                <div className="icon-box"><i className="icon-22"></i></div>
                                <h3><Link href="index-3">Wedding Cake</Link></h3>
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
                                <div className="icon-box"><i className="icon-23"></i></div>
                                <h3><Link href="index-3">Online Order</Link></h3>
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
                                <div className="icon-box"><i className="icon-24"></i></div>
                                <h3><Link href="index-3">Beverage Types</Link></h3>
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
                    {/* service-styleend */}
                    {/*menu style- */}
                    <section className="menu-style-three">
                        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/menu-bg.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-36.png)' }}></div>
                            <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-37.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="sec-title light mr_60">
                                <span className="sub-title">Weekly Specials</span>
                                <h2>Menu Of The Day</h2>
                                <p>Dignissim ultrices nibh lectus. Etiam imperdiet nam auctor lectus ac cursus nibh. Tempor dignissim posuere nunc quisque. Nunc turpis gravida velit egestas.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 menu-column">
                            <div className="content-box">
                                    <MenuSlider />                        
                                </div>
                                </div>
                            </div>
                        </div>
                        </section>
                    {/* menu-two end */}
                     {/* team*/}
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
                        </div>
                        </section>
                    {/* team end */}
                   
                </div>

            </Layout>
        </>
    )
}