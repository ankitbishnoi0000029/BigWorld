import React from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import { Elc_data } from '../../../assets/DATA/ele_data'
import '../Faction_cate/Faction.css'
import Card from '../../Popular_Products/card/Card'
function Electronics() {
    return (
        <div className='container py-3'>
          <div className="row">
            <div className='col-2' >
            <FactionFirst />
            </div>
            <div className="col-10 newdata_one">
              {
                Elc_data.data.map((item, id) => {
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