import React from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import Card from '../../Popular_Products/card/Card'
import { Grocerie_data } from '../../../assets/DATA/Groceries_data'

function Groceries() {

    return (
        <div className='container py-3'>
            <div className="row">
                <div className='col-2' >
                    <FactionFirst />
                </div>
                <div className="col-10 newdata_one">
                    {
                        Grocerie_data.data.map((item, id) => {
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

export default Groceries