'use client'
import React from 'react';
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
    <section className="banner-section p_relative centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">                    
                    <SwiperSlide className="slide-item p_relative">
                    <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
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
        {/* Repeat the above structure for each slide-item as needed */}
        <SwiperSlide className="slide-item p_relative">
                    <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
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
        {/* Repeat the above structure for each slide-item as needed */}
        <SwiperSlide className="slide-item p_relative">
                    <div className="image-layer p_absolute" style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}></div>
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
    </section>
  );
};

