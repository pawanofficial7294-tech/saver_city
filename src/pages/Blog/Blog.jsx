import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from '../../components/common/Container';
import { blogs } from '../../data/blog';
import '../Projects/Projects.css';
import './Blog.css';

const Blog = () => {
  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <h1 className="page-banner-title">News & Insights</h1>
            <p className="page-banner-sub">Real estate trends, buyer guides, and market updates from our experts.</p>
          </div>
        </Container>
      </div>

      <section className="section-padding">
        <Container>
          {blogs.length === 0 ? (
            <div className="blog-empty">
              <h3>No articles yet</h3>
              <p>Check back soon for the latest real estate insights.</p>
            </div>
          ) : (
            <div className="blog-page-grid">
              {blogs.map(blog => (
                <article key={blog.id} className="blog-list-card">
                  <div className="blog-list-img-wrap">
                    <img src={blog.image} alt={blog.title} className="blog-list-img" loading="lazy" />
                    <span className="blog-category">{blog.category}</span>
                  </div>
                  <div className="blog-list-body">
                    <div className="blog-date"><Calendar size={13} /> {blog.date}</div>
                    <h2 className="blog-list-title">
                      <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    <p className="blog-list-desc">{blog.shortDescription}</p>
                    <Link to={`/blog/${blog.slug}`} className="btn btn-primary btn-sm">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Blog;
