import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, ChevronRight, Sun, Moon, Map } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useApp } from '../../context/AppContext';
import Logo from '../common/Logo';
import Button from '../common/Button';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, openEnquiryModal, openSiteVisitModal, openLayoutMapModal } = useApp();

  const handleEnquire = () => {
    onClose();
    openEnquiryModal();
  };

  const handleSiteVisit = () => {
    onClose();
    openSiteVisitModal();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="mobile-backdrop" onClick={onClose} aria-hidden="true" />
      )}

      {/* Drawer */}
      <div
        className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-logo" onClick={onClose}>
            <Logo size="small" variant={theme === 'dark' ? 'light' : 'default'} />
          </Link>

          <div className="mobile-header-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button className="mobile-close-btn" onClick={onClose} aria-label="Close navigation">
              <X size={22} />
            </button>
          </div>
        </div>

        <nav className="mobile-nav" role="navigation">
          {navLinks.map((link) => (
            <div key={link.path} className="mobile-nav-group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                }
                end={link.path === '/'}
                onClick={!link.dropdown ? onClose : undefined}
              >
                {link.label}
                {link.dropdown && <ChevronRight size={16} />}
              </NavLink>

              {link.dropdown && (
                <div className="mobile-nav-sub">
                  {link.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="mobile-nav-sublink"
                      onClick={onClose}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-link mobile-map-nav-btn"
              onClick={() => {
                onClose();
                openLayoutMapModal();
              }}
            >
              <Map size={16} /> Layout Map
            </button>
          </div>
        </nav>

        <div className="mobile-menu-cta">
          <Button variant="primary" fullWidth onClick={handleEnquire}>
            Enquire Now
          </Button>
          <Button variant="outline" fullWidth onClick={handleSiteVisit}>
            Book Site Visit
          </Button>
        </div>

        <div className="mobile-menu-contact">
          <a href="tel:+919876543210" className="mobile-contact-link">
            <Phone size={15} /> +91 98765 43210
          </a>
          <a href="mailto:info@saveracity.com" className="mobile-contact-link">
            <Mail size={15} /> info@saveracity.com
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
