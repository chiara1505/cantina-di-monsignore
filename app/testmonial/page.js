'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import TestimonialSlider2 from "@/components/slider/TestmonialSlider2";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
})

const handleToggle = (key) => {
    if (isActive.key === key) {
        setIsActive({
            status: false,
        })
    } else {
        setIsActive({
            status: true,
            key,
        })
    }
}
        
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonials">
                <div>
                <section className="testimonial-style-four centred">
            <figure className="vector-1"><img src="assets/images/icons/vector-2.png" alt="" /></figure>
            <figure className="vector-2"><img src="assets/images/icons/vector-3.png" alt="" /></figure>
            <figure className="vector-3"><img src="assets/images/icons/vector-4.png" alt="" /></figure>
            <figure className="vector-4"><img src="assets/images/icons/vector-6.png" alt="" /></figure>
            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_45">
                    <span className="sub-title">Testimonials</span>
                    <h2>What Clients Say <br />About <span>Ticrou</span></h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat."</p>
                                <h4>Orlando Bloom</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat.”</p>
                                <h4>George Clooney</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat.”</p>
                                <h4>Brendan Fraser</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat.”</p>
                                <h4>Martin Lawrence</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.jpg" alt="" /></figure>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat.”</p>
                                <h4>Robert Downey</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-three">
                            <div className="inner-box">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.jpg" alt="" /></figure>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et ut magna at orci imperdiet Pellentesque at sed porttitor arcu pellentesque posuere mauris eget. Scelerisque consequat.”</p>
                                <h4>Aaron Paul</h4>
                                <span className="designation">Master Chef</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                
                
        <section className="testimonial-style-three sec-pad">
            <div className="shape">
                <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-38.png)" }}></div>
            </div>
            <div className="image-box">
                <figure className="image-1"><img src="assets/images/resource/men-3.png" alt="" /></figure>
                <figure className="image-2"><img src="assets/images/resource/about-2.png" alt="" /></figure>
                <figure className="image-3"><img src="assets/images/resource/image-2.png" alt="" /></figure>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 testimonial-column">
                        <div className="sec-title mb_95">
                            <span className="sub-title">Testimonials</span>
                            <h2>What Clients Say</h2>
                        </div>
                    <div className="content-box">
                        <TestimonialSlider2 />                        
                    </div>
                    </div>
                    </div>
                    </div>
            </section>
           
                </div>
            </Layout>
        </>
    )
}