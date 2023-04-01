import React from 'react'
import './header.css'

const Header = () => {
  
  return (
    <div className='home-body-header'>
      <div className='home-body-header-1st'>
      <p className='flights-p'>Where are you flying? </p>
      </div>
      <div className='home-body-header-2nd'>
          <label>
            From:          
            <select>
              <option>Hyderabad</option>
            </select>
          </label>
          <label>
            To:          
            <select>
              <option>Kolkata</option>
            </select>
          </label>
          <label>
            Trip:          
            <select>
              <option>One way</option>
            </select>
          </label>
          <label>
            Departure:          
            <input type='date' />
          </label>
          <label>
            return:          
            <input type='date' />
          </label>
          <label>
            Passengers:          
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>            
            </select>
          </label>
          <label>
            Class:          
            <select>
              <option>Executive</option>
              <option>Bussiness</option>
            </select>
          </label>

      </div>
      <div className='home-body-header-3rd'>
        <p className='flights-btn'>+ Add Promo Code<button className='show-flights-btn'>Show Filghts</button></p>
      </div>
    </div>
  )
}

export default Header