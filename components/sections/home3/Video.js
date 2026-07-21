'use client'
import React, { useState } from 'react';
import Link from "next/link";
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="video-style-two centred">
            <div className="auto-container">
                <div className="inner-box" style={{ backgroundImage: 'url(assets/images/background/video-bg-2.jpg)' }}>
                    <div className="sec-title light mb_100">
                        <span className="sub-title">Watch Video</span>
                        <h2>Our Special & Best Quality <br />Cooking</h2>
                    </div>
                    <div className="video-btn">
                    <a onClick={() => setOpen(true)}><i className="fas fa-play"></i></a>
                    </div>
                </div>
            </div>
        </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
     </>
  );
};