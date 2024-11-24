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
    slidesToShow: 4,  // Display as many as available, up to 4
    slidesToScroll: 1,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,  // Large screens (e.g., desktops)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,   // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,   // Small screens (e.g., smartphones)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,   // Extra small screens (e.g., very small smartphones)
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
