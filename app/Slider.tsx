"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

const animation = { duration: 5000, easing: (t: any) => t };

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: true,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide ">
        <img src="/images/photo1.jpg" alt="Photo 1" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo2.jpg" alt="Photo 2" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo3.jpg" alt="Photo 3" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo4.jpg" alt="Photo 4" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo5.jpg" alt="Photo 5" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo6.jpg" alt="Photo 6" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo7.jpg" alt="Photo 7" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo8.jpg" alt="Photo 8" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo9.jpg" alt="Photo 9" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo10.jpg" alt="Photo 10" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo11.jpg" alt="Photo 11" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo12.jpg" alt="Photo 12" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo13.jpg" alt="Photo 13" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo14.jpg" alt="Photo 14" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo15.jpg" alt="Photo 15" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo16.jpg" alt="Photo 16" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo17.jpg" alt="Photo 17" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo18.jpg" alt="Photo 18" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo19.jpg" alt="Photo 19" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo20.jpg" alt="Photo 20" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo21.jpg" alt="Photo 21" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo22.jpg" alt="Photo 22" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo23.jpg" alt="Photo 23" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo24.jpg" alt="Photo 24" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo25.jpg" alt="Photo 25" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo26.jpg" alt="Photo 26" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo27.jpg" alt="Photo 27" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/Photo100.jpg" alt="Photo 100" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo1.jpg" alt="Photo 1" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo2.jpg" alt="Photo 2" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo3.jpg" alt="Photo 3" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo4.jpg" alt="Photo 4" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo5.jpg" alt="Photo 5" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo6.jpg" alt="Photo 6" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo7.jpg" alt="Photo 7" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo8.jpg" alt="Photo 8" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo9.jpg" alt="Photo 9" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo10.jpg" alt="Photo 10" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo11.jpg" alt="Photo 11" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo12.jpg" alt="Photo 12" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo13.jpg" alt="Photo 13" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo14.jpg" alt="Photo 14" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo15.jpg" alt="Photo 15" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo16.jpg" alt="Photo 16" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo17.jpg" alt="Photo 17" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo18.jpg" alt="Photo 18" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo19.jpg" alt="Photo 19" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo20.jpg" alt="Photo 20" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo21.jpg" alt="Photo 21" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo22.jpg" alt="Photo 22" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo23.jpg" alt="Photo 23" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo24.jpg" alt="Photo 24" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo25.jpg" alt="Photo 25" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo26.jpg" alt="Photo 26" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/photo27.jpg" alt="Photo 27" />
      </div>
      <div className="keen-slider__slide ">
        <img src="/images/Photo100.jpg" alt="Photo 100" />
      </div>
    </div>
  );
};

export default Slider;
