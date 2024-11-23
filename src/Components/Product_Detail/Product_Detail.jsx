import f1 from '/Mens/f1.png'
import './PRoduct_detail.css'
import FeaturedContnaier from '../Featured_Products/FeaturedContnaier'

function Product_Detail({ item }) {
  console.log(item);


  return (
    <div className='container fs'>
      <div className='row py-4'>

        <div className="col-5">
          <div className="img_box_big">
            <img height={500} src={f1} alt="" />
          </div>
        </div>
        <div className="col-7 ">
          <div className="heading_product_detail py-4">
            <h3>
              VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women | Ethnic Kurta Set for Women (set of 1) (5XL)
            </h3>
          </div>
          <div className='product_star py-2'>
            <span className='hd12b'>Ratings :</span> *****(2 review)
            *****(2 review)
          </div>
          <div className='product_dec'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro aperiam odio architecto rerum, explicabo cumque, dolorum sequi tempore maxime dolorem aut voluptatem iste consequuntur expedita assumenda aliquid illum necessitatibus?
            </p>
          </div>
          <div className='product_brand py-2'>
            <span className='hd12b'>Brand :</span> <span>Apple</span>
          </div>
          <div className='product_size py-3'>
            <nav>
              <span className='hd12b' >Size :</span>  <span className='product_size_box' >S</span> <span className='product_size_box' >M</span> <span className='product_size_box' >L</span> <span className='product_size_box' >XL</span>
            </nav>
            <div className='product_size py-3'>
              <nav className='product_color py-3'>
                <span className='hd12b' >Colors :</span> <span className='red' ></span> <span className='red bg-success' ></span> <span className='red bg-info' ></span> <span className='red bg-dark' ></span>
              </nav>
            </div>
            <div className='product_size'>
              <nav className='product_color '>
                <span className='hd12b' >Price : </span> <span className='price' > 7000/-</span> <span className='px-2'>50%</span><span className='discount'>14000/-</span>               </nav>
            </div>
          </div>

          Brand : <strong>Apple</strong>
        </div>
        <div className='product_price py-2 d-flex text-success fs-4'>
          Price: 4000/- <nav className='px-4 text-primary fs-5'> 50% off <strong className='text-danger fs-6'>7000/-</strong> </nav>
        </div>
        <div className='product_size py-3'>
          <nav>
            SIZE : <span>S</span> <span>M</span> <span>L</span>
          </nav>
          <nav className='product_color py-3'>
            color <span>Red</span> <span>Blue</span> <span>Green</span>
          </nav>
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
      <div className='col-7 align-items-center d-flex justify-content-star' >
        <div className='prduct_btn_section'>

        </div>
      </div>
      <div className='col-7 align-items-center d-flex justify-content-start' >
        <div className='prduct_btn_section'>
          <button className="btn btn-success">Buy Now</button>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
      <FeaturedContnaier />
    </div>
  )
}


export default Product_Detail