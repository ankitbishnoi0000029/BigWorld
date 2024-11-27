import f1 from '/Mens/f1.png';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removetocart, incrementQuantity, decrementQuantity } from '../../Redux/Actions/Action';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const decrement = (id) => {
    dispatch(decrementQuantity(id));  
  };
  const increment = (id) => {
    dispatch(incrementQuantity(id));
  };

  const dic = 1000-(1000*(10/100))
console.log(dic);

  return (
    <>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems?.map((item) => (
          <div key={item.id} className="d-flex cart_box">
            <div className="cart_image">
              <img height={150} width={100} src={item.img || f1} alt={item.pname} />
            </div>
            <div className="cart_product_detail">
              <nav>
                <span className='fs-4'>{item.pname} - {item.description}</span>
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
                <span className="rate">₹{`${(item.price - (item.price * (10 / 100))) * item.quantity}`}
                /-</span>
                <span className="rate-des">₹ 10% off</span>
                <span className="or-rate">₹ {item.price}/-</span>
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
                    onClick={() => dispatch(removetocart(item.id))}
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
    </>
  );
};

export default Cart;
