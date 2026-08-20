import React from 'react';
import { MapPin, Calendar, FileText, Ruler, IndianRupee } from 'lucide-react';
import './PropertyOverview.css';

const PropertyOverview = ({ project }) => {
  const { location, price, area, possessionDate, reraNumber, configurations, type, status } = project;

  const stats = [
    { icon: <IndianRupee size={18} />, label: 'Price', value: price },
    { icon: <MapPin size={18} />, label: 'Location', value: location },
    { icon: <Ruler size={18} />, label: 'Total Area', value: area },
    { icon: <Calendar size={18} />, label: 'Possession', value: possessionDate },
    { icon: <FileText size={18} />, label: 'RERA No.', value: reraNumber || 'N/A' },
  ];

  return (
    <div className="property-overview">
      <div className="overview-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="overview-stat">
            <div className="overview-stat-icon">{stat.icon}</div>
            <div>
              <div className="overview-stat-label">{stat.label}</div>
              <div className="overview-stat-value">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {configurations && (
        <div className="overview-configs">
          <span className="overview-config-label">Available Plot Sizes (600 to 4800 Sq.Ft):</span>
          <div className="overview-config-chips">
            {configurations.map(c => <span key={c} className="config-chip-lg">{c}</span>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyOverview;
