import React from 'react'
import './body.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Island from './components/Island'
import Rating from './components/Rating'

const Body = () => {
  return (
    <>
      <div className='body-hed'>
      <Header />  
      <Hero />
      <Island />
      <Rating />
      </div>
    </>
  )
}

export default Body