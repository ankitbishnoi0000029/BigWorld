import React, { useState } from 'react'
import FactionFirst from './factionFirst'
import { Faction } from '../../../assets/DATA/FactionData'
import Card from '../../Popular_Products/card/Card';
import './Faction.css'
import { useSelector } from 'react-redux';
function Faction_section() {
  const [newprice,setNewprice] = useState(false)
  const getRengeValue = useSelector((state)=>state.cart.rangeValue)
   const filterd = Faction.data.filter((item)=> item.price <= getRengeValue)
  return (
    <div className='container py-3'>
      <div className="row">
        <div className='col-2' >
        <FactionFirst />
        </div>
        <div className="col-10 newdata_one">
          {
           (getRengeValue ?filterd :Faction.data ).map((item, id) => {
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

export default Faction_section