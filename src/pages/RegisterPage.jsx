<<<<<<< HEAD
import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import './authStyle.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await API.post('/auth/register', { email, password, name });
      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };
=======
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api'
import './authStyle.css'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault()
    if (password !== confirm) return alert('Passwords do not match!')
    
    API.post('/auth/register', { name, email, password })
  .then((res) => {
  
    localStorage.setItem('token', res.data.user._id)
    localStorage.setItem('name', res.data.user.name)
    alert('Registered!')
    navigate('/login')
  })
  .catch(() => alert('Registration failed'))

  }
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
<<<<<<< HEAD
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <div className="password-field">
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? 'Hide' : 'Show'}</button>
          </div>
        </div>

        <button type="submit" className="login-btn">Register</button>

=======
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
        </div>
        <button type="submit" className="login-btn">Register</button>
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
        <p className="register-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
<<<<<<< HEAD
  );
};

export default RegisterPage;
=======
  )
}
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
