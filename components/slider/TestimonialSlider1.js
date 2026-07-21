'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnPoppinsaction: false,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna Vivera quam arcuduis Quis lectus.”</p>
                                    <ul className="rating clearfix">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="far fa-star"></i></li>
                                    </ul>
                                    <h4>Sandra Bullock</h4>
                                    <span className="designation">Manager</span>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna Vivera quam arcuduis Quis lectus.”</p>
                                    <ul className="rating clearfix">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="far fa-star"></i></li>
                                    </ul>
                                    <h4>Sandra Bullock</h4>
                                    <span className="designation">Manager</span>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna Vivera quam arcuduis Quis lectus.”</p>
                                    <ul className="rating clearfix">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="far fa-star"></i></li>
                                    </ul>
                                    <h4>Sandra Bullock</h4>
                                    <span className="designation">Manager</span>
                                </div>
                            </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
