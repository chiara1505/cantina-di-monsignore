'use client'

import ScrollReveal from '@/components/elements/ScrollReveal'

export default function AboutChefPhilosophy() {
  return (
    <section className="about-chef-philosophy">
      <div className="auto-container">
        <ScrollReveal className="sec-title centred about-chef-philosophy__title">
          <span className="sub-title">La Filosofia dello Chef</span>
        </ScrollReveal>
        <ScrollReveal delay={150} as="blockquote" className="about-chef-philosophy__quote">
          <p>&ldquo;La frase dello chef arriverà presto.&rdquo;</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
