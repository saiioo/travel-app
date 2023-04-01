import React from 'react'
import './foot.css'
import logo from '../../head/assets/logo2.png'
import facebook from '../../head/assets/facebook.png'
import twitter from '../../head/assets/twitter.png'
import linkedIn from '../../head/assets/linkedIn.png'

const Foot = () => {
  return (
    
    <div className='foot-main'>
      <div className='foot-1st-div'>
        <div className='foot-1st-1st'>
          <img className='foot-logo' src={logo} alt='logo' />
          <p className='foot-logo-desc'>Lorem Ipsum is simply dummy 
            text of the printing and type
            setting industry.</p>
            <div className='social-logos'>
              <img  className='social-logos-img' src={facebook} alt='logo'/>
              <img src={twitter} alt='logo' className='social-logos-img'  />
              <img src={linkedIn} alt='logo' className='social-logos-img'/>
            </div>
        </div>
        <div className='foot-company'>
          <p className='foot-point-heading'>Company</p>
          <p className='company-ponts'>Events</p>
          <p className='company-ponts'> Blogs</p>
          <p className='company-ponts'> FAQ's</p>
          <p className='company-ponts'> Join Us</p>
        </div>
        <div className='foot-About'>
          <p className='foot-point-heading'>About</p>
          <p className='company-ponts'>Project</p>
          <p className='company-ponts'> Lorem</p>
          <p className='company-ponts'> services</p>
          <p className='company-ponts'> Our Story</p>
        </div>
        <div className='foot-contact'>
          <p className='foot-point-heading'>Contact Us</p>
          <p className='company-ponts'>lorem@lorem.com</p>
          <p className='company-ponts'>India</p>
        </div>
      </div>
      <div className='foot-copy-div'>
      <hr/>
        <p className='foot-copyrights'>Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Foot