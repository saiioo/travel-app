import React from 'react'
import './customer.css'

const Customer = () => {
  
  return (
    <div className='aboutpage-customer-div'>
      <p className='customer-message'>What customer’s are saying?</p>
      <p className='customer-desc'>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
      <div className='customer-nature-img'>
        <img className='cutomser-nature' src='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
        <img className='cutomser-nature' src='https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
        <img className='cutomser-nature' src='https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
        <img className='cutomser-nature' src='https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
      </div>
      <div className='customer-det '>
        <img className='customer-feedback-round-img' src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
        <p className='customer-praise'>“ Great place to spend your vacation while exploring different experiences. “</p>
      </div>
    </div>
  )
}

export default Customer