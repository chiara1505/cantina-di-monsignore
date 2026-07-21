'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function ShopSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-1.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$15:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-2.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$17:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-3.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$20:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-4.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$15:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-1.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$15:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-2.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$17:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-3.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$20:00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="shop-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/shop/shop-4.png" alt="" /></figure>
                                <div className="btn-box">
                                    <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="lower-content">
                                <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                <ul className="rating clearfix">
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                    <li><i className="icon-7"></i></li>
                                </ul>
                                <span className="price">$15:00</span>
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
