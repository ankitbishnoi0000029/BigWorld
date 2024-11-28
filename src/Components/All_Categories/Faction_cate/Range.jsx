import React, { useState } from 'react'
import './Range.css'
import { useDispatch } from 'react-redux';
import { click, Range_data} from '../../../Redux/Actions/Action';
function Range() {
  const [range, setRange] = useState(); 
  const [myclick,setClick] = useState(false)
    const dispatch = useDispatch()
  const RenageHandles = (e) => {
    setRange(e.target.value)
    setClick(true)
    dispatch(Range_data(e.target.value))
    dispatch(click(myclick))
  }
  return (
    <div>
      <div data={RenageHandles} className="all-cate-data my-2">
        <span className='cate_heading mx-3 fs-5 fw-bold'>Price</span>
        <div className='range_box' >
          <span>{range}</span>
          <input step={200} onChange={RenageHandles} className='range' type="range" min={1000} max={100000} />
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