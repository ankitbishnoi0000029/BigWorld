import React from 'react'
import logo from '/src/assets/logo/logo.png'
import Seacend from './Seacend'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHome ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faReact,faStackOverflow } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
    <div className='footer_left px-3'>
        <div>
            <img width={160} height={80} src={logo} alt="" />
        </div>
        <nav className=' pb-3 all_p'>All Type Products are here </nav>
        <div className='detail_address'>
            <nav className='py-2 ' >
            
                <nav> <FontAwesomeIcon icon={faLocationDot} />Address :<span> 5171 W Campbell Ave undefined Kent, <br /> Utah 53127 United States</span></nav>
            </nav>
            <nav className='py-2'>
                <nav> Email :<span>  sale@Nest.com</span></nav>
            </nav>
            <nav className='py-2'>
                <nav> Phone :<span> 98765667238</span></nav>
            </nav>
            <nav className='py-2'>
                <nav> Open :<span> 24 Hours</span></nav>
            </nav>
           
        </div>
    </div>
    <Seacend></Seacend>
    <Seacend></Seacend>
    <Seacend></Seacend>
    <Seacend></Seacend>
    </>
  )
}

export default Footer