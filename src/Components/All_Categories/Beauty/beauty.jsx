import React from 'react'
import FactionFirst from '../Faction_cate/factionFirst'
import  {Beauty_data}  from '../../../assets/DATA/Beauty'
import Card from '../../Popular_Products/card/Card'

function Beauty() {
      const filteredData = Beauty_data.data.filter(item => item.price >= 5000);
console.log(filteredData);
    return (
        <div className='container py-3'>
            <div className="row">
                <div className='col-2' >
                    <FactionFirst />
                </div>
                <div className="col-10 newdata_one">
                    {
                        Beauty_data.data.map((item, id) => {

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