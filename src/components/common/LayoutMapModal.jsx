import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCw, RotateCcw, RefreshCw, Download, X, Map, Maximize2 } from 'lucide-react';
import mapImg from '../../assets/savera_city_layout_map.png';
import './LayoutMapModal.css';

const LayoutMapModal = ({ isOpen, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // Reset view when opening modal
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC key handler to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 4));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotateRight = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleRotateLeft = () => {
    setRotation(prev => (prev - 90 + 360) % 360);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse Wheel Zooming
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom(prev => Math.min(prev + 0.15, 4));
    } else {
      setZoom(prev => Math.max(prev - 0.15, 0.5));
    }
  };

  // Dragging / Panning
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Left click only
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="layout-map-modal-overlay" onClick={onClose}>
      <div className="layout-map-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="layout-map-header">
          <div className="layout-map-title-group">
            <Map className="layout-map-icon" size={20} />
            <div>
              <h2 className="layout-map-title">Savera City Master Layout Map</h2>
              <span className="layout-map-subtitle">Official Township Master Plan & Demarcation</span>
            </div>
          </div>

          <div className="layout-map-header-right">
            <a
              href={mapImg}
              download="Savera_City_Layout_Map.png"
              className="layout-map-btn layout-map-btn-download"
              title="Download High-Res Map"
            >
              <Download size={16} /> Download
            </a>
            <button
              className="layout-map-close-btn"
              onClick={onClose}
              title="Close Map (Esc)"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Map Viewport Area */}
        <div
          className={`layout-map-viewport ${isDragging ? 'is-dragging' : ''}`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="layout-map-img-wrapper"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            <img
              ref={imgRef}
              src={mapImg}
              alt="Savera City Layout Map"
              className="layout-map-img"
              draggable={false}
            />
          </div>

          {/* Hint Overlay */}
          <div className="layout-map-pan-hint">
            <span>Scroll mouse to zoom • Click &amp; drag to pan map</span>
          </div>
        </div>

        {/* Floating Controls Bar */}
        <div className="layout-map-controls-bar">
          {/* Zoom Controls */}
          <div className="layout-map-btn-group">
            <button
              type="button"
              className="layout-map-ctrl-btn"
              onClick={handleZoomIn}
              title="Zoom In (+)"
            >
              <ZoomIn size={18} />
            </button>
            <span className="layout-map-zoom-label">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              className="layout-map-ctrl-btn"
              onClick={handleZoomOut}
              title="Zoom Out (-)"
            >
              <ZoomOut size={18} />
            </button>
          </div>

          <div className="layout-map-divider" />

          {/* Rotate Controls */}
          <div className="layout-map-btn-group">
            <button
              type="button"
              className="layout-map-ctrl-btn"
              onClick={handleRotateLeft}
              title="Rotate Left (-90°)"
            >
              <RotateCcw size={18} />
            </button>
            <span className="layout-map-rotate-label">{rotation}°</span>
            <button
              type="button"
              className="layout-map-ctrl-btn"
              onClick={handleRotateRight}
              title="Rotate Right (+90°)"
            >
              <RotateCw size={18} />
            </button>
          </div>

          <div className="layout-map-divider" />

          {/* Reset Control */}
          <button
            type="button"
            className="layout-map-ctrl-btn layout-map-reset-btn"
            onClick={handleReset}
            title="Reset View (Zoom &amp; Rotation)"
          >
            <RefreshCw size={16} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutMapModal;
