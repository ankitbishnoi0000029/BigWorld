import f1 from '/Mens/f1.png'
import './cart.css'
import { useState } from 'react'
const Cart = () => {
const [count,setCount] = useState(1);
const decriment =() => {
    setCount(count-1);
}
const incriment =() => {
    setCount(count+1);
}

console.log(count);

    return (
        <>
            <div className='d-flex cart_box' >
                <div className="cart_image">
                    <img height={150} width={100} src={f1} alt="" />
                </div>
                <div className="cart_product_detail">
                    <nav>
                        OPPO K12x 5G with 45W SUPERVOOC Charger In-The-Box (Midnight Violet, 256 GB)
                    </nav>
                    <nav>
                        <span className='price_text' >Color : </span><span>Red</span>
                    </nav>
                    <nav>
                        <span className='price_text' >Size : </span><span>M</span>
                    </nav>
                    <nav>
                        <span className='price_text' >Price : </span>
                        <span className='rate'>₹ 1200/-</span>
                        <span className='rate-des'>₹ 12%/-</span>
                        <span className='or-rate' >₹ 22000/- </span>
                    </nav>
                    <nav className='last_box_cart'>
                        <div>
                            <span className='price_text' >Quntity : </span>
                            <button onClick={decriment} className='min'>-</button>
                            <input  value={count} className='cart_num' type="number" min={1} max={10} />
                            <button onClick={incriment} className='add'>+ </button>
                        </div>
                        <div>
                            <button  className='remove' >Remove</button>
                        </div>
                    </nav>
                </div>
                
            </div>
            
        </>
    )
}
export default Cart;