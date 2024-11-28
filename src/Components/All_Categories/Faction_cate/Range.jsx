import React, { useState } from 'react'
import './Range.css'
import { useDispatch, useSelector } from 'react-redux';
import { click, Range_data} from '../../../Redux/Actions/Action';
function Range() {
  const [range, setRange] = useState(); 
  const [myclick,setClick] = useState(false)
const minimume = useSelector((state)=>state.cart.min)
const maximume = useSelector((state)=>state.cart.max)
console.log(minimume,maximume,"this is minmume value get on redux");

    const dispatch = useDispatch()
  const RenageHandles = (e) => {
    setRange(e.target.value)
    dispatch(Range_data(e.target.value))
    dispatch(click(myclick))
  }
  
  return (
    <div>
      <div data={RenageHandles} className="all-cate-data my-2">
        <span className='cate_heading mx-3 fs-5 fw-bold'>Price</span>
        <div className='range_box' >
          <span>{range}</span>
          <input step={100} onChange={RenageHandles} className='range' type="range" min={minimume} max={maximume} />
          <div>
            <span className='min-max'>Min {minimume}</span>
            <span className='right-max'>Max {maximume}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Range
