import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for routing
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();  // Hook to navigate
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Navigate to the New Blog page
  const handleCreateBlog = () => {
    navigate("/new");
  };

  const handleLogout = () => {
    navigate("/");
  }
  return (
    <>
      <header className="header">
        <h1>My Blog Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="container">
        <div className="profile">
          <img src="https://via.placeholder.com/100" alt="Profile" />
          <h2>Jane Doe</h2>
          <p>jane@example.com</p>
          <p>Member since: Jan 2022</p>
          <button className="edit-btn">Edit Profile</button>
        </div>

        <div className="dashboard">
          <div className="dashboard-header">
            <span className="blog-count">Blogs Posted: 3</span>
            <button className="create-blog-btn" onClick={handleCreateBlog}>  {/* Update here */}
              Create Blog
            </button>
          </div>

          <div className="blogs">
            <div className="blog-post">
              <h3>My First Blog</h3>
              <small>Posted on: 2025-04-25</small>
              <p>This is a short description of my first blog post...</p>
            </div>

            <div className="blog-post">
              <h3>Learning HTML and CSS</h3>
              <small>Posted on: 2025-04-20</small>
              <p>Sharing my journey of learning web development basics...</p>
            </div>

            <div className="blog-post">
              <h3>Top 5 Coding Tips</h3>
              <small>Posted on: 2025-04-18</small>
              <p>These coding tips helped me a lot, hope they help you too...</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Create New Blog</h2>
            <input type="text" placeholder="Blog Title" />
            <textarea rows="5" placeholder="Blog Content"></textarea>
            <button className="submit-blog-btn">Post Blog</button>
          </div>
        </div>
      )}
    </>
  );
}
