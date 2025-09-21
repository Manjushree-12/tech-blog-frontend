import React from 'react';
import './homeStyle.css';

const blogs = [
  {
    title: "AI Transforming Industries",
    author: "John Doe",
    readTime: "3 min read",
    shortDesc: "AI is revolutionizing industries with automation and intelligence...",
    fullContent: "AI full blog content goes here. Detailed explanation about how AI is reshaping manufacturing, healthcare, finance, and more sectors worldwide."
  },
  {
    title: "Cybersecurity in 2025",
    author: "Jane Smith",
    readTime: "4 min read",
    shortDesc: "Cyber threats are increasing, and the need for strong cybersecurity is vital...",
    fullContent: "Cybersecurity full blog content goes here. Exploring the latest challenges, best practices, and futuristic approaches to cyber protection."
  },
  {
    title: "Software Dev Trends",
    author: "Robert Lee",
    readTime: "2 min read",
    shortDesc: "New software development trends are changing how apps are built...",
    fullContent: "Software development trends full blog content goes here. Covering AI-assisted coding, low-code platforms, and new development methodologies."
  }
];

const HomeMain = () => {
  
  const openBlog = (blog) => {
    const query = new URLSearchParams({
      title: blog.title,
      author: blog.author,
      date: "April 26, 2025",
      content: blog.fullContent
    }).toString();
    
    window.location.href = `/blog-detail.html?${query}`;
  };

  return (
    <div>
      <h2 className="section-title">🚀 Trending Blogs</h2>
      <div className="blog-posts">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card" onClick={() => openBlog(blog)}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-author">👤 {blog.author} • {blog.readTime}</p>
            <p className="blog-desc">{blog.shortDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMain;
