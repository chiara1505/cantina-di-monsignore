'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 150,
    autoplay: {
        delay: 2500,
        disableOninteraction: false,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 150,
        },
    }
}
export default function StorySlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="story-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">1997</span>
                                <figure className="image-box"><img src="assets/images/resource/story-1.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">The Beginnings</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2003</span>
                                <figure className="image-box"><img src="assets/images/resource/story-2.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Winning Chef Award</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2018</span>
                                <figure className="image-box"><img src="assets/images/resource/story-3.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Opening New Branch</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2020</span>
                                <figure className="image-box"><img src="assets/images/resource/story-4.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Updating Menu</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">1997</span>
                                <figure className="image-box"><img src="assets/images/resource/story-1.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">The Beginnings</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2003</span>
                                <figure className="image-box"><img src="assets/images/resource/story-2.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Winning Chef Award</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2018</span>
                                <figure className="image-box"><img src="assets/images/resource/story-3.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Opening New Branch</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="story-block-one">
                            <div className="inner-box">
                                <span className="year">2020</span>
                                <figure className="image-box"><img src="assets/images/resource/story-4.jpg" alt="" /></figure>
                                <div className="lower-content">
                                    <h4><Link href="index-2">Updating Menu</Link></h4>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <div className="owl-nav">
      <button type="button" role="presentation" className="owl-prev">
        <span className="fal fa-angle-left"></span>
      </button>
      <button type="button" role="presentation" className="owl-next">
        <span className="fal fa-angle-right"></span>
      </button>
    </div>
            </Swiper>
        </>
    )
}
