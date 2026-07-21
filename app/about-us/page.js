'use client'
import Link from "next/link";
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import StorySlider from '@/components/slider/StorySlider'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-style-two sec-pad">
            <div className="shape">
                <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title centred mb_40">
                    <span className="sub-title">About Us</span>
                    <h2>Traditional & Modern Service <br />Since <span>1970</span></h2>
                </div>
                <div className="text-inner p_relative d_block mb_60">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text mr_30">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.</p>
                                <p>Maecenas mattis facilisi erat odio at. Quisque nullam nunc tincidunt ante. Etiam eget augue velit ultricies amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text ml_30">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.</p>
                                <p>Maecenas mattis facilisi erat odio at. Quisque nullam nunc tincidunt ante. Etiam eget augue velit ultricies amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="signature centred"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
            </div>
        </section>
                {/* about-section end */}
                {/* story -section */}
                <section className="story-section bg-color-1">
            <div className="auto-container">
                <div className="sec-title light mb_50">
                    <span className="sub-title">Our Story</span>
                    <h2>Learn More About <br /><span>Ticrou</span></h2>
                </div>
                <div className="story-content">
                <StorySlider />    
                </div>
            </div>
        </section>
                    {/* story-section end */}
                {/* service-two */}
                <section className="service-section alternat-2 sec-pad centred">
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
                </div>
            </div>
        </section>
                {/* service end */}
                  
                    
                {/* testimonial-section */}
                <section className="testimonial-style-three about-page sec-pad">
            <div className="shape">
                <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
            </div>
            <div className="image-box">
                <figure className="image-1"><img src="assets/images/resource/men-3.png" alt="" /></figure>
                <figure className="image-2"><img src="assets/images/resource/about-2.png" alt="" /></figure>
                <figure className="image-3"><img src="assets/images/resource/image-2.png" alt="" /></figure>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 testimonial-column">
                        <div className="sec-title mb_95">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Clients Say</h2>
                        </div>
                      <div className="content-box">
                        <TestimonialSlider1 />                        
                    </div>
                    </div>
                    </div>
                    </div>
               </section>
                {/* testimonial-section */}
              
                {/* team-section */}
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
                {/* team-section */}
              



                </Layout>
        </>
    )
}


