// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://tech-blog-backend-3.onrender.com/', // Your backend base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Automatically attach token if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

