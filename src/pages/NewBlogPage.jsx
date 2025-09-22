// src/pages/NewBlogPage.jsx
import React, { useState, useEffect } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import './NewBlogPage.css';

export default function NewBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Example: get logged-in user ID or name from localStorage
    const userId = localStorage.getItem('token'); 
    if (userId) setAuthor(userId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/blogs/create', { title, content, author, imageUrl });
      alert('Blog created!');
      navigate('/dashboard'); // make sure this route exists
    } catch (error) {
      console.error(error);
      alert('Failed to create blog');
    }
  };

  return (
    <div className="new-blog-container">
      <form id="new-blog-form" onSubmit={handleSubmit}>
        <h2>Create New Blog Post</h2>

        <label htmlFor="title">Blog Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="author">Author ID</label>
        <input
          id="author"
          value={author}
          readOnly
        />

        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}


