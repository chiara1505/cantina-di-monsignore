import React from 'react';
import Link from 'next/link';
export default function Menu() {
  return (
    <section className="menu-style-two">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
      </div>
      <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt="" /></figure>
      <div className="auto-container">
        <div className="sec-title centred mb_100">
          <span className="sub-title">Weekly Specials</span>
          <h2>Menu Of The Day</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 menu-column">
            <div className="menu-inner">
              <div className="title centred">
                <h2>Special Menu</h2>
                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
              </div>
              <div className="inner-box">
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">American Combo Menu</Link></h4>
                    <span className="price">$12</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                    <span className="price">$15</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                    <span className="price">$20</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-4 menu-column">
            <div className="menu-inner">
              <div className="title centred">
                <h2>Sweet Pleasure</h2>
                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
              </div>
              <div className="inner-box">
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">American Combo Menu</Link></h4>
                    <span className="price">$12</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">Strawberry Jam French Toast </Link></h4>
                    <span className="price">$15</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="upper-box">
                    <h4><Link href="shop-details">Optic Big Breakfast Combo Menu</Link></h4>
                    <span className="price">$20</span>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum dolor sit ameted consectur adipiscing elit purus egestas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

