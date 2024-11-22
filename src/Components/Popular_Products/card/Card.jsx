import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const renderStars = (rating) => {
  const stars = [];
  const fullStar = '/Star/starfill.svg'; // Full star image path
  const halfStar = '/Star/starh.svg'; // Half star image path
  const emptyStar = '/Star/stare.svg'; // Empty star image path
  // Logic to display the correct number of stars
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<img key={i} src={fullStar} alt="star" style={{ width: '20px', height: '20px' }} />);
    } else if (i < rating) {
      stars.push(<img key={i} src={halfStar} alt="half star" style={{ width: '15px', height: '15px' }} />);
    } else {
      stars.push(<img key={i} src={emptyStar} alt="empty star" style={{ width: '15px', height: '15px' }} />);
    }
  }
  return stars;
};
function Card({ item }) {  
  return (
    <div className='card_outer p-0 col-lg-2 col-md-2 col-sm-6 mx-2' >
    <Link to={`/product/${item.id}`}>
      <div className='card-img ' >       
        <img key={item.id} src={item.img} alt={item.pname} />
      </div>
      <div className='card-body p-3'>
        <nav className='text-primary'>
          #{item.tag}
        </nav>
        <nav className='fw-bolder'>
          {item.pname}
        </nav>
        <nav className='d-flex'>
          <p className='d-flex align-items-center' >{renderStars(item.star)}</p>
        </nav>
        <nav>
          Brand: {item.brand}
        </nav>
        <nav className='pt-2 pb-2'>
          {/* Display dynamic price */}
          Price: <strong>{item.price} /-</strong>  {/* Assuming `item.price` exists */}
        </nav>
      </div>
      <nav className='hide_box'>
        <FontAwesomeIcon className='bg-icon' icon={faHeart} style={{ color: "#ea430b", }} size='lg' />
        <FontAwesomeIcon className='bg-icon' icon={faCartArrowDown} style={{ color: "#ed6307", }} size='lg' />
      </nav>
    </Link>
    </div>
  );
}
export default Card