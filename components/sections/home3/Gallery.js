
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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

export default function Gallery() {
    return (
        <>
            <section className="gallery-style-two pb_50">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                        <div className="sec-title mr_50">
                            <span className="sub-title">Our Gallery</span>
                            <h2>Let’s See Our Gallery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas.</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 carousel-column">
                        <div className="carousel-content ml_30">
      <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="gallery-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/gallery-4.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <div className="view-btn"><Link href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-16"></i></Link></div>
                                            <div className="text">
                                                <p>Tourist Guide</p>
                                                <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/gallery-5.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <div className="view-btn"><Link href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-16"></i></Link></div>
                                            <div className="text">
                                                <p>Tourist Guide</p>
                                                <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="gallery-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/gallery-6.jpg" alt="" /></figure>
                                        <div className="content-box">
                                            <div className="view-btn"><Link href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-16"></i></Link></div>
                                            <div className="text">
                                                <p>Tourist Guide</p>
                                                <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                            </div>
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
            </div>
        </div>
    </div>

            </section>
        </>
    )
}

