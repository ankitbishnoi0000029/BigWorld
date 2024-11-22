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
                <span className='cate_heading mx-3 fs-5 fw-bold'>Filter</span>
                <div>
                        <span>{range}</span>
                    <input step={1000} onChange={RenageHandles} className='range' type="range" min={100} max={100000} />
                </div>
                </div>
            </div>
  )
}

export default Range