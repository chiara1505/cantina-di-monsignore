'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => {
      setArmed(false)
      setVisible(true)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }

    const rect = node.getBoundingClientRect()
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    const inViewport = rect.top < viewHeight && rect.bottom > 0

    if (inViewport) {
      show()
      return
    }

    setArmed(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px 5% 0px' }
    )

    observer.observe(node)

    const fallback = window.setTimeout(show, 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  const classes = [
    'scroll-reveal',
    armed && !visible ? 'scroll-reveal--armed' : '',
    visible ? 'scroll-reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--scroll-reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
