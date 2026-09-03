'use client'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShopProductCard from '@/components/sections/shop/ShopProductCard'

function buildSwiperOptions(productCount) {
  return {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: productCount > 4,
    navigation: {
      nextEl: '.shop-slider__next',
      prevEl: '.shop-slider__prev',
    },
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
    },
  }
}

export default function ShopSlider({ products = [] }) {
  if (!products.length) return null

  return (
    <Swiper
      {...buildSwiperOptions(products.length)}
      className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one shop-slider"
    >
      {products.map((product) => (
        <SwiperSlide key={product.slug} className="slide-item">
          <ShopProductCard product={product} variant="carousel" />
        </SwiperSlide>
      ))}
      <div className="owl-nav">
        <button type="button" className="owl-prev shop-slider__prev" aria-label="Prodotto precedente">
          <span className="fal fa-angle-left" />
        </button>
        <button type="button" className="owl-next shop-slider__next" aria-label="Prodotto successivo">
          <span className="fal fa-angle-right" />
        </button>
      </div>
    </Swiper>
  )
}
