import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import loginImg1 from '../../Assets/loginImg1.png';
import Footer from '../footer/Footer';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully");
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
      setError(error.message); // Set error message
    }
  };

  return (
    <div>
      <NavBar />
      <div className='formContainer'>
        <div className='loginPage'>
          <div className='loginImg'>
            <img src={loginImg1} alt='' />
          </div>
          <form onSubmit={handleSubmit} className='form'>
            <div className=''>
              <label htmlFor='email'>Email </label>
              <br />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter email' id='email' required />
            </div>
            <div>
              <label htmlFor='password'>Password </label>
              <br />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' id='password' required />
            </div>
            {error && <p className='error'>{error}</p>} {/* Display error message if exists */}
            <button type='submit' className='btn'>
              Login
            </button>
            <Link to='/signup'>
              <button type='button' className='btnSignUp'>
                SignUp
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
