'use client'
import Link from "next/link";
import React from 'react';
export default function Cta() {
  return (
    <section className="cta-section centred bg-color-1 sec-pad">
            <div className="shape">
                <div className="shape-1 p_absolute l_0 t_0" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
                <div className="shape-2 p_absolute l_60 t_60" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                <div className="shape-3 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
                <div className="shape-4 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title light">
                    <span className="sub-title">Get 25% Discount</span>
                    <h2>Explore Special Taste & The <br />Best Quality</h2>
                    <Link href="/" className="theme-btn-one mt_45">Make a Reservation</Link>
                </div>
            </div>
        </section>
  );
};

