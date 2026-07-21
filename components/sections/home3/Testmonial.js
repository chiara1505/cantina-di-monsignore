
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

export default function Testimonial() {
    return (
        <>
             
        <section className="testimonial-style-three sec-pad">
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
    </div>
    </div>
    </div>

            </section>
        </>
    )
}

