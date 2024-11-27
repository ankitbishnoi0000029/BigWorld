import React from 'react';
import Ads from './Ads';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Files } from '../../assets/DATA/Adsdata';

function AdsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,  
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,  
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,   
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container d-flex py-3 container">
      <Slider {...settings}>
        {Files.Adsdata.map((item) => (
          <div key={item.id} className="ad-slide">
            <Ads item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdsSection;
