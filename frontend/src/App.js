



import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Package from'./pages/package/Package'
import Login from './pages/Login/Login';
import Signin from './pages/signin/Signin';

const App = () => {
  return (
    <div className='main-bg'>
      <BrowserRouter >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/package'  element={<Package/>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/signin' element={<Signin />} />
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App