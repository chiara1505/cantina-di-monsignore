import React from 'react';
import Link from 'next/link';
export default function News() {
  return (
    <section className="news-section sec-pad">
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Ticrou News</span>
          <h2>Know More About The <br />Ticrou Article</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                  <div className="date">15 <span>APRIL</span></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="blog-details">Right Way to Make Cold Coffee</Link></h3>
                  <ul className="post-info clearfix">
                    <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                    <li><i className="icon-11"></i><Link href="blog-details">0 Comment</Link></li>
                  </ul>
                  <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                  <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                  <div className="date">12 <span>APRIL</span></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h3>
                  <ul className="post-info clearfix">
                    <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                    <li><i className="icon-11"></i><Link href="blog-details">4 Comment</Link></li>
                  </ul>
                  <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                  <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                  <div className="date">11 <span>APRIL</span></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="blog-details">The benefits of Buffalo Meat</Link></h3>
                  <ul className="post-info clearfix">
                    <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                    <li><i className="icon-11"></i><Link href="blog-details">1 Comment</Link></li>
                  </ul>
                  <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                  <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

