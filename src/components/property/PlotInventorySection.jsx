import React, { useState } from 'react';
import { CheckCircle2, PhoneCall, Download, ShieldCheck, MapPin, RotateCw, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { IMAGES } from '../../data/images';
import { useApp } from '../../context/AppContext';
import Button from '../common/Button';
import './PlotInventorySection.css';

const plotInventoryData = [
  {
    id: 'sd600',
    code: 'SD',
    sqft: '600 sqft',
    dim: "20' × 30'",
    facing: "East Facing",
    status: 'AVAILABLE',
    statusClass: 'status-available',
    price: '₹9.00 Lakh',
    emiPrice: '₹9.60 Lakh',
    bookingAmt: '₹26,000 (100%) / ₹16,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹30,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Starter Compact Plot'
  },
  {
    id: 'sc1200',
    code: 'SC',
    sqft: '1200 sqft',
    dim: "30' × 40'",
    facing: "East Facing",
    status: 'AVAILABLE',
    statusClass: 'status-available',
    price: '₹18.00 Lakh',
    emiPrice: '₹19.20 Lakh',
    bookingAmt: '₹51,000 (100%) / ₹26,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹60,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Standard 3BHK Plot'
  },
  {
    id: 'sf1500',
    code: 'SF',
    sqft: '1500 sqft',
    dim: "30' × 50'",
    facing: "North Facing",
    status: 'BOOKED',
    statusClass: 'status-booked',
    price: '₹22.50 Lakh',
    emiPrice: '₹24.00 Lakh',
    bookingAmt: '₹61,000 (100%) / ₹31,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹75,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Premium Villa Plot'
  },
  {
    id: 'sb1800',
    code: 'SB',
    sqft: '1800 sqft',
    dim: "36' × 50'",
    facing: "East Facing",
    status: 'AVAILABLE',
    statusClass: 'status-available',
    price: '₹27.00 Lakh',
    emiPrice: '₹28.80 Lakh',
    bookingAmt: '₹76,000 (100%) / ₹36,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹90,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Deluxe Duplex Plot'
  },
  {
    id: 'se2400',
    code: 'SE',
    sqft: '2400 sqft',
    dim: "40' × 60'",
    facing: "East Corner",
    status: 'AVAILABLE',
    statusClass: 'status-available',
    price: '₹36.00 Lakh',
    emiPrice: '₹38.40 Lakh',
    bookingAmt: '₹1,01,000 (100%) / ₹51,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹1,20,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Commercial / Twin Plot'
  },
  {
    id: 'sa3600',
    code: 'SA',
    sqft: '3600 sqft',
    dim: "50' × 72'",
    facing: "North-East Corner",
    status: 'SOLD',
    statusClass: 'status-sold',
    price: '₹54.00 Lakh',
    emiPrice: '₹57.60 Lakh',
    bookingAmt: '₹1,51,000 (100%) / ₹76,000 (EMI)',
    rate: '₹1,500/sqft (Full) | ₹1,600/sqft (EMI)',
    emi: '₹1,80,000 / mo × 24 Mos',
    image: '/savera_city_price_chart.png',
    type: 'Executive Large Plot'
  }
];

const PlotInventorySection = () => {
  const { openEnquiryModal, openSiteVisitModal, openBrochureModal } = useApp();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activePoster, setActivePoster] = useState('map'); // 'map' | 'price'
  const [zoomedImage, setZoomedImage] = useState(null);

  // Rotation & Zoom states
  const [cardRotation, setCardRotation] = useState(90); // default 90deg for poster
  const [modalRotation, setModalRotation] = useState(90);
  const [modalZoom, setModalZoom] = useState(1);

  const handleRotateCard = (e) => {
    e.stopPropagation();
    setCardRotation(prev => (prev + 90) % 360);
  };

  const handleRotateModal = () => {
    setModalRotation(prev => (prev + 90) % 360);
  };

  const handleZoomIn = () => {
    setModalZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setModalZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetModal = () => {
    setModalRotation(90);
    setModalZoom(1);
  };

  const openImageModal = (imageSrc) => {
    setZoomedImage(imageSrc);
    setModalRotation(90);
    setModalZoom(1);
  };

  const filteredPlots = plotInventoryData.filter(plot => {
    if (activeFilter === 'ALL') return true;
    return plot.status === activeFilter;
  });

  return (
    <section className="plot-inventory-section" id="plot-inventory">
      <div className="container-custom">
        <div className="inventory-header text-center">
          <span className="badge badge-primary badge-pill">OFFICIAL RATE CHART & DISCOUNT OFFER</span>
          <h2 className="inventory-title">PLOT OPTIONS, BOOKING & EMI PLAN</h2>
          <p className="inventory-sub">
            Special ₹100 Off Offer: One Time 100% Full Payment @ <strong>₹1,500/sq.ft.</strong> | 24 Months Full EMI Plan @ <strong>₹1,600/sq.ft.</strong>
          </p>
          
          <div className="inventory-tabs">
            {['ALL', 'AVAILABLE', 'BOOKED', 'SOLD'].map(tab => (
              <button
                key={tab}
                className={`inventory-tab-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab} {tab !== 'ALL' ? `PLOTS` : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="inventory-layout-grid">
          {/* Left: Plot Inventory Cards */}
          <div className="inventory-cards-col">
            <div className="plot-cards-grid">
              {filteredPlots.map(plot => (
                <div key={plot.id} className="inventory-plot-card">
                  <div className="plot-card-img-wrap" onClick={() => openImageModal('/savera_city_layout_map.png')}>
                    <img src={plot.image} alt={`${plot.sqft} ${plot.dim} plot`} className="plot-card-img" />
                    <div className="plot-code-chip">{plot.code} • {plot.sqft}</div>
                    <span className={`plot-status-tag ${plot.statusClass}`}>{plot.status}</span>
                  </div>

                  <div className="plot-card-content">
                    <div className="plot-card-heading">
                      <h4>{plot.sqft} ({plot.dim})</h4>
                      <span className="plot-facing-tag"><MapPin size={12} /> {plot.facing}</span>
                    </div>

                    <div className="plot-price-row">
                      <div className="price-box-full">
                        <span className="price-lbl">Full Payment (₹1500/sqft):</span>
                        <span className="plot-total-price">{plot.price}</span>
                      </div>
                      <div className="price-box-emi">
                        <span className="price-lbl">EMI Plan (₹1600/sqft):</span>
                        <span className="plot-emi-val">{plot.emi}</span>
                      </div>
                    </div>

                    <div className="booking-chip">
                      <span>Booking: {plot.bookingAmt}</span>
                    </div>

                    <div className="plot-card-actions">
                      <button className="plot-btn plot-btn-plan" onClick={() => openBrochureModal()}>
                        View Official Chart
                      </button>

                      {plot.status === 'AVAILABLE' ? (
                        <button className="plot-btn plot-btn-book" onClick={() => openSiteVisitModal()}>
                          Book Plot Now
                        </button>
                      ) : (
                        <button className="plot-btn plot-btn-enquire" onClick={() => openEnquiryModal()}>
                          Request Price
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Official Price Chart & Layout Map Switcher */}
          <aside className="inventory-map-col">
            <div className="master-map-card">
              <div className="map-card-header">
                <div>
                  <h3>SAVERA CITY Documents</h3>
                  <div className="road-subtext">NH-30, Bakhtiyarpur Four Lane, Patna</div>
                </div>
                <span className="map-rera-tag"><ShieldCheck size={14} /> Approved</span>
              </div>

              {/* Toggle Switcher Tabs */}
              <div className="poster-toggle-tabs">
                <button
                  className={`poster-tab-btn ${activePoster === 'map' ? 'active' : ''}`}
                  onClick={() => setActivePoster('map')}
                >
                  Township Layout Map
                </button>
                <button
                  className={`poster-tab-btn ${activePoster === 'price' ? 'active' : ''}`}
                  onClick={() => setActivePoster('price')}
                >
                  Official Price Chart
                </button>
              </div>

              {/* Poster Display with Rotation Controls */}
              <div className="poster-view-container">
                <div
                  className="master-map-real-wrap"
                  onClick={() => openImageModal(activePoster === 'map' ? '/savera_city_layout_map.png' : '/savera_city_price_chart.png')}
                >
                  <img
                    src={activePoster === 'map' ? '/savera_city_layout_map.png' : '/savera_city_price_chart.png'}
                    alt={activePoster === 'map' ? 'SAVERA CITY Layout Map' : 'Official Price & EMI Chart'}
                    className="real-layout-poster-img"
                    style={{ transform: `rotate(${cardRotation}deg)`, transition: 'transform 0.3s ease' }}
                  />
                  <div className="map-hover-overlay">
                    <span>Click to Zoom & Rotate Image</span>
                  </div>
                  {activePoster === 'map' ? (
                    <div className="map-rate-badge">Layout Map</div>
                  ) : (
                    <div className="map-rate-badge">₹100 Off Offer</div>
                  )}
                </div>

                <div className="poster-card-controls">
                  <button className="rotate-card-btn" onClick={handleRotateCard}>
                    <RotateCw size={14} /> Rotate Image ({cardRotation}°)
                  </button>
                  <button className="expand-card-btn" onClick={() => openImageModal(activePoster === 'map' ? '/savera_city_layout_map.png' : '/savera_city_price_chart.png')}>
                    Click to Open Full View
                  </button>
                </div>
              </div>

              {/* Map/Chart Legend & Office Info */}
              <div className="map-legend price-legend">
                <div className="legend-item"><span className="dot dot-avail" /> Full Payment: ₹1,500/sqft</div>
                <div className="legend-item"><span className="dot dot-booked" /> EMI Plan: ₹1,600/sqft (24 Mos)</div>
              </div>
            </div>
          </aside>
        </div>

        {/* Full Image Modal View with Rotate & Zoom Tools */}
        {zoomedImage && (
          <div className="map-modal-overlay" onClick={() => setZoomedImage(null)}>
            <div className="map-modal-content" onClick={e => e.stopPropagation()}>
              {/* Modal Toolbar */}
              <div className="modal-toolbar">
                <div className="toolbar-left">
                  <button className="toolbar-btn" onClick={handleRotateModal} title="Rotate 90°">
                    <RotateCw size={18} /> Rotate ({modalRotation}°)
                  </button>
                  <button className="toolbar-btn" onClick={handleZoomIn} title="Zoom In">
                    <ZoomIn size={18} /> Zoom In ({Math.round(modalZoom * 100)}%)
                  </button>
                  <button className="toolbar-btn" onClick={handleZoomOut} title="Zoom Out">
                    <ZoomOut size={18} /> Zoom Out
                  </button>
                  <button className="toolbar-btn" onClick={handleResetModal} title="Reset View">
                    <RefreshCw size={18} /> Reset
                  </button>
                </div>
                <button className="map-modal-close" onClick={() => setZoomedImage(null)}>×</button>
              </div>

              <div className="modal-img-viewport">
                <img
                  src={zoomedImage}
                  alt="Official Document Poster"
                  className="map-modal-img"
                  style={{
                    transform: `rotate(${modalRotation}deg) scale(${modalZoom})`,
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="inventory-cta-banner">
          <div className="banner-left">
            <h3>Need Detailed Brochure & Site Map?</h3>
            <p>Call our land advisory team for instant layout map PDF and discount offer.</p>
          </div>
          <div className="banner-right">
            <a href="tel:+919876543210" className="banner-call-btn">
              <PhoneCall size={18} /> Call Now: +91 98765 43210
            </a>
            <Button variant="secondary" onClick={openBrochureModal} icon={<Download size={16} />}>
              Download Map PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotInventorySection;
