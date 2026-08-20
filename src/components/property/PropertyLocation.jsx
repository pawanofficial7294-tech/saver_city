import React, { useState } from 'react';
import { MapPin, GraduationCap, Hospital, ShoppingBag, Train, Plane, Maximize2, Layers } from 'lucide-react';
import map1 from '../../assets/map1.jpeg';
import map2 from '../../assets/map2.jpeg';
import './PropertyLocation.css';

const typeIconMap = {
  School: GraduationCap,
  Hospital: Hospital,
  Shopping: ShoppingBag,
  Transport: Train,
  Airport: Plane
};

const PropertyLocation = ({ location, nearbyPlaces }) => {
  const [activeMap, setActiveMap] = useState('map1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maps = [
    { id: 'map1', title: `${location} - Location Map 1`, src: map1 },
    { id: 'map2', title: `${location} - Location Map 2`, src: map2 }
  ];

  const currentMap = maps.find(m => m.id === activeMap) || maps[0];

  return (
    <div className="property-location">
      {/* Map Tabs Header */}
      <div className="pd-map-header">
        <div className="map-tabs-group">
          <button
            type="button"
            className={`map-tab-btn ${activeMap === 'map1' ? 'active' : ''}`}
            onClick={() => setActiveMap('map1')}
          >
            <MapPin size={14} /> Map View 1
          </button>
          <button
            type="button"
            className={`map-tab-btn ${activeMap === 'map2' ? 'active' : ''}`}
            onClick={() => setActiveMap('map2')}
          >
            <Layers size={14} /> Map View 2
          </button>
        </div>
        <button
          type="button"
          className="map-expand-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <Maximize2 size={14} /> Enlarge
        </button>
      </div>

      {/* Map Display Box */}
      <div className="map-placeholder map-img-box" onClick={() => setIsModalOpen(true)}>
        <img src={currentMap.src} alt={currentMap.title} className="property-map-img" />
        <div className="map-overlay-content">
          <MapPin size={28} className="map-pin-icon" />
          <p>{location}</p>
          <span className="btn btn-secondary btn-sm">
            <Maximize2 size={14} /> Enlarge Map
          </span>
        </div>
      </div>

      {/* Nearby Places */}
      {nearbyPlaces && nearbyPlaces.length > 0 && (
        <div className="nearby-places">
          <h4 className="nearby-title">Nearby Landmarks</h4>
          <div className="nearby-grid">
            {nearbyPlaces.map((place) => {
              const Icon = typeIconMap[place.type] || MapPin;
              return (
                <div key={place.name} className="nearby-item">
                  <div className="nearby-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="nearby-name">{place.name}</div>
                    <div className="nearby-distance">{place.distance} · {place.type}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Map Modal */}
      {isModalOpen && (
        <div className="map-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="map-modal-content" onClick={e => e.stopPropagation()}>
            <div className="map-modal-header">
              <h3>{currentMap.title}</h3>
              <div className="map-modal-actions">
                <div className="map-tabs-group">
                  <button
                    type="button"
                    className={`map-tab-btn ${activeMap === 'map1' ? 'active' : ''}`}
                    onClick={() => setActiveMap('map1')}
                  >
                    Map 1
                  </button>
                  <button
                    type="button"
                    className={`map-tab-btn ${activeMap === 'map2' ? 'active' : ''}`}
                    onClick={() => setActiveMap('map2')}
                  >
                    Map 2
                  </button>
                </div>
                <button className="map-modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
              </div>
            </div>
            <div className="map-modal-body">
              <img src={currentMap.src} alt={currentMap.title} className="map-modal-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyLocation;
