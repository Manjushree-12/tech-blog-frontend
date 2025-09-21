import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  /*return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/new">New Blog</Link>
      </div>
      <div className="flex gap-4">
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );*/
};

export default Navbar;
