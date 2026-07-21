
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

export default function Banner() {
    return (
        <>
            <section className="banner-style-two p_relative">
      <div className="pattern-layer wow slideInDown animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
      <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
      <div className="vector-image">
        <figure className="vector-1"><img src="assets/images/icons/vector-2.png" alt="" /></figure>
        <figure className="vector-2"><img src="assets/images/icons/vector-3.png" alt="" /></figure>
        <figure className="vector-3"><img src="assets/images/icons/vector-4.png" alt="" /></figure>
        <figure className="vector-4"><img src="assets/images/icons/vector-5.png" alt="" /></figure>
      </div>
      <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">
                <SwiperSlide className="slide-item p_relative">
          <div className="auto-container">
            <div className="content-inner p_relative d_block z_5">
              <div className="content-box p_relative d_block z_5">
                <span className="animation_text_word special-text p_relative d_block"></span>
                <h2 className="p_relative d_block">We Serve Quality Food</h2>
                <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                <div className="btn-box">
                  <Link href="/" className="theme-btn-one">Make Reservation</Link>
                </div>
              </div>
              <div className="image-box">
                <figure className="image-1 image"><img src="assets/images/banner/banner-img-1.jpg" alt="" /></figure>
                <figure className="image-2 image"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="content-inner p_relative d_block z_5">
                            <div className="content-box p_relative d_block z_5">
                                <span className="animation_text_word special-text p_relative d_block"></span>
                                <h2 className="p_relative d_block">We Serve Quality Food</h2>
                                <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                <div className="btn-box">
                                    <Link href="/" className="theme-btn-one">Make Reservation</Link>
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image-1 image"><img src="assets/images/banner/banner-img-2.jpg" alt="" /></figure>
                                <figure className="image-2 image"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                            </div>
                        </div> 
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="content-inner p_relative d_block z_5">
                            <div className="content-box p_relative d_block z_5">
                                <span className="animation_text_word special-text p_relative d_block"></span>
                                <h2 className="p_relative d_block">We Serve Quality Food</h2>
                                <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</p>
                                <div className="btn-box">
                                    <Link href="/" className="theme-btn-one">Make Reservation</Link>
                                </div>
                            </div>
                            <div className="image-box">
                                <figure className="image-1 image"><img src="assets/images/banner/banner-img-3.jpg" alt="" /></figure>
                                <figure className="image-2 image"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
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

            </section>
        </>
    )
}

