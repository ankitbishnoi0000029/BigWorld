import { useState } from 'react';
import './PRoduct_detail.css';
import FeaturedContnaier from '../Featured_Products/FeaturedContnaier';
import { useLocation, useNavigate } from 'react-router-dom';
import f9 from '/Mens/f9.png';
import f3 from '/Mens/f3.png';
import f6 from '/Mens/f6.png';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Redux/Actions/Action';
import { Button, Snackbar } from '@mui/material';

function Product_Detail() {
  const location = useLocation();
  const { item } = location.state || {};
  const [largeImage, setLargeImage] = useState(item.img);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState(false)
  const time = () => {
    setTimeout(() => {
      setText(false)
    }, 2000);
  }

  if (!item) {
    return <div>Product not found.</div>;
  }

  const handleImageChange = (image) => {
    setLargeImage(image);
  };

  const handelBuy = () => {
    if (color && size) {
      const productDetails = {
        ...item,
        color,
        size,
      };
      dispatch(addtocart(productDetails));
      time();
      setText(true)
      // navigate('/Cart'); 
    } else {
      alert("Please select size and color before adding to cart.");
    }
  };
 

  return (
    <div className='container fs'>

      <div className='row py-4'>
        <div className="col-5">
          <div className="img_box_big">
            <img height={500} src={largeImage} alt="Product Detail" />
          </div>
        </div>
        <div className="col-7">
          <div className="heading_product_detail py-4">
            <h3>{item.pname} dolor sit amet consectetur adipisicing elit. Laborum, eius.</h3>
          </div>
          <div className='product_star py-2'>
            <span className='hd12b'>Ratings :</span> ***** (2 reviews)
          </div>
          <div className='product_dec'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro aperiam odio architecto rerum, explicabo cumque, dolorum sequi tempore maxime dolorem aut voluptatem iste consequuntur expedita assumenda aliquid illum necessitatibus?
            </p>
          </div>
          <div className='product_brand py-2'>
            <span className='hd12b'>Brand :</span> <span className='text-uppercase'>{item.brand}</span>
          </div>
          <div className='product_size py-2'>
            <nav>
              <span className="hd12b">Size:</span>
              <span
                onClick={() => setSize('S')}
                className={`product_size_box ${size === 'S' ? 'selected' : ''}`}
              >
                S
              </span>
              <span
                onClick={() => setSize('M')}
                className={`product_size_box ${size === 'M' ? 'selected' : ''}`}
              >
                M
              </span>
              <span
                onClick={() => setSize('L')}
                className={`product_size_box ${size === 'L' ? 'selected' : ''}`}
              >
                L
              </span>
              <span
                onClick={() => setSize('XL')}
                className={`product_size_box ${size === 'XL' ? 'selected' : ''}`}
              >
                XL
              </span>
            </nav>
          </div>
          <div className='product_size py-2'>
            <nav className='product_color'>
              <span className='hd12b'>Colors:</span>
              <span
                onClick={() => setColor('red')}
                className={`color-box red ${color === 'red' ? 'ColorSelected' : ''}`}
              ></span>
              <span
                onClick={() => setColor('green')}
                className={`color-box green ${color === 'green' ? 'ColorSelected' : ''}`}
              ></span>
              <span
                onClick={() => setColor('skyblue')}
                className={`color-box skyblue ${color === 'skyblue' ? 'ColorSelected' : ''}`}
              ></span>
              <span
                onClick={() => setColor('black')}
                className={`color-box black ${color === 'black' ? 'ColorSelected' : ''}`}
              ></span>
            </nav>
          </div>
          <div className='product_price py-2 d-flex text-success fs-4'>
            Price: ₹{item.price}/-
            <nav className='px-4 text-primary fs-5'> 10% off <strong className='text-danger text-line fs-6'>₹{item.price}/-</strong></nav>
          </div>
        </div>
        <div className='col-5'>
          <div className='p-4 d-flex justify-content-center'>
            <img
              onMouseEnter={() => handleImageChange(item.img)}
              className='mx-3'
              height={60}
              width={60}
              src={item.img}
              alt="Thumbnail 1"
            />
            <img
              onMouseEnter={() => handleImageChange(f3)}
              className='mx-3'
              height={60}
              width={60}
              src={f3}
              alt="Thumbnail 2"
            />
            <img
              onMouseEnter={() => handleImageChange(f9)}
              className='mx-3'
              height={60}
              width={60}
              src={item.img}
              alt="Thumbnail 3"
            />
            <img
              onMouseEnter={() => handleImageChange(f6)}
              className='mx-3'
              height={60}
              width={60}
              src={f6}
              alt="Thumbnail 4"
            />
          </div>
        </div>
        <div className='col-7 align-items-center d-flex justify-content-start'>
          <div className='prduct_btn_section'>
            <button className="btn btn-success">Buy Now</button>
            <button onClick={handelBuy} className="btn btn-primary">{text ? "Added" : "Add to cart"}</button>
          </div>
        </div>
      </div>
      <FeaturedContnaier />
    </div>
  );
}

export default Product_Detail;
