import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, CheckCircle2, Target } from 'lucide-react';
import Container from '../../components/common/Container';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import StatsSection from '../../components/sections/StatsSection';
import CTASection from '../../components/sections/CTASection';
import './About.css';

const About = () => {
  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <h1 className="page-banner-title">About Savera City</h1>
            <p className="page-banner-sub">Building dreams and delivering trust in Bihar and Jharkhand since 2026.</p>
          </div>
        </Container>
      </div>

      <section className="section-padding about-page-intro">
        <Container>
          <div className="about-page-grid">
            <div className="about-page-img-col">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
                alt="Savera City corporate office"
                className="about-page-img"
                loading="lazy"
              />
            </div>
            <div className="about-page-text-col">
              <span className="about-page-label">Our Story</span>
              <h2 className="about-page-heading">From a Vision to a Legacy</h2>
              <p>Founded in 2026, Savera City Real Estates began with a simple but powerful vision: to deliver homes and commercial spaces that people can be proud of — built to last generations and delivered on time.</p>
              <p>Today, with over 25 completed projects and 1,500+ families living in our townships, we have grown into one of the most recognized real estate brands in Bihar and Jharkhand. Our work spans premium residential apartments, integrated townships, and state-of-the-art commercial complexes.</p>
              <p>Every brick we lay carries the weight of a family's trust. That responsibility drives us to maintain the highest standards of construction quality, design excellence, and customer service.</p>

              <div className="about-page-links">
                <Link to="/about/chairman" className="btn btn-primary btn-md">Chairperson's Message</Link>
                <Link to="/about/mission-vision" className="btn btn-outline btn-md">Mission & Vision</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsSection />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
};

export default About;
