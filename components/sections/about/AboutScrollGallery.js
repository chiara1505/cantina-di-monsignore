'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Foto gallery About — carica le immagini in:
 * public/assets/images/about/
 */
const galleryImages = [
  {
    src: 'assets/images/about/gallery-1.jpg',
    alt: 'La Cantina di Monsignore — location',
  },
  {
    src: 'assets/images/about/gallery-2.jpg',
    alt: 'La Cantina di Monsignore — interni',
  },
  {
    src: 'assets/images/about/gallery-3.jpg',
    alt: 'Castiglione di Sicilia — borgo',
  },
  {
    src: 'assets/images/about/gallery-4.jpg',
    alt: 'La Cantina di Monsignore — ristorante',
  },
  {
    src: 'assets/images/about/gallery-5.jpg',
    alt: 'La Cantina di Monsignore — dettaglio',
  },
  {
    src: 'assets/images/about/gallery-6.jpg',
    alt: 'La Cantina di Monsignore — atmosfera',
  },
  {
    src: 'assets/images/about/gallery-7.jpg',
    alt: 'La Cantina di Monsignore — cucina e sapori',
  },
  {
    src: 'assets/images/about/gallery-8.jpg',
    alt: 'La Cantina di Monsignore — tavoli e sala',
  },
  {
    src: 'assets/images/about/gallery-9.jpg',
    alt: 'La Cantina di Monsignore — piatti e tradizione',
  },
  {
    src: 'assets/images/about/gallery-10.jpg',
    alt: 'La Cantina di Monsignore — terrazza e cortile',
  },
  {
    src: 'assets/images/about/gallery-11.jpg',
    alt: 'La Cantina di Monsignore — angolo del borgo',
  },
  {
    src: 'assets/images/about/gallery-12.jpg',
    alt: 'La Cantina di Monsignore — esperienza a tavola',
  },
]

const AUTO_SCROLL_SPEED = 0.045
const GALLERY_GAP = 20
const MANUAL_SCROLL_PAUSE_MS = 800

export default function AboutScrollGallery() {
  const viewportRef = useRef(null)
  const rafRef = useRef(null)
  const pauseUntilRef = useRef(0)
  const trackHoverRef = useRef(false)
  const navHoverRef = useRef(false)
  const [showNav, setShowNav] = useState(false)

  const loopImages = [...galleryImages, ...galleryImages]

  const syncShowNav = useCallback(() => {
    setShowNav(trackHoverRef.current || navHoverRef.current)
  }, [])

  const getScrollStep = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return 0

    const item = viewport.querySelector('.about-scroll-gallery__item')
    if (!item) return 0

    return item.offsetWidth + GALLERY_GAP
  }, [])

  const normalizeScroll = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const half = viewport.scrollWidth / 2

    if (viewport.scrollLeft >= half) {
      viewport.scrollLeft -= half
    } else if (viewport.scrollLeft < 0) {
      viewport.scrollLeft += half
    }
  }, [])

  const scrollByStep = useCallback((direction) => {
    const viewport = viewportRef.current
    const step = getScrollStep()
    if (!viewport || !step) return

    pauseUntilRef.current = performance.now() + MANUAL_SCROLL_PAUSE_MS

    if (direction < 0 && viewport.scrollLeft <= step) {
      viewport.scrollLeft += viewport.scrollWidth / 2
    }

    viewport.scrollBy({ left: direction * step, behavior: 'smooth' })
    window.setTimeout(normalizeScroll, 350)
  }, [getScrollStep, normalizeScroll])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    let lastTime = performance.now()

    const tick = (now) => {
      if (now >= pauseUntilRef.current) {
        const delta = now - lastTime
        viewport.scrollLeft += AUTO_SCROLL_SPEED * delta

        const half = viewport.scrollWidth / 2
        if (viewport.scrollLeft >= half) {
          viewport.scrollLeft -= half
        }
      }

      lastTime = now
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="about-scroll-gallery" aria-label="Galleria location e ristorante">
      <div className={`about-scroll-gallery__frame${showNav ? ' is-nav-visible' : ''}`}>
        <div ref={viewportRef} className="about-scroll-gallery__viewport">
          <div
            className="about-scroll-gallery__track"
            onMouseEnter={() => {
              trackHoverRef.current = true
              syncShowNav()
            }}
            onMouseLeave={() => {
              trackHoverRef.current = false
              syncShowNav()
            }}
          >
            {loopImages.map((image, index) => (
              <figure key={`${image.src}-${index}`} className="about-scroll-gallery__item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="about-scroll-gallery__nav about-scroll-gallery__nav--prev"
          aria-label="Foto precedente"
          onMouseEnter={() => {
            navHoverRef.current = true
            syncShowNav()
          }}
          onMouseLeave={() => {
            navHoverRef.current = false
            syncShowNav()
          }}
          onClick={() => scrollByStep(-1)}
        >
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="about-scroll-gallery__nav about-scroll-gallery__nav--next"
          aria-label="Foto successiva"
          onMouseEnter={() => {
            navHoverRef.current = true
            syncShowNav()
          }}
          onMouseLeave={() => {
            navHoverRef.current = false
            syncShowNav()
          }}
          onClick={() => scrollByStep(1)}
        >
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  )
}
