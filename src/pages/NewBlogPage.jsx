
// src/pages/NewBlogPage.jsx
import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import './NewBlogPage.css'; // Import your CSS here

const NewBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/blog/create', { title, content, author });
      alert('Blog Created!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to create blog.');
    }
  };

import React, { useState, useEffect } from 'react'
import API from '../api'
import { useNavigate } from 'react-router-dom'
import './NewBlogPage.css'

export default function NewBlogPage() {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [author,setAuthor] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const userId = localStorage.getItem('token') // or maybe 'userId'
    if(userId) setAuthor(userId)
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    API.post('/blogs/create',{ title, content, author, imageUrl })
      .then(()=>{
        alert('Blog created!')
        navigate('/dashboard')  // ensure route case is correct
      })
      .catch(()=>{
        alert('Failed to create')
      })
  }


  return (
    <div className="new-blog-container">
      <form id="new-blog-form" onSubmit={handleSubmit}>
        <h2>Create New Blog Post</h2>

        <br />
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <br /><br />
        <label htmlFor="author">Author Name</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default NewBlogPage;

        <label htmlFor="title">Blog Title</label>
        <input id="title" value={title} onChange={e=>setTitle(e.target.value)} required/>
        
        <label htmlFor="content">Content</label>
        <textarea id="content" rows="8" value={content} onChange={e=>setContent(e.target.value)} required/>
        
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        <label htmlFor="author">Author ID</label>
        <input id="author" value={author} readOnly/>
        
        <button type="submit">Post Blog</button>
      </form>
    </div>
  )
}

