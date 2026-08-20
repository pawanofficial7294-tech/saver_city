import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Trees, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Button from '../common/Button';
import './HeroSlide.css';

const HeroSlide = ({ slide, index, total, active }) => {
  const { openEnquiryModal, openSiteVisitModal } = useApp();

  const handleSecondary = () => {
    if (slide.ctaSecondary.action === 'siteVisit') {
      openSiteVisitModal();
    } else {
      openEnquiryModal();
    }
  };

  return (
    <div
      className={`hero-slide ${active ? 'hero-slide-active' : ''}`}
      aria-hidden={!active}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1} of ${total}`}
    >
      <div className="hero-slide-media">
        <img src={slide.image} alt="" className="hero-slide-img" aria-hidden="true" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container-custom hero-content">
        <div className="hero-badge-row">
          <span className="hero-eyebrow">{slide.eyebrow}</span>
          <span className="hero-rera-chip">RERA Approved • Gated Community • Spot Registry</span>
        </div>

        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-desc">{slide.description}</p>

        <div className="hero-cta">
          <Link
            to={slide.ctaPrimary.to}
            className="btn btn-secondary btn-lg hero-cta-primary"
            tabIndex={active ? 0 : -1}
          >
            {slide.ctaPrimary.label} <ArrowRight size={18} />
          </Link>
          <Button
            variant="outline-light"
            size="lg"
            onClick={handleSecondary}
            tabIndex={active ? 0 : -1}
          >
            {slide.ctaSecondary.label}
          </Button>
        </div>

        {/* KEY HIGHLIGHTS BAR matching user image */}
        <div className="hero-highlights-bar">
          <span className="highlights-bar-title">KEY HIGHLIGHTS:</span>
          <div className="highlights-chips">
            <span className="hl-chip"><MapPin size={14} /> Strategic Location</span>
            <span className="hl-chip"><ShieldCheck size={14} /> 24/7 Security</span>
            <span className="hl-chip"><Trees size={14} /> Parks & Green Spaces</span>
            <span className="hl-chip"><Zap size={14} /> Electricity & Water Supply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
