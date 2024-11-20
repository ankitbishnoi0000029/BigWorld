import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo/logo.png'
import './top_header.css'
import { Icon } from './Search/search'
import { Link } from 'react-router-dom'
function Top_header() {
  const [scroll,setScroll] = useState(false)

    const hendleScroll = () =>{
      if(window.scrollY>0){
        setScroll(true);
      }else{
        setScroll(false)
      }
    }
    useEffect(()=>{
   window.addEventListener('scroll',hendleScroll);
    },[])
    return (
        <div className={`container-fluid d-flex main_toper_section ${scroll ? 'sticky': ''}`}>
            <div> <Link to="/">
                <img className='coman' height={60} width={120} src={logo} alt="" />
            </Link>
            </div>
           
            <div className='list_navbar col-4'>
                <ul>
                    <li>
                        <Link className='header_links' to="Faction">Faction</Link>
                        
                    </li>
                    <li>
                    Electronics
                    </li>
                    <li>
                        Bags
                    </li>
                    <li>
                        Footware
                    </li>
                    <li>
                        Groceries
                    </li>
                    <li>
                        beauty
                    </li>
                    <li>
                        Shop
                    </li>
                </ul>
             
            </div>
            <div className='search_box'>
            {Icon.Search}
                <input type="search" placeholder="Enter product name" ></input>
               
            </div>
            <div className='my-wish'>
                {Icon.Love}
                <nav className='coman'>Wishlist</nav>
            </div>
            <div className='my-wish'>
                {Icon.cart}
                <nav className='coman'>cart</nav>
            </div>
            <div className='my-wish'>
                {Icon.singin}
                <nav className='coman'>Sign In</nav>
            </div>
        </div>
    )
}

export default Top_header