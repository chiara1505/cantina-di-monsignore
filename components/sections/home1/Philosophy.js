import ScrollReveal from '@/components/elements/ScrollReveal';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="bg-layer parallax-bg" style={{ backgroundImage: 'url(assets/images/background/philosophy-bg.jpg)' }}></div>
      <div className="auto-container">
        <ScrollReveal as="blockquote" className="philosophy-quote">
          <p>
            &ldquo;Non una trattoria, non un ristorante gourmet. La Cantina di Monsignore è un luogo dove la cucina racconta il territorio e dove il momento del pasto è un&apos;esperienza autentica fatta di sapori locali, accoglienza e condivisione.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
