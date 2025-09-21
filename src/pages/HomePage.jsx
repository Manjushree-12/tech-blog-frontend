<<<<<<< HEAD
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import navigate and location
import './homeStyle.css'; // Your common css

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To check current path

  // Function to check active tab
  const isActive = (path) => location.pathname === path;

  return (
    <div className="home-container">
      {/* Hero Section */}
=======
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import API from '../api'
import './homeStyle.css'

export default function HomePage() {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = path => location.pathname === path

  useEffect(() => {
    API.get('/blogs/top')
      .then(r => setBlogs(r.data))
      .catch(console.error)
  }, [])

  return (
    <div className="home-container">
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
      <header className="hero">
        <h1>Welcome to Tech Trends & Innovations</h1>
        <p>Stay ahead with the latest technologies and updates!</p>
      </header>
<<<<<<< HEAD

      {/* Navigation Buttons */}
      <div className="tabs">
        <button
          className={`tab-btn ${isActive('/') ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className={`tab-btn ${isActive('/login') ? 'active' : ''}`}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className={`tab-btn ${isActive('/register') ? 'active' : ''}`}
          onClick={() => navigate('/register')}
        >
          Register
        </button>
        <button
          className={`tab-btn ${isActive('/new') ? 'active' : ''}`}
          onClick={() => navigate('/new')}
        >
          New Blog
        </button>
        <button
          className={`tab-btn ${isActive('/dashboard') ? 'active' : ''}`}
          onClick={() => navigate('/dashboard')}
        >
          User Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
=======
      <div className="tabs">
        <button className={`tab-btn ${isActive('/')?'active':''}`} onClick={()=>navigate('/')}>Home</button>
        <button className={`tab-btn ${isActive('/login')?'active':''}`} onClick={()=>navigate('/login')}>Login</button>
        <button className={`tab-btn ${isActive('/register')?'active':''}`} onClick={()=>navigate('/register')}>Register</button>
      </div>
      <div className="tab-content">
        <h2 className="section-title"> Trending Blogs</h2>
        <div className="blog-posts">
          {blogs.map(b => (
            <div key={b._id} className="blog-card" onClick={()=>navigate(`/blog/${b._id}`)}>
              <h3 className="blog-title">{b.title}</h3>
              <p className="blog-desc">{b.content.slice(0,100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
