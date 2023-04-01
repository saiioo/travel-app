import React from 'react'
import './footer.css'
import Play from './components/Play'
import Foot from './components/Foot'

const Footer = () => {
  return (
    <div className='footer-page'>
      <div className='footer-play-page'><Play /></div>
      <div className='footer-dead-cont'>
      <Foot />
      </div>
    </div>
  )
}


export default Footer