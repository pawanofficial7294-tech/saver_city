import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Maximize2, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { useApp } from '../../context/AppContext';
import comingSoonImg from '../../assets/coming_soon.svg';
import './PropertyCard.css';

const PropertyCard = ({ project }) => {
  const { openEnquiryModal } = useApp();
  const { slug, name, images, location, type, configurations, status, shortDescription, price, totalLandArea } = project;

  const isComingSoon = location !== 'Bakhtiyarpur' || status === 'Upcoming Township' || status === 'Under Development' || images?.[0]?.includes('coming_soon');
  const displayImage = isComingSoon ? comingSoonImg : (images?.[0] || comingSoonImg);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = comingSoonImg;
  };

  return (
    <article className="property-card">
      {/* Image */}
      <div className="property-card-img-wrap">
        <img
          src={displayImage}
          alt={`${name} - ${type} in ${location}`}
          className="property-card-img"
          loading="lazy"
          onError={handleImgError}
        />
        <div className="property-card-badges">
          <span className={`badge-status ${location === 'Bakhtiyarpur' ? 'badge-active-loc' : 'badge-coming-loc'}`}>
            <MapPin size={11} /> {location === 'Bakhtiyarpur' ? 'Active in Bakhtiyarpur' : `Coming Soon in ${location}`}
          </span>
          <span className="badge-type">
            <ShieldCheck size={11} /> {type}
          </span>
        </div>
        <div className="property-card-price">{price}</div>
      </div>

      {/* Content */}
      <div className="property-card-body">
        <h3 className="property-card-name">{name}</h3>
        <div className="property-card-location">
          <MapPin size={13} className="loc-pin-icon" />
          <span className="loc-text">{location}</span>
          <span className={`location-status-pill ${location === 'Bakhtiyarpur' ? 'pill-active' : 'pill-coming-soon'}`}>
            {location === 'Bakhtiyarpur' ? '(Active Location)' : '(Coming Soon)'}
          </span>
          {totalLandArea && <span className="land-area-tag">• {totalLandArea}</span>}
        </div>

        {/* Plot Sizes Available */}
        <div className="property-card-plot-sizes-header">
          <Maximize2 size={12} /> Available Plot Sizes:
        </div>

        {configurations && configurations.length > 0 && (
          <div className="property-card-config">
            {configurations.map((c) => (
              <span key={c} className="config-chip plot-chip">{c}</span>
            ))}
          </div>
        )}

        {shortDescription && (
          <p className="property-card-desc">{shortDescription}</p>
        )}

        <div className="property-card-actions">
          <Link to={`/projects/${slug}`} className="btn btn-outline btn-sm" aria-label={`View ${name} plot details`}>
            Plot Details <ArrowRight size={14} />
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={() => openEnquiryModal(project)}
          >
            Enquire Plot
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
