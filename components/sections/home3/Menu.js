
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Menu() {
    return (
        <>
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
            <div className="menu-content">
      <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                    <div className="title">
                        <h2>Selected Menu</h2>
                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}> </div>
                    </div>
                    <div className="inner-box">
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
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="menu-block-two">
                <div className="title">
                    <h2>Sweet Pleasure</h2>
                    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                </div>
                <div className="inner-box">
                    <div className="single-item">
                    <figure className="menu-image"><img src="assets/images/resource/menu-4.jpg" alt="" /></figure>
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
                    <figure className="menu-image"><img src="assets/images/resource/menu-5.jpg" alt="" /></figure>
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
                    <figure className="menu-image"><img src="assets/images/resource/menu-6.jpg" alt="" /></figure>
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
                </div>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        </div>
     </div>
                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev">
                        <span className="fal fa-angle-left"></span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <span className="fal fa-angle-right"></span>
                    </button>
                    </div>

            </section>
        </>
    )
}

