
'use client'
import StorySlider1 from "@/components/slider/StorySlider1"
import Link from "next/link"
export default function Story() {
    return (
        <>
 <section className="story-section bg-color-1">
      <div className="auto-container">
        <div className="sec-title light mb_50">
          <span className="sub-title">Our Story</span>
          <h2>Learn More About <br /><span>Ticrou</span></h2>
        </div>
        <div className="story-content">
     
        <StorySlider1 /> 
    </div>
    </div>
            </section>
        </>
    )
}

