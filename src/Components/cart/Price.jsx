import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Price() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const [newprice,setNewprice] = useState()
    const [dicprice,setDicprice] = useState()
     const data = cartItems.map((item) => (
        item.price * item.quantity
    ))
   
    const sum = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      const dis = sum-(sum*(10/100))
      useEffect(()=>{
setNewprice(sum)
setDicprice(dis)
      },[data])
     
     
    return (
        <div className='price_box'>
            <div>
                <div className="top">
                    <h3>Price details</h3>
                </div>
                <div className='mqie-324'>
                    <nav className='pd-12'>
                        Price ({cartItems.length} items)
                    </nav>
                    <nav>
                        {sum}
                    </nav>
                </div>
                <div className='mqie-324'>
                    <nav  className='pd-12' >
                        Discount
                    </nav>
                    <nav className=' text-success'>
                        − ₹{sum-dicprice}
                    </nav>
                </div>
                <div className='mqie-324'>
                    <nav  className='pd-12'>
                        Delivery Charges
                    </nav>
                    <nav>
                        ₹80
                    </nav>
                </div>
                <div className='mqie-324'>
                    <nav  className='pd-12'>
                        Secured Packaging Fee
                    </nav>
                    <nav>
                        ₹118
                    </nav>
                </div>
                <div className='mqie-324 box-ewmd'>
                    <nav  className='pd-12 total-23e'>
                        Total Amount
                    </nav>
                    <nav className='total-23e'>
                        ₹{dicprice+80+118}
                    </nav>
                </div>
                <div className='daew34'>
                        You will save ₹{sum-dicprice} on this order
                </div>

            </div>
        </div>
    )
}

export default Price