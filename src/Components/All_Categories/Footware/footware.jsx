import React, { useEffect, useState } from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import Card from '../../Popular_Products/card/Card'
import { Footware_data } from '../../../assets/DATA/Footware_data'
import { useDispatch, useSelector } from 'react-redux'
import { Range_data,min,max } from '../../../Redux/Actions/Action'

function Footware() {
  const getRengeValue = useSelector((state)=>state.cart.rangeValue)
  const filterd = Footware_data.data.filter((item)=> item.price <= getRengeValue)
  const dispatch = useDispatch()
  // get min and max value 
  
  const Pvalue = Footware_data.data.map((item)=>item.price)
  const minmume = Math.min(...Pvalue)
  const maximum = Math.max(...Pvalue)

  useEffect(()=>{
   dispatch(Range_data(0))
   dispatch(min(minmume))
   dispatch(max(maximum))
  },[])

 


    return (
        <div className='container py-3'>
      <div className="row">
        <div className='col-2' >
        <FactionFirst />
        </div>
        <div className="col-10 newdata_one">
          {
            (getRengeValue ? filterd : Footware_data.data).map((item, id) => {
              return (
                <Card key={id + 4} item={item}>{item.pname} </Card>
              )
            })
          }
          </div>
        </div>
    </div>
    )
}

export default Footware