import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='package-form-main'>
      <div className='form-header'>
        <p className='form-overview'>OVERVIEW</p>
        <p className='amount-p'>Starting from <span className='amount'>₹50,999</span></p>
      </div>
      <div className='formpage-overview-div'>
        <div>
          <img className='maldives-beach' src='https://images.unsplash.com/photo-1589779678221-a58efe659ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'  alt='beach'/>
          <div className='maldives-overview-info'>
            <p className='package-overview'>Package Overview</p>
            <p className='package-desc'>Experience World-class Service at Kandima Maldives - Escape the ordinary Located on the largest island in Dhaalu Atoll, Kandima Maldives has the longest outdoor swimming pool in the Maldives, an abundance of water-sports, the largest beach club and tennis and basketball courts. It offers a marine biology centre, an art studio and cooking classes. Located at a 30-minute flight from Male’ and followed by a 20-minute boat ride to the island, the resort offers studios and villas with a private terrace and private pool. They offer endless tropical views. For fitness lovers, Kandima Maldives has a gym with personal trainers and provides classes like anti-gravity yoga, Zumba, aqua-bike classes and POUND® fitness lessons. Guests can hire bikes or electric scooters. Guests can choose among the 10 restaurants and bars the property offers. Sea Dragon serves authentic Chinese cuisine while Forbidden Bar plays live music in the night. Start the day at Aroma with fresh beverages and baked goods.

For total relaxation, choose from massages, facials and a range of Signature local treatments. The Kandima Kids Club is run by a multilingual team of certified child care-givers. We speak your language! Kandima Maldives - Escape the ordinary...</p>
          </div>
          
        </div>
        <div className='formpage-form-div'>
          <p className='holiday-p'>Want to Go For A Memorable Holiday?</p>
          <p className='formpage-2nd-p'>Provide Your Details to Know Best Holiday Deals</p>
          <form className='form-page-form'>
            <label className="ipt-label">Package Name</label>
            <input classNmae="formpage-inputs" type='text' placeholder='Package Name'/>
            <label className="ipt-label">City of Departure</label>
            <input classNmae="formpage-depat" type='text' placeholder='City of Departure'/>
            <label className="ipt-label">Date of Departure</label>
            <input classNmae="formpage-return" type='date' placeholder='Date of Departure'/>
            <p>Contact Details</p>
            <input classNmae="formpage-inputs" type='text' placeholder='name' />
            <input classNmae="formpage-inputs" type='email' placeholder='email' />
            <input classNmae="formpage-inputs" type='number' placeholder='mobile'/>
            <button className='formpage-sendquery'>send query</button>
            <p>Or</p>
            <button className='formpage-booknow'>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form