import React from 'react'
import './login.css'
import { Icon } from '../header/Search/search'
import left from '/src/assets/logo/left.png'
function Login() {
  return (
    <div className='container py-3' >
     <div className="row login_main">
        <div className="col-6 login_section">
            <div className='right-box-login'>
                <div className='text_login'>
                    <h1>Stay home & get your daily <br />
                    needs from our shop</h1>
                    <h3>
                    Start You'r Daily Shopping with Nest Mart
                    </h3>
                </div>
                <div className='main_text'>
                      {Icon.send}
                    <input type="text"  placeholder='Enter Email here...'/>
                    <button>Subscrice</button>
                </div>
            </div>
        </div>
        <div className="col-6">
            <img height={340} src={left} alt="" />
        </div>
     </div>
    </div>
  )
}

export default Login