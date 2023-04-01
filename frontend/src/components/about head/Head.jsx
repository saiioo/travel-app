import React from 'react'
import './head.css'
import logo from '../head/assets/main.png'
import {Link} from "react-router-dom";

const Head = () => {
  return (
    <div className='about-head-page-main'>
            <div className='home-navbar'>
        <div className='home-logo-div'>
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className='home-head-navnar'>
          <p>Find Reservations</p>
          <Link to='/package'><p>Packages</p></Link>
          <p>About Lakshadweep</p>
          <Link to='/about' ><p>About Us</p></Link>
          <p>Gol</p>
          <p>Support</p>
          
        </div>
        <div className='home-head-navbar-button'>
          <Link to='/login'><button className='login-btn'>Login</button></Link>
          <Link to='signin'><button className='signin-btn'>Sign Up</button></Link>
        </div>
      </div>
      <div className='about-page-head-2nd-div'>
      <div className='aboutus-page-head-about-div'>
        <div className='purpose-1'>
        <div className='purpose-2'>
        <p className='about-head-aboutus'>About Us</p>
        </div>
        </div>
      </div>
      </div>
      <div className='aboutpage-head-last-div'>
        <p className='last-div-1st-p'>Our Team</p>
        <p className='last-div-2nd-p'>Quidam officiis similique sea ei, vel tollit indoctum 
            efficiendi ei, at nihil tantas platonem eos. </p>
      </div>
    </div>
  )
}

export default Head