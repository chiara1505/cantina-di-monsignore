'use client'
import ShopSlider from '@/components/slider/ShopSlider'
import React from 'react';
export default function Shop() {
  return (
    <section className="shop-section">
      <div className="bg-layer parallax-bg"style={{ backgroundImage: 'url(assets/images/background/shop-bg.jpg)' }}></div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Shop</span>
          <h2>Our All Delicious & Tasty <br />Product</h2>
        </div>
        <div className="content-box">
          <ShopSlider />                        
        </div>
      </div>
    </section>
  );
};

