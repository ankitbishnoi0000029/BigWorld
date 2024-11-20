import React from 'react'
import FactionFirst from './factionFirst'
import { Faction } from '../../../assets/DATA/FactionData'
import Card from '../../Popular_Products/card/Card';
import './Faction.css'
function Faction_section() {
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

export default Faction_section