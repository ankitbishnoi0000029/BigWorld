import React from 'react'
import Cart from './cart'
import Price from './Price';

function CartSection() {
  return (
    <div className='container py-3'>
      <div className="row">
        <div className='col-8 dmasi'>
          <Cart></Cart>
          <div className='m23mdi'>
            <button className='nd23-23'>
                 PLACE ORDER
            </button>
          </div>
        </div>
      <div className='col-4'>
        <Price></Price>
      </div>
      </div>
    </div>
  )
}
export default CartSection;
