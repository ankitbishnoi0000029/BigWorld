import React, { useEffect, useState } from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import '../Faction_cate/Faction.css'
import Card from '../../Popular_Products/card/Card'
import { Elc_data } from '../../../assets/DATA/Elc_data'
import { useDispatch, useSelector } from 'react-redux'
import { Range_data } from '../../../Redux/Actions/Action'
function Electronics() {

  const getRengeValue = useSelector((state)=>state.cart.rangeValue)
  const filterd = Elc_data.data.filter((item)=> item.price <= getRengeValue)
  const dispatch = useDispatch()
  console.log("firstelc", getRengeValue)
  useEffect(()=>{
   dispatch(Range_data(0))
  },[])

  console.log("first", getRengeValue)
  
    return (
        <div className='container py-3'>
          <div className="row">
            <div className='col-2'>
            <FactionFirst />
            </div>
            <div className="col-10 newdata_one">
              {
                (getRengeValue ?filterd :Elc_data.data).map((item, id) => {
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

export default Electronics