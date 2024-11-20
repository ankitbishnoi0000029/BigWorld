import React from 'react'
import Card from '../../Popular_Products/card/Card'
import { Faction } from '../../../assets/DATA/FactionData'
import FactionFirst from '../Faction_cate/factionFirst'
function Bags() {
    
    return (
        <div className='container py-3'>
      <div className="row">
        <div className='col-2' >
        <FactionFirst />
        </div>
        <div className="col-10 newdata_one">
          {
            Faction.data.map((item, id) => {
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