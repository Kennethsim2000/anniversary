"use client";
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

const animation = { duration: 5000, easing: (t: any) => t }

const Slider = () =>  {
    const [sliderRef] = useKeenSlider({
        loop: true,
        drag: true,
        created(s) {
          s.moveToIdx(1, true, animation); // Start from the second image (index 1)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 1, true, animation); // Move to the next image on update
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 1, true, animation); // Move to the next image when animation ends
        },
      });
      
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
            <div className="keen-slider__slide ">
                <img src="/images/Photo1.jpg" alt="Photo 1" />
            </div>
        </div>
    )
}

export default Slider