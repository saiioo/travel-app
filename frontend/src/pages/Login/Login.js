// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './login.css'

// function Login() {
//   return (
//     <div className='loginformpage-main-container'>
//     <form className='login-form' >
//       <h1 className='loginpage-heading'>
//         Login
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
//       </div>
//       <div className='loginpage-login-button'>
//       <button className='button-86' >Login</button>
//       </div>
//       <span className='loginpagespan'>Not registerd ?<Link to='/signin'>SignUp</Link></span>
//     </form>
//     </div>
//   );
// }


// export default Login



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3008/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setEmail('');
        setPassword('');
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        const error = await response.json();
        alert(error.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='loginformpage-main-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h1 className='loginpage-heading'>Login</h1>
        <div className='loginpage-form-fields'>
          <label className='loginpage-labels'>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className='loginpage-labels'>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='loginpage-login-button'>
          <button className='button-86'>Login</button>
        </div>
        <span className='loginpagespan'>
          Not registered? <Link to='/signin'>SignUp</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
