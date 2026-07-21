
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 65,
    autoplay: {
        delay: 70000,
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

export default function Gallery() {
    return (
        <>
           <section className="gallery-section pt_65">
      <div className="auto-container">
            <Swiper {...swiperOptions} className="gallery-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-1.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-2.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-3.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-1.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-2.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-3.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-1.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-2.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-one">
            <div className="inner-box">
              <figure className="image-box"><img src="assets/images/gallery/gallery-3.jpg" alt="" /></figure>
              <div className="content-box">
                <h4><Link href="/">Top 10 breakfast spots in Paris</Link></h4>
                <span>Breakfast</span>
              </div>
            </div>
          </div>
                </SwiperSlide>
            </Swiper>
            </div> 
            </section>
        </>
    )
}

