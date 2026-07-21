
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
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
    <section className="testimonial-section sec-pad bg-color-2" id="testmonial">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
      </div>
      <div className="image-box">
        <figure className="image-1"><img src="assets/images/resource/men-1.png" alt="" /></figure>
        <figure className="image-2"><img src="assets/images/resource/image-1.png" alt="" /></figure>
        <figure className="image-3"><img src="assets/images/resource/image-2.png" alt="" /></figure>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
            <div className="content-box">
              <div className="sec-title mb_45">
                <span className="sub-title">Testimonials</span>
                <h2>What Clients Say <br />About <span>Ticrou</span></h2>
              </div>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-9"></i></div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.”</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
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
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                <div className="inner-box">
                    <div className="icon-box"><i className="icon-9"></i></div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.”</p>
                    <div className="author-box">
                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
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
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                <div className="inner-box">
                    <div className="icon-box"><i className="icon-9"></i></div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.”</p>
                    <div className="author-box">
                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
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
            </div>
                </SwiperSlide>
               
                
            </Swiper>
            </div> 
            </div> 
            </div> 
            </div> 
            </section>
        </>
    )
}

