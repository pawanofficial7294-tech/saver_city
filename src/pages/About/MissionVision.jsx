import React from 'react';
import { Target, Eye, CheckCircle2, Heart, Users, Leaf } from 'lucide-react';
import Container from '../../components/common/Container';
import CTASection from '../../components/sections/CTASection';
import SectionTitle from '../../components/common/SectionTitle';
import '../Projects/Projects.css';
import './About.extra.css';

const values = [
  { icon: <CheckCircle2 size={18} />, title: 'Integrity', desc: 'Honest and transparent in every transaction.' },
  { icon: <Heart size={18} />, title: 'Customer First', desc: 'Every decision prioritizes the buyer\'s interest.' },
  { icon: <Users size={18} />, title: 'Community', desc: 'Building communities that thrive together.' },
  { icon: <Leaf size={18} />, title: 'Sustainability', desc: 'Eco-conscious construction for future generations.' },
];

const MissionVision = () => (
  <main>
    <div className="page-banner">
      <div className="page-banner-bg" />
      <Container>
        <div className="page-banner-content">
          <h1 className="page-banner-title">Mission & Vision</h1>
          <p className="page-banner-sub">The purpose and long-term direction that drives everything we do.</p>
        </div>
      </Container>
    </div>

    <section className="section-padding">
      <Container>
        <div className="mv-grid">
          <div className="mv-card mv-card-mission">
            <Target size={36} className="mv-card-icon" />
            <div className="mv-card-label">Our Mission</div>
            <h2 className="mv-card-title">What We Do Every Day</h2>
            <p className="mv-card-text">
              To develop premium, RERA-compliant residential and commercial spaces that enrich the lives 
              of our customers through quality construction, transparency, and exceptional after-sales service — 
              delivered on time, every time.
            </p>
          </div>
          <div className="mv-card mv-card-vision">
            <Eye size={36} className="mv-card-icon" />
            <div className="mv-card-label">Our Vision</div>
            <h2 className="mv-card-title">Where We're Headed</h2>
            <p className="mv-card-text">
              To become the most trusted and innovative real estate group across Bakhtiyarpur, Bihar, India, 
              creating landmark properties that stand as testaments to craftsmanship, 
              sustainability, and the aspirations of millions of families.
            </p>
          </div>
        </div>

        <SectionTitle subtitle="Values" title="Our Core Values" align="center" />
        <div className="values-grid">
          {values.map(v => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <CTASection />
  </main>
);

export default MissionVision;
