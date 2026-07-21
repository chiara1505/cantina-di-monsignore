import React from 'react';
import Link from 'next/link';
export default function Deal() {
  return (
    <section className="deal-section sec-pad centred">
      <div className="auto-container">
        <div className="sec-title mb_45">
          <span className="sub-title">Special Deal</span>
          <h2>Deal Of The Day</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 deal-block">
            <div className="deal-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/deal-1.jpg" alt="" /></figure>
                  <span>$20</span>
                </div>
                <div className="text">
                  <h3><Link href="index-3">Breakfast</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 deal-block">
            <div className="deal-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/deal-2.jpg" alt="" /></figure>
                  <span>$24</span>
                </div>
                <div className="text">
                  <h3><Link href="index-3">Launch</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 deal-block">
            <div className="deal-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/deal-3.jpg" alt="" /></figure>
                  <span>$18</span>
                </div>
                <div className="text">
                  <h3><Link href="index-3">Dinner</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 deal-block">
            <div className="deal-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/deal-4.jpg" alt="" /></figure>
                  <span>$15</span>
                </div>
                <div className="text">
                  <h3><Link href="index-3">Dessert</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

