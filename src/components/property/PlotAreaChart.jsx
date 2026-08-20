import React from 'react';
import './PlotAreaChart.css';

export const OFFICIAL_PLOT_TYPES = [
  { code: 'SA', dimension: "50' × 72'", sqft: 3600, badgeBg: '#1B5E20', textColor: '#FFFFFF', category: 'Executive Large Plot' },
  { code: 'SB', dimension: "36' × 50'", sqft: 1800, badgeBg: '#880E4F', textColor: '#FFFFFF', category: 'Deluxe Duplex Plot' },
  { code: 'SC', dimension: "30' × 40'", sqft: 1200, badgeBg: '#1565C0', textColor: '#FFFFFF', category: 'Standard 3BHK Plot' },
  { code: 'SD', dimension: "20' × 30'", sqft: 600,  badgeBg: '#2E7D32', textColor: '#FFFFFF', category: 'Starter Compact Plot' },
  { code: 'SE', dimension: "40' × 60'", sqft: 2400, badgeBg: '#C62828', textColor: '#FFEB3B', category: 'Commercial / Twin Plot' },
  { code: 'SF', dimension: "30' × 50'", sqft: 1500, badgeBg: '#AD1457', textColor: '#FFFFFF', category: 'Premium Villa Plot' }
];

const PlotAreaChart = ({ onSelectPlot, activeCode }) => {
  return (
    <div className="plot-paper-chart-card">
      <div className="plot-paper-header">
        <div className="rate-badge-group">
          <span className="rate-badge-old"><strike>₹1,700</strike></span>
          <span className="rate-badge-discount">₹100 Off Offer</span>
          <span className="rate-badge-primary">@ ₹1,500/sq.ft. (100% One-Time)</span>
          <span className="rate-badge-secondary">@ ₹1,600/sq.ft. (EMI Plan)</span>
        </div>
        <h3 className="plot-paper-title">PLOT AREA & SIZE</h3>
        <span className="plot-paper-sub">OFFICIAL TOWNSHIP LAYOUT SPECIFICATIONS</span>
        <div className="location-road-tag">Bakhtiyarpur Karauta Telmar Road / NH-30</div>
      </div>

      <div className="plot-paper-rows">
        {OFFICIAL_PLOT_TYPES.map((plot) => {
          const isActive = activeCode === plot.code || activeCode === String(plot.sqft);
          return (
            <div
              key={plot.code}
              className={`plot-paper-row ${isActive ? 'active-paper-row' : ''}`}
              onClick={() => onSelectPlot && onSelectPlot(plot)}
              role="button"
              tabIndex={0}
            >
              <div
                className="plot-code-badge"
                style={{ backgroundColor: plot.badgeBg, color: plot.textColor }}
              >
                {plot.code}
              </div>

              <div className="plot-paper-info">
                <div className="plot-paper-dim">{plot.dimension}</div>
                <div className="plot-paper-sqft">{plot.sqft} SQFT.</div>
              </div>

              <div className="plot-paper-tag">
                <span>{plot.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlotAreaChart;
