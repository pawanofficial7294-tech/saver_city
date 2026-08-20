import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import './PropertyGallery.css';

const PropertyGallery = ({ images, name }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setActiveIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="gallery-wrap">
      <div className="gallery-main" onClick={() => setLightboxOpen(true)}>
        <img src={images[activeIdx]} alt={`${name} - photo ${activeIdx + 1}`} className="gallery-main-img" loading="lazy" />
        <div className="gallery-zoom-hint"><ZoomIn size={18} /> Click to enlarge</div>
        {images.length > 1 && (
          <>
            <button className="gallery-nav gallery-nav-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
              <ChevronLeft size={22} />
            </button>
            <button className="gallery-nav gallery-nav-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
              <ChevronRight size={22} />
            </button>
          </>
        )}
        <div className="gallery-counter">{activeIdx + 1} / {images.length}</div>
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === activeIdx ? 'gallery-thumb-active' : ''}`}
              onClick={() => setActiveIdx(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={img} alt={`${name} thumbnail ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close gallery">
            <X size={24} />
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            <ChevronLeft size={30} />
          </button>
          <img
            src={images[activeIdx]}
            alt={`${name} photo ${activeIdx + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
