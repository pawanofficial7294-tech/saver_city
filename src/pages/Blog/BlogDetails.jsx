import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import Container from '../../components/common/Container';
import CTASection from '../../components/sections/CTASection';
import { blogs } from '../../data/blog';
import '../Projects/Projects.css';
import './BlogDetails.css';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <main style={{ padding: '6rem 0', textAlign: 'center' }}>
        <Container>
          <h1>Article Not Found</h1>
          <p style={{ marginBottom: '1.5rem' }}>This article does not exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary btn-md">Back to Blog</Link>
        </Container>
      </main>
    );
  }

  const related = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <Link to="/blog" className="pd-back-link"><ArrowLeft size={16} /> All Articles</Link>
            <h1 className="page-banner-title" style={{ maxWidth: 700 }}>{blog.title}</h1>
            <div className="blog-detail-meta">
              <span><Calendar size={14} /> {blog.date}</span>
              <span><Tag size={14} /> {blog.category}</span>
            </div>
          </div>
        </Container>
      </div>

      <section className="section-padding">
        <Container>
          <div className="blog-detail-layout">
            <article className="blog-detail-main">
              <img src={blog.image} alt={blog.title} className="blog-detail-hero-img" loading="lazy" />
              <div
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            <aside className="blog-detail-sidebar">
              <div className="blog-sidebar-card">
                <h3 className="blog-sidebar-title">Related Articles</h3>
                <div className="related-articles">
                  {related.map(r => (
                    <Link to={`/blog/${r.slug}`} key={r.id} className="related-article-item">
                      <img src={r.image} alt={r.title} className="related-img" loading="lazy" />
                      <div>
                        <div className="related-category">{r.category}</div>
                        <div className="related-title">{r.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
};

export default BlogDetails;
