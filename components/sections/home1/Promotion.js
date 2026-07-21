import React from 'react';
import Link from "next/link"
export default function Promotion() {

    return (
        <>
            
            <section className="promotion-section sec-pad">
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Promotion</span>
          <h2>Check Our All Flavours <br />Summer Promo</h2>
        </div>

        <div className="promotion-block-one">
          <div className="inner-box">
            <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/promotion-1.jpg" alt="" /></figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="content-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
                  <h2>Over <span>250</span> Delicious & Tasty Recipes</h2>
                  <h4>Get 25% Off</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor.</p>
                  <Link href="/" className="theme-btn-one">Let’s Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promotion-block-one">
          <div className="inner-box">
            <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="content-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
                  <h2>Over <span>250</span> Delicious & Tasty Recipes</h2>
                  <h4>Get 25% Off</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor.</p>
                  <Link href="/" className="theme-btn-one">Let’s Order Now</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/promotion-2.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

          
        </>
    )
}