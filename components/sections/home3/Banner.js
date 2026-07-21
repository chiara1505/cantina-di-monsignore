
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
             <section className="banner-section style-three p_relative centred">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">
                <SwiperSlide className="slide-item  p_relative">
          <div className="image-layer p_absolute" style={{backgroundImage: "url(assets/images/banner/banner-4.jpg)"}}></div>
          <div className="auto-container">
            <div className="content-box p_relative d_block z_5">
              <span className="animation_text_word special-text p_relative d_block"></span>
              <h2 className="p_relative d_block">We Serve Quality Food</h2>
              <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
              <div className="btn-box">
                <Link href="/" className="theme-btn-one">Make Reservation</Link>
              </div>
            </div> 
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item  p_relative">
          <div className="image-layer p_absolute" style={{backgroundImage: "url(assets/images/banner/banner-5.jpg)"}}></div>
          <div className="auto-container">
            <div className="content-box p_relative d_block z_5">
              <span className="animation_text_word special-text p_relative d_block"></span>
              <h2 className="p_relative d_block">We Serve Quality Food</h2>
              <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
              <div className="btn-box">
                <Link href="/" className="theme-btn-one">Make Reservation</Link>
              </div>
            </div> 
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item  p_relative">
          <div className="image-layer p_absolute" style={{backgroundImage: "url(assets/images/banner/banner-6.jpg)"}}></div>
          <div className="auto-container">
            <div className="content-box p_relative d_block z_5">
              <span className="animation_text_word special-text p_relative d_block"></span>
              <h2 className="p_relative d_block">We Serve Quality Food</h2>
              <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
              <div className="btn-box">
                <Link href="/" className="theme-btn-one">Make Reservation</Link>
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

