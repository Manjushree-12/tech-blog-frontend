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
      <header className="hero">
        <h1>Welcome to Tech Trends & Innovations</h1>
        <p>Stay ahead with the latest technologies and updates!</p>
      </header>

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
