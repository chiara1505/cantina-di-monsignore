'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Menu">
                {/* menu two-section */}
                <section className="menu-style-two">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-27.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    </div>
                    <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="sec-title centred mb_100">
                        <span className="sub-title">Weekly Specials</span>
                        <h2>Menu Of The Day</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 menu-column">
                            <div className="menu-inner">
                            <div className="title centred">
                                <h2>Special Menu</h2>
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                            </div>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                        <span className="price">$12</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                        <span className="price">$15</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                                        <span className="price">$20</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-4 menu-column">
                            <div className="menu-inner">
                            <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                        <span className="price">$12</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                        <span className="price">$15</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="upper-box">
                                        <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                                        <span className="price">$20</span>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                 </section>
                {/* menu twosection end */}
                {/* menu-section */}
                <section className="menu-section menu-page bg-color-1">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
                        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="inner-container p_relative">
                        <div className="sec-title light centred mb_100">
                            <span className="sub-title">Weekly Specials</span>
                            <h2>Menu Of The Day</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
                            <div className="menu-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                <div className="shape">
                                    <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
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
                                    <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
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
                        </div>
                    </div>
                    </section>
                    {/* menu section end */}
                {/* menu four-two */}
                <section className="menu-style-four">
                <div className="auto-container">
                    <div className="sec-title centred mb_90">
                    <span className="sub-title">Weekly Specials</span>
                    <h2>Menu Of The Day</h2>
                    </div>
                    <div className="inner-container">
                    <div className="menu-block-two">
                        <div className="inner-box">
                        <div className="shape">
                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                            <div className="shape-3" style={{ backgroundImage: 'url(assets/images/shape/shape-27.png)' }}></div>
                            <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                        </div>
                        <div className="single-item">
                            <figure className="menu-image"><img src="assets/images/resource/menu-1.jpg" alt="" /></figure>
                            <div className="inner">
                            <div className="upper-box">
                                <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                <span className="price">$12</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                            </div>
                            </div>
                        </div>
                        <div className="single-item">
                            <figure className="menu-image"><img src="assets/images/resource/menu-2.jpg" alt="" /></figure>
                            <div className="inner">
                            <div className="upper-box">
                                <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                <span className="price">$15</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                            </div>
                            </div>
                        </div>
                        <div className="single-item">
                            <figure className="menu-image"><img src="assets/images/resource/menu-3.jpg" alt="" /></figure>
                            <div className="inner">
                            <div className="upper-box">
                                <h4><Link href="shop-details">Optic Breakfast Combo</Link></h4>
                                <span className="price">$20</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                            </div>
                            </div>
                        </div>
                        <div className="single-item">
                            <figure className="menu-image"><img src="assets/images/resource/menu-1.jpg" alt="" /></figure>
                            <div className="inner">
                            <div className="upper-box">
                                <h4><Link href="shop-details">American Combo Menu</Link></h4>
                                <span className="price">$12</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                            </div>
                            </div>
                        </div>
                        <div className="single-item">
                            <figure className="menu-image"><img src="assets/images/resource/menu-2.jpg" alt="" /></figure>
                            <div className="inner">
                            <div className="upper-box">
                                <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                                <span className="price">$15</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectur adipiscing purus egestas diam vitae.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* menu four end */}
                  
                </Layout>
        </>
    )
}


