import React from 'react'
import './rating.css'
import man1 from '../../head/assets/man1.png';
import man2 from '../../head/assets/man2.png';
import man3 from '../../head/assets/man3.png';

const Rating = () => {
  
  return (
    <div className='home-body-feedback-main'>
      <p className="feedback-heading">What Our Clients Says About Us</p>
      <div className='home-body-rating-container'>
        <div className='home-body-rate-pro'>
          <img alt="imageitem"className='rating-pro-img' src={man1}  />
          <p className='home-body-rating-name'>Roman Rey</p>
          <p className='home-body-rating-work'>Toranto, Canada</p>
          <p className='home-body-rating-desc'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Pellentesque efficitur ac quam 
            in congue. </p>
          <div className='home-body-rating-5star'>
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
          </div>
        </div>


        <div className='home-body-rate-pro'>
          <img alt="imageitem"className='rating-pro-img' src={man2}  />
          <p className='home-body-rating-name'>Alex Tom</p>
          <p className='home-body-rating-work'>Toranto, Canada</p>
          <p className='home-body-rating-desc'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Pellentesque efficitur ac quam 
            in congue. </p>
            <div className='home-body-rating-5star'>
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
          </div>
        </div>

        <div className='home-body-rate-pro'>
          <img alt="imageitem"className='rating-pro-img' src={man3}  />
          <p className='home-body-rating-name'>Finn Balor</p>
          <p className='home-body-rating-work'>Toranto, Canada</p>
          <p className='home-body-rating-desc'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Pellentesque efficitur ac quam 
            in congue. </p>
            <div className='home-body-rating-5star'>
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
            <img alt="imageitem"className='icon-5' src='https://cdn-icons-png.flaticon.com/512/786/786331.png' />
          </div>
        </div>
      </div>
      <div className='home-hero-balls'>
        <div className='white-ball'></div>
        <div className='green-ball'></div>
        <div className='white-ball'></div>
      </div>
    </div>
  )
}

export default Rating