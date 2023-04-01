// import React from 'react'
// import { Link } from 'react-router-dom';

// const Signin = () => {
//   return (
      
//     <div className='loginformpage-main-container'>
//     <form className='login-form' >
//       <h1 className='loginpage-heading'>
//         Register
//       </h1>
//       <div className='loginpage-form-fields'>
//       <label className='loginpage-labels'>
//         Email:
//       </label>
//       <input type="email"   />
//       <label className='loginpage-labels'>
//         Password:
//       </label>
//       <input type="password"  />
//       <label className='loginpage-labels'>
//         Confirm password:
//       </label>
//       <input type="password"  />
//       </div>
//       <div className='loginpage-login-button'>
//       <button className='button-86' >Register</button>
//       </div>
//       <span className='loginpagespan'>Have an account already ?<Link to='/login'>Login</Link></span>
//     </form>
//     </div>
//   )
// }

// export default Signin



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const history = useHistory();
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:3008/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Successfully registered');
        // history.push('/login');
        navigate('/login')
      } else {
        alert(data.msg);
      }
    } catch (err) {
      // console.error(err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="loginformpage-main-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h1 className="loginpage-heading">Register</h1>
        <div className="loginpage-form-fields">
          <label className="loginpage-labels">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label className="loginpage-labels">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="loginpage-labels">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label className="loginpage-labels">Confirm password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="loginpage-login-button">
          <button className="button-86">Register</button>
        </div>
        <span className="loginpagespan">
          Have an account already ?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signin;
