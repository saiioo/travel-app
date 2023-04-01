import React from 'react'
import './head.css'
import logo from './assets/main.png'
import vecotor from './assets/vectorrow.png'
import women from './assets/women.png'
import {Link} from 'react-router-dom'

const Head = () => {
  return (
    <div className='home-head-main'>
      <div className='home-navbar'>
        <div className='home-logo-div'>
          <img src={logo} alt="" />
        </div>
        <div className='home-head-navnar'>
          <p>Find Reservations</p>
          <Link className="linkstags" to='/package'><p>Packages</p></Link>
          <p>About Lakshadweep</p>
          <Link className="linkstags" to='/about'><p>About Us</p></Link>
          <p>Gol</p>
          <p>Support</p>
        </div>
        <div className='home-head-navbar-button'>
          <Link className="linkstags" to='/login'><button className='login-btn'>Login</button></Link>
          <Link className="linkstags" to='signin'><button className='signin-btn'>Sign Up</button></Link>
        </div>
      </div>
      <div className='home-head-2nd'>
        <div className='home-2nd-left'>
            <p className='visit-para'>VISIT <span><img className='visit-para-vector' src={vecotor} alt="" /></span></p>
            <p className='exotic'>The Exotic</p>
            <p className='home-lakhsadweep'>Lakshwadweep</p>
            <p className='islands'>Islands</p>
            <button className='hone-disc-btn'>Discover Now</button>
        </div>
        <div className='home-2nd-right'>
          <img src={women} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Head