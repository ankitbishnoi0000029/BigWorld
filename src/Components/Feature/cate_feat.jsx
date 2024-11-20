import React from 'react'
import './Feature.css'
import { Data } from './Data'
function Cate_feat() {

  return (
    <div className='my_boxss'>
      {
        Data.faction.map((item, id) => {

          return (
            <div key={id}>
             <div style={{ backgroundColor: `${item.bg}` }} key={id} className='box-cer d-block'>
                <img className='cr1' height={50} src={item.img} alt={item.name} />
                 {/* Optionally display the name of the faction */}
              </div>
              <div className='d-name p-2'>{item.name}</div>
            </div>
          );
        })
      }
    </div>


  )
}

export default Cate_feat