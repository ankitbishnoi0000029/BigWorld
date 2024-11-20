import React from 'react'
import Card from './card/Card'
import { PPdata } from '../../assets/DATA/Popular_products';

function Products() {
  return (
    <div className='container py-3'>
      <div>
        <h4>
          Popular Products
        </h4>
      </div>
      <div className='row d-flex '>
        {PPdata.data.map((item, id) => (
            <Card key={id + 2} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
