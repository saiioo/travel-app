import React from 'react'
import photo from '../../../components/head/assets/photo.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='home-hero-main-div'>
      <div className='home-hero-top-div'>
        <p className='top-div-heading'>Best Packages For You</p>
        <p className='top-div-desc'>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
        <div className='top-div-btn-container'>
          <button>Maldives</button>
          <button>Samudram</button>
          <button>Cordelia</button>
          <button>Agatti</button>
          <button>More</button>
        </div>
      </div>
      <div className='package-display-div'>
        <div className='package-box'>
          <img className='pkg-box-img' src={photo} alt="pic" />
          <div className='pkg-icon-div'>
            <span><img src='https://cdn-icons-png.flaticon.com/512/3177/3177361.png' className='icon' alt="pic" />Indonesia</span>
            <span><img src='https://cdn-icons-png.flaticon.com/512/929/929495.png' className='icon' alt="pic" />4.5</span>
          </div>
          <p className='pkg-desc-div'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
          <button className='pkg-btn-book'>Book Now</button>
        </div>
          <div className='package-box'>
            <img className='pkg-box-img' src={photo} alt="pic" />
            <div className='pkg-icon-div'>
              <span><img src='https://cdn-icons-png.flaticon.com/512/3177/3177361.png' className='icon' alt="pic" />Indonesia</span>
              <span><img src='https://cdn-icons-png.flaticon.com/512/929/929495.png' className='icon' alt="pic" />4.5</span>
            </div>
            <p className='pkg-desc-div'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
            <button className='pkg-btn-book'>Book Now</button>
          </div>
          <div className='package-box'>
            <img className='pkg-box-img' src={photo} alt="pic" />
            <div className='pkg-icon-div'>
              <span><img src='https://cdn-icons-png.flaticon.com/512/3177/3177361.png' className='icon' alt="pic" />Indonesia</span>
              <span><img src='https://cdn-icons-png.flaticon.com/512/929/929495.png' className='icon' alt="pic" />4.5</span>
            </div>
            <p className='pkg-desc-div'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
            <button className='pkg-btn-book'>Book Now</button>
          </div>
      </div>
      <div className='home-hero-balls'>
        <div className='white-ball'></div>
        <div className='green-ball'></div>
        <div className='white-ball'></div>
      </div>
      <button className='home-hero-last-btn'>Discover more</button>
    </div>
  )
}

export default Hero