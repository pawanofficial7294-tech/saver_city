import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { footerLinks, socialLinks } from '../../data/navigation';
import { CONTACT_INFO } from '../../utils/constants';
import Logo from '../common/Logo';
import SocialIcon from '../common/SocialIcon';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container-custom footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Savera City">
              <Logo variant="light" size="medium" />
            </Link>
            <p className="footer-description">
              Premier Land & Plot Selling company offering RERA approved residential and commercial plots (600, 1200, 1500, 1800, 3600 & 4800 sq.ft) with immediate registry, mutation & gated township amenities.
            </p>
            {/* Social */}
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" aria-label={social.platform} className="social-icon">
                  <SocialIcon name={social.iconName} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Projects</h4>
            <ul className="footer-links">
              {footerLinks.projects.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quick.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
            </address>
            <div className="footer-hours">
              <span className="footer-hours-label">Office Hours</span>
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-custom footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Savera City Real Estates. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/about" className="footer-bottom-link">Terms of Use</Link>
            <Link to="/contact" className="footer-bottom-link">Sitemap</Link>
          </div>
          <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
