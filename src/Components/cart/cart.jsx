import f1 from '/Mens/f1.png';
import './cart.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Cart = () => {
    const [dis,setdis] = useState([])
  const cartItems = useSelector((state) => state.cart.cartItems || []);
console.log(cartItems[0].price);

  const decrement = (id) => {
    console.log(`Decrement item with id: ${id}`);
  };

  const increment = (id) => {
    console.log(`Increment item with id: ${id}`);
  };

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
  };
const discount = 1000-(1000*(10/100));
console.log(discount);

  return (
    <div>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems?.map((item) => (
          <div className="d-flex cart_box">
            <div className="cart_image">
              <img height={150} width={100} src={item.img || f1} alt={item.pname} />
            </div>
            <div className="cart_product_detail">
              <nav>
                <span>{item.pname} - {item.description}</span>
              </nav>
              <nav>
                <span className="price_text">Color: </span>
                <span>{item.color}</span>
              </nav>
              <nav>
                <span className="price_text">Size: </span>
                <span>{item.size}</span>
              </nav>
              <nav>
                <span className="price_text">Price: </span>
                <span className="rate">₹ {item.price * item.quantity}/-</span>
                <span className="rate-des">₹ {item.discount}% off</span>
                <span className="or-rate">₹ {item.originalPrice}/-</span>
              </nav>
              <nav className="last_box_cart">
                <div>
                  <span className="price_text">Quantity: </span>
                  <button
                    onClick={() => decrement(item.id)}
                    className="min"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <input
                    value={item.quantity}
                    className="cart_num"
                    type="number"
                    min={1}
                    max={10}
                    readOnly
                  />
                  <button
                    onClick={() => increment(item.id)}
                    className="add"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="remove"
                  >
                    Remove
                  </button>
                </div>
              </nav>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
