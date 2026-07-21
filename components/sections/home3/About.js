import Link from "next/link"
import React from 'react';

export default function About() {
    return (
        <>
        <section className="about-style-three">
      <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/shape-34.png)"}}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-5 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-box">
                <div className="shape">
                  <div className="shape-1" style={{backgroundImage: "url(assets/images/shape/shape-2.png)"}}></div>
                  <div className="shape-2" style={{backgroundImage: "url(assets/images/shape/shape-2.png)"}}></div>
                </div>
                <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                <figure className="image image-2"><img src="assets/images/resource/about-3.png" alt="" /></figure>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 content-column">
            <div className="content_block_two">
              <div className="content-box ml_140">
                <div className="sec-title mb_20">
                  <span className="sub-title">Our Story</span>
                  <h2>Traditional & Modern Service <span>Since 1970</span></h2>
                </div>
                <div className="text mb_30">
                  <p>Dignissim ultrices nibh lectus. Etiam imperdiet nam auctor lectus ac cursus nibh. Tempor dignissim posuere nunc quisque. Nunc turpis gravida velit egestas. Leo gravida libero tincidunt sit maecenas. In turpis id eget fringilla imperdiet nisl, ut quis.</p>
                  <p>Quis ornare purus ullamcorper blandit sollicitudin tortor, quis gravida scele risque pulvinar magna vitae quisque.</p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>High Quality Food</li>
                  <li>Salutary Meals</li>
                  <li>Inspiring Recipes</li>
                  <li>Veteran Staff</li>
                  <li>Express Delivery</li>
                </ul>
                <div className="btn-box">
                  <Link href="about" className="theme-btn-one">Our Story</Link>
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
