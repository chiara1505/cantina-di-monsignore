'use client'
import React, { useState } from 'react';
import Link from "next/link";
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
     <section className="video-section">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}></div>
      <div className="auto-container">
        <div className="inner-box">
          <div className="sec-title light">
            <span className="sub-title">Watch Video</span>
            <h2>Our Special & Best Quality Cooking</h2>
          </div>
          <div className="video-inner">
            <div className="video-btn">
            <a onClick={() => setOpen(true)}><i className="fas fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
     </>
  );
};