import React from 'react'
import './card.css'
function Card({ item }) {
  return (
    <div className='card_outer p-0 col-lg-2 col-md-2 col-sm-6 mx-2 '>
      <div className='card-img ' >
        {/* Display image dynamically */}
        <img key={item.id} src={item.img} alt={item.pname} />
      </div>
      <div className='card-body p-3'>
        <nav className='text-primary'>
          #{item.tag}
        </nav>
        <nav className='fw-bolder'>
          {item.pname}
        </nav>
        <nav>
          *****
        </nav>
        <nav>
          Brand: {item.brand}
        </nav>
        <nav className='pt-2 pb-2'>
          {/* Display dynamic price */}
          Price: <strong>{item.price} /-</strong>  {/* Assuming `item.price` exists */}
        </nav>
      </div>
    </div>
  );
}
export default Card