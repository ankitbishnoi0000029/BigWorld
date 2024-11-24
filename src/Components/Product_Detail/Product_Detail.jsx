import f1 from '/Mens/f1.png'
import './PRoduct_detail.css'
import FeaturedContnaier from '../Featured_Products/FeaturedContnaier'
import { useLocation } from 'react-router-dom';

function Product_Detail() {
  // Access the location object to get the passed state
  const location = useLocation();
  const { item } = location.state || {}; // Destructure `item` from state (if exists)

  if (!item) {
    return <div>Product not found.</div>; // Handling if no item is passed (edge case)
  }


  return (
    <div className='container fs'>
      <div className='row py-4'>

        <div className="col-5">
          <div className="img_box_big">
            <img height={500} src={item.img} alt="" />
          </div>
        </div>
        <div className="col-7 ">
          <div className="heading_product_detail py-4">
            <h3>
              {item.pname}  dolor sit amet consectetur adipisicing elit. Laborum, eius.
            </h3>
          </div>
          <div className='product_star py-2'>
            <span className='hd12b'>Ratings :</span> 
            *****(2 review)
          </div>
          <div className='product_dec'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro aperiam odio architecto rerum, explicabo cumque, dolorum sequi tempore maxime dolorem aut voluptatem iste consequuntur expedita assumenda aliquid illum necessitatibus?
            </p>
          </div>
          <div className='product_brand py-2'>
            <span className='hd12b'>Brand :</span> <span className='text-uppercase' >{item.brand}</span>
          </div>
          <div className='product_size py-3'>
            <nav>
              <span className='hd12b' >Size :</span>  <span className='product_size_box' >S</span> <span className='product_size_box' >M</span> <span className='product_size_box' >L</span> <span className='product_size_box' >XL</span>
            </nav>
          </div>
            <div className='product_size py-2'>
              <nav className='product_color'>
                <span className='hd12b' >Colors :</span> <span className='red' ></span> <span className='red bg-success' ></span> <span className='red bg-info' ></span> <span className='red bg-dark' ></span>
              </nav>
            </div>
          <div className='product_price py-2 d-flex text-success fs-4'>
            Price: {item.price}/- <nav className='px-4 text-primary fs-5'> 50% off <strong className='text-danger fs-6'>{item.price}/-</strong> </nav>
          </div>
        </div>


        <div className='col-5'>
          <div className='p-4 d-flex justify-content-center'>
            <img className='mx-3' height={60} width={60} src={f1} alt="" />
            <img className='mx-3' height={60} width={60} src={f1} alt="" />
            <img className='mx-3' height={60} width={60} src={f1} alt="" />
            <img className='mx-3' height={60} width={60} src={f1} alt="" />
          </div>
        </div>
        <div className='col-7 align-items-center d-flex justify-content-start' >
          <div className='prduct_btn_section'>
            <button className="btn btn-success">Buy Now</button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <FeaturedContnaier />
    </div>
  )
}


export default Product_Detail