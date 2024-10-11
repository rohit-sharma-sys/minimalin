// BlogComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from './blogData';

function BlogComponent() {
  return (
    <div className="blog-page container-with">
      <div className="sidebar">
        {/* Sidebar Content */}
        <div className="search-box">
          <input type="text" placeholder="Search our store" />
          <button>Search</button>
        </div>

        <div className="recent-posts">
          <h3>Recent Posts</h3>
          {blogs.slice(0, 3).map((blog) => (
            <div className="recent-post" key={blog.id}>
                <div className='d-flex-blog'>
              <Link to={`/blog/${blog.id}`}>
              <div>
                <img src={blog.imageUrl} alt={blog.title} /></div>
                <div>
                <p>{blog.title}</p>
              <span>{blog.date}</span>
              </div>

              </Link>
              
              </div>
              <hr className='hr-line' />
            </div>
          ))}
        </div>

        <div className="tags">
          <h3>Tags</h3>
          <div className="tag-list">
            <span>Accessories</span>
            <span>Dress</span>
            <span>Fashion</span>
            <span>Men</span>
            <span>Women</span>
            <span>Spring</span>
            <span>Winter</span>
          </div>
        </div>
        <hr className='hr-line' />

        <div className="social-icons">
          <h3>Never Miss News</h3>
          <div>
            <a href="#">FB</a> <a href="#">TW</a> <a href="#">IG</a> <a href="#">YT</a>
          </div>
        </div>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.imageUrl} alt={blog.title} />
            <div className="blog-details">
              <Link to={`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.comments} comments </span>
              </div>
              <p>{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogComponent;
