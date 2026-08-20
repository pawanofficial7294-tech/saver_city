import React, { useState } from 'react';
import { Plane, Navigation, Building, School, Hospital, ShieldCheck, MapPin, Maximize2, Layers } from 'lucide-react';
import map1 from '../../assets/map1.jpeg';
import map2 from '../../assets/map2.jpeg';
import './LocationConnectivitySection.css';

const locationLandmarks = [
  { icon: <Plane size={20} />, title: 'International Airport', distance: '12 Mins / 8.5 km' },
  { icon: <Navigation size={20} />, title: '60ft Highway Junction', distance: '3 Mins / 1.5 km' },
  { icon: <Building size={20} />, title: 'City Center & Malls', distance: '15 Mins / 10 km' },
  { icon: <School size={20} />, title: 'Top Schools & Colleges', distance: '5 Mins / 2.0 km' },
  { icon: <Hospital size={20} />, title: 'AIIMS & Super Hospital', distance: '8 Mins / 4.5 km' }
];

const LocationConnectivitySection = () => {
  const [activeMap, setActiveMap] = useState('map1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maps = [
    { id: 'map1', title: 'Savera City Location Map 1', src: map1 },
    { id: 'map2', title: 'Savera City Location Map 2', src: map2 }
  ];

  const currentMap = maps.find(m => m.id === activeMap) || maps[0];

  return (
    <section className="location-section" id="location-connectivity">
      <div className="container-custom">
        <div className="location-header text-center">
          <span className="badge badge-primary badge-pill">STRATEGIC TOWN LOCATION</span>
          <h2 className="location-title">LOCATION & CONNECTIVITY</h2>
          <p className="location-sub">
            Prime location with direct access to major highways, top schools, AIIMS hospital, and international airport.
          </p>
        </div>

        <div className="location-map-grid">
          {/* Map Display Box */}
          <div className="map-display-container">
            {/* Map Tabs Header */}
            <div className="map-tabs-bar">
              <div className="map-tabs-group">
                <button
                  type="button"
                  className={`map-tab-btn ${activeMap === 'map1' ? 'active' : ''}`}
                  onClick={() => setActiveMap('map1')}
                >
                  <MapPin size={15} /> Map View 1
                </button>
                <button
                  type="button"
                  className={`map-tab-btn ${activeMap === 'map2' ? 'active' : ''}`}
                  onClick={() => setActiveMap('map2')}
                >
                  <Layers size={15} /> Map View 2
                </button>
              </div>
              <button
                type="button"
                className="map-expand-btn"
                onClick={() => setIsModalOpen(true)}
                title="Expand Map"
              >
                <Maximize2 size={15} /> Enlarge Map
              </button>
            </div>

            {/* Map Image Box */}
            <div className="map-embed-box" onClick={() => setIsModalOpen(true)}>
              <img
                src={currentMap.src}
                alt={currentMap.title}
                className="map-image-display"
              />
              <div className="map-overlay-badge">
                <ShieldCheck size={16} /> Savera City Prime Township Location
              </div>
              <div className="map-hover-hint">
                <Maximize2 size={16} /> Click to Enlarge Map
              </div>
            </div>
          </div>

          {/* Landmarks Grid */}
          <div className="landmarks-cards-col">
            <h3 className="landmarks-title">Key Connectivity Highlights</h3>
            <div className="landmarks-list">
              {locationLandmarks.map((item, i) => (
                <div key={i} className="landmark-card">
                  <div className="landmark-icon-box">{item.icon}</div>
                  <div className="landmark-text">
                    <h4>{item.title}</h4>
                    <span className="landmark-dist">{item.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
    </section>
  );
};

export default LocationConnectivitySection;
