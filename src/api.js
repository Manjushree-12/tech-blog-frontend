
import axios from 'axios';

const API = axios.create({
  baseURL: "https://tech-blog-backend-3.onrender.com", // Backend base URL
});

// Add token to every request if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
