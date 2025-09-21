import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api'
import './Dashboard.css'

export default function Dashboard() {
  const [count, setCount] = useState(0)
  const [blogs, setBlogs] = useState([])
  const [author,setauthor] = useState(null); 
  const [isEditing, setIsEditing] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const navigate = useNavigate()
  const userId = localStorage.getItem('token')
  const userName = localStorage.getItem('name')

  useEffect(() => {
    if (!userId) return navigate('/login')
    API.get(`/blogs/user/${userId}/count`)
      .then((r) => setCount(r.data.count))
      .catch(console.error)
    API.get(`/blogs/user/${userId}`)
      .then((r) => setBlogs(r.data))
      .catch(console.error)
      
  }, [navigate, userId])

  const handleDelete = async (id, e) => {
    e.stopPropagation()
    try {
      await API.delete(`/blogs/${id}`)
      setBlogs(blogs.filter((b) => b._id !== id))
      setCount((prev) => prev - 1)
    } catch (err) {
      console.error('Error deleting blog:', err)
    }
  }

  const handleEdit = (blog, e) => {
    e.stopPropagation()
    setIsEditing(true)
    setEditingBlog({ ...blog })
  }

  const handleSave = async () => {
    if (!editingBlog) return

    try {
      const { data } = await API.put(`/blogs/${editingBlog._id}`, {
        title: editingBlog.title,
        content: editingBlog.content,
        imageUrl: editingBlog.imageUrl, // added imageUrl here
      })

      setBlogs((blogs) =>
        blogs.map((b) => (b._id === data.blog._id ? data.blog : b))
      )
      setIsEditing(false)
      setEditingBlog(null)
    } catch (err) {
      console.error('Error saving blog:', err)
    }
  }

  return (
    <>
      <header className="header">
        <h1>My Blog Dashboard</h1>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear()
            navigate('/')
          }}
        >
          Logout
        </button>
      </header>

      <div className="container">
        <div className="profile">
          <h2>User Info</h2>
          <p><strong>ID:</strong> {userId}</p>
          <p><strong>Name:</strong> {userName}</p>
        </div>

        <div className="dashboard">
          <div className="dashboard-header">
            <span className="blog-count">Blogs Posted: {count}</span>
            <button
              className="create-blog-btn"
              onClick={() => navigate('/new')}
            >
              Create Blog
            </button>
          </div>

          <div className="blogs">
            {blogs.map((b) => (
              <div
                key={b._id}
                className="blog-post"
                onClick={(e) => {
                  if (!isEditing) {
                    navigate(`/blog/${b._id}`)
                  }
                }}
              >
                {isEditing && editingBlog._id === b._id ? (
                  <div>
                    <input
                      type="text"
                      value={editingBlog.title}
                      onChange={(e) =>
                        setEditingBlog({ ...editingBlog, title: e.target.value })
                      }
                    />
                    <textarea
                      value={editingBlog.content}
                      onChange={(e) =>
                        setEditingBlog({ ...editingBlog, content: e.target.value })
                      }
                    />
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={editingBlog.imageUrl || ''}
                      onChange={(e) =>
                        setEditingBlog({ ...editingBlog, imageUrl: e.target.value })
                      }
                    />
                    <div className="actions">
                      <button className="save-btn" onClick={handleSave}>Save</button>
                      <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3>{b.title}</h3>
                    <small>Posted on: {new Date(b.createdAt).toLocaleDateString()}</small>
                    <p>{b.content.slice(0, 80)}...</p>
                    {b.imageUrl && (
                      <img 
                        src={b.imageUrl} 
                        alt="Blog" 
                        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginTop: '10px' }}
                      />
                    )}
                    <div className="actions">
                      <button className="edit-btn" onClick={(e) => handleEdit(b, e)}>Edit</button>
                      <button className="delete-btn" onClick={(e) => handleDelete(b._id, e)}>Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
