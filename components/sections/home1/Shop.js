'use client'
import ShopSlider from '@/components/slider/ShopSlider'
import ScrollReveal from '@/components/elements/ScrollReveal'
import React from 'react';
export default function Shop() {
  return (
    <section className="shop-section">
      <div className="bg-layer parallax-bg"style={{ backgroundImage: 'url(assets/images/background/shop-bg.jpg)' }}></div>
      <div className="auto-container">
        <ScrollReveal className="sec-title mb_50">
          <span className="sub-title">Our Shop</span>
          <h2>Our All Delicious & Tasty <br />Product</h2>
        </ScrollReveal>
        <ScrollReveal className="content-box" delay={150}>
          <ShopSlider />                        
        </ScrollReveal>
      </div>
    </section>
  );
};

