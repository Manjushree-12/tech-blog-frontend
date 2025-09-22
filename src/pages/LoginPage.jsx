
import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import './authStyle.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api'
import './authStyle.css'

export default function LoginPage() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    API.post('/auth/login',{ email, password })
      .then(r=>{
        localStorage.setItem('token',r.data.token)
        navigate('/dashboard')
      })
      .catch(()=>alert('Login failed'))
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>

          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>
        </div>
        <button type="submit" className="login-btn">Login</button>


          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit" className="login-btn">Login</button>

        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>

  );
};

export default LoginPage;

  )
}
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
