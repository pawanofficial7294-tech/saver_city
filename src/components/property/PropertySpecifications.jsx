import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './PropertySpecifications.css';

const PropertySpecifications = ({ specifications }) => {
  return (
    <div className="spec-list">
      {specifications.map((spec) => (
        <div key={spec.title} className="spec-item">
          <CheckCircle2 size={18} className="spec-icon" />
          <div>
            <div className="spec-title">{spec.title}</div>
            <div className="spec-detail">{spec.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertySpecifications;
