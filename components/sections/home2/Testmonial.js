
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

export default function Testmonial() {
    return (
        <>
           <section className="testimonial-style-two centred">
      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
      <div className="image-box">
        <figure className="image-1"><img src="assets/images/resource/image-1.png" alt="" /></figure>
        <figure className="image-2"><img src="assets/images/resource/image-2.png" alt="" /></figure>
      </div>
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Testimonials</span>
          <h2>What Clients Say <br />About <span>Ticrou</span></h2>
        </div>
      <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="testimonial-content">
            <div className="inner-box">
              <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
              <p>“Consectetur adipiscing elit Id iaculis a in pretium nec erat orci vel Lobortis aenean in gravida tincidunt curabitur tristique cras sed. Elementum turpis non est in tortor metus nibh in at mattis odio scelerisque mollis enim cras euismod praesent.”</p>
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
                <div className="testimonial-content">
            <div className="inner-box">
              <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
              <p>“Consectetur adipiscing elit Id iaculis a in pretium nec erat orci vel Lobortis aenean in gravida tincidunt curabitur tristique cras sed. Elementum turpis non est in tortor metus nibh in at mattis odio scelerisque mollis enim cras euismod praesent.”</p>
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
                <div className="testimonial-content">
            <div className="inner-box">
              <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
              <p>“Consectetur adipiscing elit Id iaculis a in pretium nec erat orci vel Lobortis aenean in gravida tincidunt curabitur tristique cras sed. Elementum turpis non est in tortor metus nibh in at mattis odio scelerisque mollis enim cras euismod praesent.”</p>
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
 </section>
        </>
    )
}

