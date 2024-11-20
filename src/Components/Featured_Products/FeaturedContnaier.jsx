import React from 'react';
import Right_box from './Right_box';
import Card from '../Popular_Products/card/Card';
import { Data } from '../../DATA/Feature';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './feature.css'
import { FPdata } from '../../assets/DATA/Featured_Products_data';
function FeaturedContnaier() {
  console.log(FPdata.data);
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          borderRadius: 10,
          padding: "10px",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          borderRadius: 10,
          padding: "10px",
          cursor: "pointer",
        
        }}
        onClick={onClick}
      >
      </button>
    );
  }

  const MySlider = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4, // How many cards to show at once
    slidesToScroll: 3, // How many cards to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-3">
      <h3>Featured Products</h3>
      <div className='d-flex feature_container'>
      <div className="slider-container col-10">
        <Slider className='p-0 m-0' {...MySlider}>
          {
            FPdata.data.map((item, id) => (
              <div key={id} className="slider-item">
                <Card item={item} />
              </div>
            ))
          }
        </Slider>
      </div>
      <div className="col-2">
        <Right_box />
      </div>
      </div>
    </div>
  );
}

export default FeaturedContnaier;