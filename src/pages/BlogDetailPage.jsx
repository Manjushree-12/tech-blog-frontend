
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await API.get(`/blog/${id}`);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api'
import './BlogDetailPage.css'

export default function BlogDetailPage() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    API.get(`/blogs/${id}`)
      .then(r => setBlog(r.data))
      .catch(console.error)
  }, [id])

  if (!blog) return <div>Loading…</div>

  return (
    <form>
      <div className="p-6">
        
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <small>By: {blog.author}</small>
        <p className="mt-4">{blog.content}</p>
        {blog.imageUrl && (
          <img
  src={blog.imageUrl}
  alt="Blog Cover"
  style={{
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }}
/>

        )}
      </div>
    </form>
  )
}

