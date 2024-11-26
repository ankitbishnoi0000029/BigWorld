import React, { useState } from 'react';
import './slider.css'
import s1 from "/src/assets/Slider/s1.png"
import s2 from "/src/assets/Slider/s2.png"
import s3 from "/src/assets/Slider/s3.png"
import s4 from "/src/assets/Slider/s4.png"
import s5 from "/src/assets/Slider/s5.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider_box() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  fade:true,
  };
  return (
    <div className="slider-container py-3 container">
      <Slider {...settings}>
        <div>
          <img src={s5} />
        </div>
        <div>
        <img src={s2} />
        </div>
        <div>
        <img src={s1} />
        </div>
        <div>
        <img src={s4} />
        </div>
        <div>
        <img src={s3} />
        </div>
      </Slider>
    </div>
  );

}

export default Slider_box;
