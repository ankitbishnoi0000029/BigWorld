import React from 'react'
import './Faction.css'
import { Category } from '../../../assets/DATA/Category'
import Range from './Range';
import { NavLink } from 'react-router-dom';
function FactionFirst() {
    
    return (
        <div className='cate_outer'>
            <div>
                <div className="all-cate-data">
                <span className='cate_heading mx-3 fs-5 fw-bold'>Category</span>
               
                    {
                        Category.faction.map((item,id)=>{
                            return(
                                <nav key={id}>
                                    <img height={20} className='px-2' src={item.img} alt="" />
                                    {item.name}</nav>
                            )
                        })
                    }
                </div>
            </div>
            <Range></Range>
        </div>
    )
}
export default FactionFirst