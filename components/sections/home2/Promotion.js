
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

export default function Promotion() {
    return (
        <>
          <section className="promotion-style-two">
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Promotion</span>
          <h2>Check Our All Flavours <br />Summer Promo</h2>
        </div>
      <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="promotion-block-one">
            <div className="inner-box">
              <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image"><img src="assets/images/resource/promotion-1.jpg" alt="" /></figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h2>Over <span>250</span> Delicious & Tasty Recipes</h2>
                    <h4>Get 25% Off</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor.</p>
                    <Link href="/" className="theme-btn-one">Let’s Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="promotion-block-one">
            <div className="inner-box">
              <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image"><img src="assets/images/resource/promotion-2.jpg" alt="" /></figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h2>Over <span>250</span> Delicious & Tasty Recipes</h2>
                    <h4>Get 25% Off</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor.</p>
                    <Link href="/" className="theme-btn-one">Let’s Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
            </Swiper>
            <div className="owl-nav">
      <button type="button" role="presentation" className="owl-prev">
        <span className="fal fa-angle-left"></span>
      </button>
      <button type="button" role="presentation" className="owl-next">
        <span className="fal fa-angle-right"></span>
      </button>
    </div>
    </div>

 </section>
        </>
    )
}

