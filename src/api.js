
import axios from 'axios';

const API = axios.create({
<<<<<<< HEAD
  baseURL: "https://tech-blog-backend-3.onrender.com", // Backend base URL
});

// Add token to every request if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
=======
  baseURL: 'http://localhost:5000',   // ← No '/api'—your routes live at /auth and /blogs
});

// Automatically attach bearer token if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Make sure your backend expects 'Authorization' header as 'Bearer <token>'
>>>>>>> 8b03500e21b4face8f18fbc2de90e06688191292
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
