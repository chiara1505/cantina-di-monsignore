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
        <ScrollReveal className="shop-section__content">
          <div className="sec-title light mb_50">
            <span className="sub-title">Il nostro shop</span>
            <h2>Vini, conserve e olio selezionati per farti scoprire i prodotti del territorio e non solo.</h2>
          </div>
          <div className="content-box shop-section__slider">
            <ShopSlider products={products} />
          </div>
          <div className="shop-section__btn">
            <Link href="/shop" className="theme-btn-one">Scopri lo Shop</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
