import React from 'react'
import'./Ads.css'
function Ads({item}) {  
  return (
    <div className='col-2 add_img_box mx-2'>
      {/* <div className="add_img_box"> */}
        <img src={item.img} alt="" />
      {/* </div> */}
    </div>
  )
}

export default Ads