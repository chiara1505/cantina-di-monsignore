
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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

export default function Shop() {
    return (
        <>
            <section className="shop-style-two">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Shop</span>
          <h2>Our All Delicious & Tasty <br />Product</h2>
        </div>
      <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
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

