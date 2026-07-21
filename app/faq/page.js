'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function WhyChooseUs() {
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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq's">        

        <section className="faq-section">
      <figure className="vector-1">
        <img src="assets/images/icons/vector-2.png" alt="" />
      </figure>
      <figure className="vector-2">
        <img src="assets/images/icons/vector-4.png" alt="" />
      </figure>
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">Ask Your Question</span>
          <h2>Frequently Asked Question</h2>
        </div>
        <div className="accordion-inner">
          <ul className="accordion-box">
                <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                    <div className="icon-outer"></div>
                    <h5><span>q</span>Is Gordon available to attend or speak at our event?</h5>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div>
                    <div className="icon-outer"></div>
                    <h5><span>q</span>Could Gordon please record a special message for us?</h5>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite animer. Effortlessly creates and distributes innovative apps across</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div>
                    <div className="icon-outer"></div>
                    <h5><span>q</span>We are visiting one of the restaurants. Is Gordon available to say hello?</h5>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite animer. Effortlessly creates and distributes innovative apps across</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-box"></div>
                    <div className="icon-outer"></div>
                    <h5><span>q</span>Please can you send me a signed autograph from Gordon?</h5>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite animer. Effortlessly creates and distributes innovative apps across</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-box"></div>
                    <div className="icon-outer"></div>
                    <h5><span>q</span>Would Gordon like to become a patron of our charity?</h5>
                  </div>
                  <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                      <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite animer. Effortlessly creates and distributes innovative apps across</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box ml_30">
              <figure className="image"><img src="assets/images/resource/faq-1.jpg" alt="" /></figure>
            </div>
          </div>
       
    </section>
                {/* faq-form-style */}
                <section className="faq-form-section centred">
      <figure className="vector-1">
        <img src="assets/images/icons/vector-6.png" alt="" />
      </figure>
      <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/form-bg.jpg)' }}></div>
      <div className="auto-container">
        <div className="inner-box">
          <h2>Do You Have Any <br />Questions?</h2>
          <div className="form-inner">
            <form action="team-details" method="post">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="email" name="email" placeholder="Your email" required />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" name="phone" placeholder="Phone number" required />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea name="message" placeholder="Type message"></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                  <button type="submit" className="theme-btn-one">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
            {/* faq-form end */} 
                </Layout>   
        </>
    )
}



