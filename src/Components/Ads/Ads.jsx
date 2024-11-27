import React from 'react'
import'./Ads.css'
function Ads({item}) {  
  return (
    <div className='col-2 add_img_box mx-2'>
        <img src={item.img} alt="" />
    </div>
  )
}

export default Ads