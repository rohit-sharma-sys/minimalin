// SingleBlogPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from './blogData';

function SingleBlogPage() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className="single-blog-page">
      {/* Blog Header Section */}
      <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      <h1>{blog.title}</h1>
      <div className="blog-meta">
        <span>by: {blog.author}</span> | <span>{blog.date}</span> | <span>{blog.comments} comments</span>
      </div>

      {/* Blog Content */}
      <p>{blog.content}</p>

      {/* Quote Section */}
      <blockquote>{blog.quote}</blockquote>

      {/* Blog Footer Section */}
      <div className="blog-footer">
        {/* Tags Section */}
        <div className="tags">
          <h4>Tags</h4>
          <div className="tag-list">
            {blog.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="share-section">
          <h4>Share This Post</h4>
          <div className="social-icons">
            <a href="#">FB</a> <a href="#">TW</a> <a href="#">IG</a>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="post-navigation">
        {blog.previousPost && (
          <Link to={`/blog/${blog.previousPost.id}`} className="prev-post">
            Prev Post: {blog.previousPost.title}
          </Link>
        )}
        {blog.nextPost && (
          <Link to={`/blog/${blog.nextPost.id}`} className="next-post">
            Next Post: {blog.nextPost.title}
          </Link>
        )}
      </div>

      {/* Comment Form */}
      <div className="comment-section">
        <h4>Post Comment</h4>
        <form className='blog-form'>
          <textarea placeholder="Message"></textarea>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
}

export default SingleBlogPage;
