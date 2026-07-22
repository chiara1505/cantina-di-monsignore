'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ScrollReveal from '@/components/elements/ScrollReveal'

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}

const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.',
    name: 'Sandra Bullock',
    role: 'Manager',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.',
    name: 'Sandra Bullock',
    role: 'Manager',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit purus tempor dui. Pharetra consequat nibh elit urna poppinsdum. Vivera quam a arcu duis Quis lectus donec nulladui sit in viverra tempus risus.',
    name: 'Sandra Bullock',
    role: 'Manager',
  },
]

export default function Testimonial() {
  return (
    <section className="testimonial-section sec-pad bg-color-brown" id="testmonial">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 content-column">
            <div className="content-box centred">
              <ScrollReveal className="sec-title light centred mb_45">
                <span className="sub-title">Recensioni</span>
                <h2>Le parole dei nostri ospiti</h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className="slide-item">
                      <div className="testimonial-block-one">
                        <div className="inner-box">
                          <p>{item.quote}</p>
                          <div className="author-box">
                            <ul className="rating clearfix">
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="far fa-star"></i></li>
                            </ul>
                            <h4>{item.name}</h4>
                            <span className="designation">{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
