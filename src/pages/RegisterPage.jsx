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

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
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
        <p className="register-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  )
}
