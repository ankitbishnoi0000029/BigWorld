import React, { useState } from 'react'
import './Range.css'
function Range() {
  const [range,setRange] = useState(1000);
const RenageHandles=(e)=>{
  setRange(e.target.value)
}
  return (
        <div>      
                <div className="all-cate-data my-2">
                <span className='cate_heading mx-3 fs-5 fw-bold'>Price</span>
                <div className='range_box' >                       
                   <span>{range}</span>
                    <input step={1000} onChange={RenageHandles} className='range' type="range" min={99} max={10099} />
                    <div>
                    <span className='min-max'>Min 100</span>
                    <span className='right-max'>Max 10900</span>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Range