import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Users } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import { IMAGES } from '../../data/images';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section-padding about-section" id="about-savera-city">
      <Container>
        <div className="about-grid">
          {/* Content Side */}
          <Reveal variant="left" className="about-content">
            <SectionTitle
              subtitle="Welcome to Savera City"
              title="Bakhtiyarpur Bihar India's Premier Land & Plot Developers"
              description="Savera City develops government-approved residential and commercial plot townships with 100% legal transparency and spot registry."
            />

            <p className="about-text">
              We specialize in offering clear-title plots in standardized sizes — <strong>600 sq.ft, 1,200 sq.ft, 1,500 sq.ft, 1,800 sq.ft, 3,600 sq.ft, and 4,800 sq.ft</strong> — complete with wide blacktop roads, underground utilities, boundary wall security, and high investment return potential.
            </p>

            <p className="about-text">
              Whether you are planning to build your family villa or looking for high-appreciation land investment in Patna, Ranchi, Gaya, or Muzaffarpur, Savera City provides seamless registry, spot possession, and full bank loan assistance.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span className="about-point-icon"><Award size={17} /></span>
                <span>Trusted land & plot township development established in 2026</span>
              </div>
              <div className="about-point">
                <span className="about-point-icon"><Users size={17} /></span>
                <span>5,000+ happy plot owners & satisfied land investors</span>
              </div>
              <div className="about-point">
                <span className="about-point-icon"><ShieldCheck size={17} /></span>
                <span>100% RERA-registered, spot registry & immediate mutation</span>
              </div>
            </div>

            <Link to="/about">
              <Button variant="primary" size="lg">
                Know More About Us <ArrowRight size={18} />
              </Button>
            </Link>
          </Reveal>

          {/* Image Side */}
          <Reveal variant="right" className="about-img-wrap">
            <div className="about-img-frame">
              <img
                src={IMAGES.about.main}
                alt="Architectural view of a premium Savera City residence"
                className="about-img"
                loading="lazy"
              />
            </div>

            <div className="about-img-overlay-frame">
              <img
                src={IMAGES.about.overlay}
                alt="Premium interior designed by Savera City"
                className="about-img-overlay"
                loading="lazy"
              />
            </div>

            <div className="about-exp-badge">
              <span className="exp-number">2026</span>
              <span className="exp-label">Established<br />Year</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
