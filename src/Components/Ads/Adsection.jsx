import React from 'react';
import Ads from './Ads';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Files } from '../../assets/DATA/Adsdata';
function Slider_box() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow:4, // Display as many as available, up to 4
    slidesToScroll: 1, // Scroll one slide at a time
    fade: false,
  };
  return (
    <div className="slider-container d-flex py-3 container">
      <Slider {...settings}><div className='d-flex' >
        {
          Files.Adsdata.map((item, id) => {
            return (
             <div key={id + 2}>
              <Ads item={item}  ></Ads>
             </div>
            )
          })
        }
      </div>
      </Slider>
    </div>
  );

}

export default Slider_box;
