'use client'
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import ScrollReveal from "@/components/elements/ScrollReveal";

const locationSlides = [
  {
    src: 'assets/images/resource/about-2.jpg',
    alt: 'La Cantina di Monsignore — facciata',
  },
  {
    src: 'assets/images/resource/about-3.jpg',
    alt: 'La Cantina di Monsignore — interni',
  },
  {
    src: 'assets/images/resource/about-4.jpg',
    alt: 'Castiglione di Sicilia — location',
  },
  {
    src: 'assets/images/resource/about-5.jpg',
    alt: 'La Cantina di Monsignore — location',
  },
]

const swiperOptions = {
  modules: [Autoplay, EffectFade, Navigation],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  navigation: {
    prevEl: '.about-image-slider__nav--prev',
    nextEl: '.about-image-slider__nav--next',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
}

export default function About() {
  const swiperRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      hasScrolledRef.current = true;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const wrap = sliderWrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (entry.isIntersecting && hasScrolledRef.current) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    swiper.autoplay.stop();
  };

  return (
    <section className="about-section sec-pad">
      <div className="auto-container">
        <div className="row clearfix align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box">
                <ScrollReveal className="sec-title mb_30">
                  <span className="sub-title">La Location</span>
                  <h2>Fuori, la tranquillità del borgo. Dentro, l&apos;essenza del territorio etneo</h2>
                </ScrollReveal>
                <ScrollReveal className="text" delay={150}>
                  <p>Nascosto tra i vicoli di Castiglione di Sicilia, il ristorante La Cantina di Monsignore è la ricompensa per chi sa cercare. Piatti della tradizione dal tocco contemporaneo, ingredienti locali e tutto il calore dell&apos;ospitalità siciliana.</p>
                </ScrollReveal>
                <ScrollReveal className="btn-box" delay={300}>
                  <Link href="about" className="theme-btn-one">Scopri il Ristorante</Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <ScrollReveal className="about-image" delay={150}>
              <div className="about-image-slider-wrap" ref={sliderWrapRef}>
                <Swiper
                  {...swiperOptions}
                  className="about-image-slider"
                  onSwiper={handleSwiperInit}
                >
                  {locationSlides.map((slide) => (
                    <SwiperSlide key={slide.src}>
                      <figure className="about-image__figure">
                        <img src={slide.src} alt={slide.alt} />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  className="about-image-slider__nav about-image-slider__nav--prev"
                  aria-label="Foto precedente"
                />
                <button
                  type="button"
                  className="about-image-slider__nav about-image-slider__nav--next"
                  aria-label="Foto successiva"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
