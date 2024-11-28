import React, { useEffect } from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import  {Beauty_data}  from '../../../assets/DATA/Beauty'
import Card from '../../Popular_Products/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { Range_data } from '../../../Redux/Actions/Action'

function Beauty() {
    const getRengeValue = useSelector((state)=>state.cart.rangeValue)
    const filterd = Beauty_data.data.filter((item)=> item.price <= getRengeValue)
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
                       (getRengeValue ?filterd :Beauty_data.data ).map((item, id) => {

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

export default Beauty