'use client'

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
]

export default function AboutScrollGallery() {
  const loopImages = [...galleryImages, ...galleryImages]

  return (
    <section className="about-scroll-gallery" aria-label="Galleria location e ristorante">
      <div className="about-scroll-gallery__viewport">
        <div className="about-scroll-gallery__track">
          {loopImages.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="about-scroll-gallery__item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
