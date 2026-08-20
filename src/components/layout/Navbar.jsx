import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Sun, Moon, Map } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { useApp } from '../../context/AppContext';
import { navLinks } from '../../data/navigation';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';
import './Navbar.css';

import Logo from '../common/Logo';

const Navbar = () => {
  const { scrolled } = useScroll(60);
  const { theme, toggleTheme, mobileMenuOpen, toggleMobileMenu, closeMobileMenu, openEnquiryModal, openLayoutMapModal } = useApp();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isOverlay = isHome && !scrolled;

  const handleEnquire = () => {
    if (!isHome) {
      navigate('/');
      setTimeout(openEnquiryModal, 450);
    } else {
      openEnquiryModal();
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className={`top-bar ${isOverlay ? 'top-bar-overlay' : ''}`}>
        <div className="container-custom top-bar-inner">
          <span className="top-bar-item">
            <Phone size={13} />
            <a href="tel:+919876543210">+91 98765 43210</a>
          </span>
          <span className="top-bar-item top-bar-tagline">
            Your Trusted Partner in Premium Land & Plot Selling
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isOverlay ? 'navbar-overlay' : ''}`}
        role="banner"
      >
        <div className="container-custom navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} aria-label="Savera City Home">
            <Logo variant={isOverlay ? 'light' : (theme === 'dark' ? 'light' : 'default')} size="medium" />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="nav-item"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={13} className="nav-chevron" />}
                </NavLink>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="nav-dropdown" role="menu">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="nav-dropdown-item"
                        onClick={() => setActiveDropdown(null)}
                        role="menuitem"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Map Button right beside Contact Us */}
            <div className="nav-item">
              <button
                type="button"
                className="nav-link nav-map-btn"
                onClick={openLayoutMapModal}
                title="View Layout Map"
              >
                <Map size={15} className="nav-map-icon" /> Map
              </button>
            </div>
          </nav>

          {/* CTA & Theme Switcher */}
          <div className="navbar-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? <Sun size={19} className="theme-icon sun" /> : <Moon size={19} className="theme-icon moon" />}
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={handleEnquire}
              id="enquire-now-cta"
            >
              Enquire Now
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Navbar;
