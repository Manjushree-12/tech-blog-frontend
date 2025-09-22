// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import './authStyle.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const res = await API.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.user._id);
      localStorage.setItem('name', res.data.user.name);
      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <div className="password-field">
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" className="login-btn">Register</button>
        <p className="register-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
}

