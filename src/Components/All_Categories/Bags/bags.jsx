import React, { useEffect } from 'react'
import Card from '../../Popular_Products/card/Card'
import FactionFirst from '../Faction_cate/factionFirst'
import { Bag_data } from '../../../assets/DATA/Bags_data'
import { useDispatch, useSelector } from 'react-redux'
import { Range_data } from '../../../Redux/Actions/Action'
function Bags() {

  const getRengeValue = useSelector((state)=>state.cart.rangeValue)
  const filterd = Bag_data.data.filter((item)=> item.price <= getRengeValue)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(Range_data(0))
  },[])

    return (

        <div className='container py-3'>
      <div className="row">
        <div className='col-2' >
        <FactionFirst />
        </div>
        <div className="col-10 newdata_one">
          {
            (getRengeValue ?filterd :Bag_data.data ).map((item, id) => {
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

export default Bags