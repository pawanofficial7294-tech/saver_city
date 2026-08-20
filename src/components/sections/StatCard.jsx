import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import './StatCard.css';

const StatCard = ({ value, suffix = '', label, sub, icon, pad }) => {
  const { ref, value: count } = useCountUp(value);

  const display = pad
    ? String(count).padStart(2, '0')
    : Number(count).toLocaleString('en-IN');

  return (
    <div className="stat-card" ref={ref}>
      {icon && <div className="stat-icon">{icon}</div>}
      <div className="stat-value">
        {display}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
};

export default StatCard;
