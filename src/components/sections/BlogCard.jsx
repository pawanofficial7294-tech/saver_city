import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <article className="blog-card">
      <div className="blog-img-wrap">
        <img src={blog.image} alt={blog.title} className="blog-img" loading="lazy" />
        <span className="blog-category">{blog.category}</span>
        <span className="blog-date-badge" aria-hidden="true">
          <Calendar size={12} /> {blog.date}
        </span>
      </div>
      <div className="blog-body">
        <h3 className="blog-title">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p className="blog-desc">{blog.shortDescription}</p>
        <Link to={`/blog/${blog.slug}`} className="blog-read-more">
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
