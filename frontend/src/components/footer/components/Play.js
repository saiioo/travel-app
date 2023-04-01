import React from 'react'
import './play.css'
import phone from '../../head/assets/phone.png'
import playstore from '../../head/assets/playstore.png'

const Play = () => {
  return (
    <div className='play-main-div'>
      <div className='play-left-div'>
        <p className='play-downlaod'>Download Our App</p>
        <p className='play-desc'>The best travel in the world</p>
        <div className='play-div'>
          <img className='play-icon' src={playstore} alt='img' />
          <div >
            <p className='play-geton'>GET IN ON</p>
            <p className='google-play'>Google Play</p>
          </div>
        </div>
        
      </div>
      <div className='play-main-right'>
        <div className='empty-play'>
        <img className='phone-img' src={phone} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Play