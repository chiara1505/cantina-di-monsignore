'use client'
import { useState } from 'react'
export default function faq() {
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
    <section className="faq-section pb_150">
      <div className="auto-container">
        <div className="sec-title centred mb_55">
          <span className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">General Faq’s</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="inner-box">
            <ul className="accordion-box">
                <li className="accordion block active-block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                    <div className="icon-box"> </div>
                        <h4>What is an AI voice maker?</h4>
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text"><p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                        <div className="icon-box"></div>
                        <h4>How can I quickly generate realistic voices from texts?</h4></div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text"><p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                        <div className="icon-box"></div>
                        <h4>How can I create a TTS video without any prior experience?</h4></div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text"><p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                        <div className="icon-box"></div>
                        <h4>How do I generate AI text-to-speech?</h4></div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text"><p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="accordion block">
                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                        <div className="icon-box"></div>
                        <h4>The best platform for listening to audiobooks depends on?</h4></div>
                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text"><p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};