import React from 'react';
import { ShieldCheck, Trees, Home, Zap, Smile, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../data/images';
import './AmenitiesGallerySection.css';

const amenityItems = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Gated Community (24x7 Security)',
    desc: 'Grand entrance arch with guarded security post, CCTV camera surveillance, and boundary wall.'
  },
  {
    icon: <Trees size={24} />,
    title: 'Landscaped Gardens & Parks',
    desc: 'Dedicated open green parks, fruit orchard trees, gazebo sitting areas, and jogging track.'
  },
  {
    icon: <Home size={24} />,
    title: 'Clubhouse & Community Center',
    desc: 'Exclusive multi-purpose community hall for society events, indoor games, and indoor gym.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Paved Roads & Street Lights',
    desc: '60ft & 40ft wide blacktop roads with LED solar street lamps and underground electrification.'
  },
  {
    icon: <Smile size={24} />,
    title: 'Kids Play Zone',
    desc: 'Safe children playground equipment, slide swings, and soft lawn area.'
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Water & Sewerage Grid',
    desc: 'Underground stormwater drainage system, piped water supply, and rainwater harvesting pits.'
  }
];

const galleryPhotos = [
  { title: 'Grand Entry Gate', img: IMAGES.amenities.gatedSecurity },
  { title: 'Township Central Park', img: IMAGES.amenities.landscapePark },
  { title: '60ft Paved Blacktop Roads', img: IMAGES.amenities.pavedRoads },
  { title: 'Community Clubhouse', img: IMAGES.amenities.clubhouse },
  { title: 'Kids Play Zone', img: IMAGES.amenities.kidsPlay },
  { title: 'Drainage & Utility Grid', img: IMAGES.amenities.powerWater }
];

const AmenitiesGallerySection = () => {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = '/plot_demarcation.png';
  };

  return (
    <section className="amenities-gallery-section" id="amenities-gallery">
      <div className="container-custom">
        <div className="ag-header text-center">
          <span className="badge badge-primary badge-pill">LIFESTYLE & INFRASTRUCTURE</span>
          <h2 className="ag-title">AMENITIES & GALLERY</h2>
          <p className="ag-sub">
            Experience complete township living with premier modern amenities, 24x7 security, and open green belts.
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="ag-amenities-grid">
          {amenityItems.map((item, index) => (
            <div key={index} className="ag-amenity-card">
              <div className="ag-icon-wrap">{item.icon}</div>
              <div className="ag-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="ag-gallery-wrapper">
          <h3 className="ag-gallery-title">Real Township Development Photos</h3>
          <div className="ag-photos-grid">
            {galleryPhotos.map((photo, idx) => (
              <div key={idx} className="ag-photo-item">
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="ag-photo-img"
                  loading="lazy"
                  onError={handleImgError}
                />
                <div className="ag-photo-overlay">
                  <span>{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallerySection;
