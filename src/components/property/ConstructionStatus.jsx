import React from 'react';
import { CheckCircle, Clock, Circle } from 'lucide-react';
import './ConstructionStatus.css';

const ConstructionStatus = ({ constructionStatus }) => {
  const { percentage, currentPhase, timeline } = constructionStatus;

  const statusIcon = {
    Completed: <CheckCircle size={16} className="timeline-icon-completed" />,
    'In Progress': <Clock size={16} className="timeline-icon-progress" />,
    Upcoming: <Circle size={16} className="timeline-icon-upcoming" />
  };

  return (
    <div className="construction-status">
      {/* Progress bar */}
      <div className="construction-progress-section">
        <div className="construction-header">
          <span className="construction-label">Overall Completion</span>
          <span className="construction-percent">{percentage}%</span>
        </div>
        <div className="construction-progress-track">
          <div className="construction-progress-fill" style={{ width: `${percentage}%` }} />
        </div>
        <p className="construction-phase">
          <strong>Current Phase:</strong> {currentPhase}
        </p>
      </div>

      {/* Timeline */}
      {timeline && timeline.length > 0 && (
        <div className="construction-timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item timeline-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="timeline-icon-wrap">
                {statusIcon[item.status] || <Circle size={16} />}
                {i < timeline.length - 1 && <div className="timeline-connector" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-phase">{item.phase}</div>
                <div className="timeline-date">{item.date}</div>
                <span className={`timeline-badge timeline-badge-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConstructionStatus;
