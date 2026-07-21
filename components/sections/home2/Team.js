'use client'
import Link from "next/link";
import React from 'react';

export default function team() {
  return (
    <section className="team-section sec-pad centred">
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Experts</span>
          <h2>Our experts staff & Members</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="team-details"><img src="assets/images/team/team-1.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <h3><Link href="team-details">Guy Hawkins</Link></h3>
                  <span className="designation">Manager</span>
                  <p>Amet minim mollit nonest deserunt ulamco.</p>
                  <div className="share-box">
                    <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                    <ul className="social-links clearfix">
                      <li><Link href="index-2"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-skype"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="team-details"><img src="assets/images/team/team-2.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <h3><Link href="team-details">Kristin Watson</Link></h3>
                  <span className="designation">Co-Founder</span>
                  <p>Amet minim mollit nonest deserunt ulamco.</p>
                  <div className="share-box">
                    <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                    <ul className="social-links clearfix">
                      <li><Link href="index-2"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-skype"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="team-details"><img src="assets/images/team/team-3.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <h3><Link href="team-details">Cody Fisher</Link></h3>
                  <span className="designation">Assistant</span>
                  <p>Amet minim mollit nonest deserunt ulamco.</p>
                  <div className="share-box">
                    <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                    <ul className="social-links clearfix">
                      <li><Link href="index-2"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-skype"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><Link href="team-details"><img src="assets/images/team/team-4.jpg" alt="" /></Link></figure>
                <div className="lower-content">
                  <h3><Link href="team-details">Floyd Miles</Link></h3>
                  <span className="designation">Accountant</span>
                  <p>Amet minim mollit nonest deserunt ulamco.</p>
                  <div className="share-box">
                    <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                    <ul className="social-links clearfix">
                      <li><Link href="index-2"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="index-2"><i className="fab fa-skype"></i></Link></li>
                    </ul>
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
