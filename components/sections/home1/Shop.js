'use client'
import Link from 'next/link'
import ShopSlider from '@/components/slider/ShopSlider'
import ScrollReveal from '@/components/elements/ScrollReveal'
import React from 'react';

export default function Shop({ products = [] }) {
  return (
    <section className="shop-section">
      <div className="bg-layer parallax-bg"style={{ backgroundImage: 'url(/assets/images/background/shop-bg.jpg)' }}></div>
      <div className="auto-container">
        <ScrollReveal className="sec-title light mb_50">
          <span className="sub-title">Il nostro shop</span>
          <h2>Vini, conserve e olio selezionati per farti scoprire i prodotti del territorio e non solo.</h2>
        </ScrollReveal>
        <ScrollReveal className="content-box" delay={150}>
          <ShopSlider products={products} />
        </ScrollReveal>
        <ScrollReveal className="shop-section__btn" delay={250}>
          <Link href="/shop" className="theme-btn-one">Scopri lo Shop</Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
