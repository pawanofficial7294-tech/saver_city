import React, { useState } from 'react';
import './FloorPlans.css';

const FloorPlans = ({ floorPlans }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = floorPlans[activeIdx];

  return (
    <div className="floor-plans">
      <div className="floor-plan-tabs">
        {floorPlans.map((plan, i) => (
          <button
            key={plan.name}
            className={`floor-plan-tab ${i === activeIdx ? 'floor-plan-tab-active' : ''}`}
            onClick={() => setActiveIdx(i)}
          >
            {plan.name}
            <span className="floor-plan-size">{plan.size}</span>
          </button>
        ))}
      </div>

      <div className="floor-plan-view">
        <img
          src={active.image}
          alt={`${active.name} floor plan - ${active.size}`}
          className="floor-plan-img"
          loading="lazy"
        />
        <div className="floor-plan-meta">
          <span className="floor-plan-meta-label">Type:</span>
          <strong>{active.name}</strong>
          <span className="floor-plan-meta-divider" />
          <span className="floor-plan-meta-label">Area:</span>
          <strong>{active.size}</strong>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
