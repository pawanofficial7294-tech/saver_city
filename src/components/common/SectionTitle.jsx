import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'left',
  light = false,
  className = ''
}) => {
  return (
    <div className={`section-title section-title-${align} ${light ? 'section-title-light' : ''} ${className}`}>
      {subtitle && (
        <span className="section-subtitle">{subtitle}</span>
      )}
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
      <div className="section-divider" aria-hidden="true">
        <span className="divider-line" />
        <span className="divider-dot" />
        <span className="divider-line divider-line-short" />
      </div>
    </div>
  );
};

export default SectionTitle;
