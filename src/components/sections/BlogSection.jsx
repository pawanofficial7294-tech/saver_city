import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import BlogCard from './BlogCard';
import { blogs } from '../../data/blog';
import './BlogSection.css';

const BlogSection = () => {
  const latestBlogs = blogs.slice(0, 6);

  return (
    <section className="section-padding blog-section" id="blog-news">
      <Container>
        <Reveal>
          <div className="blog-header">
            <SectionTitle
              subtitle="News & Insights"
              title="Latest from Our Blog"
              description="Stay informed with the latest real estate trends, legal updates, and buyer guides."
            />
            <Link to="/blog" className="btn btn-outline btn-md blog-view-all">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="blog-grid">
          {latestBlogs.map((blog, index) => (
            <Reveal key={blog.id} delay={(index % 3) * 110}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
