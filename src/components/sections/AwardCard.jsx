import React from 'react';
import { Award } from 'lucide-react';
import './AwardCard.css';

const AwardCard = ({ award }) => {
  return (
    <article className="award-card">
      <div className="award-medal" aria-hidden="true">
        {award.image ? (
          <img src={award.image} alt="" className="award-medal-img" loading="lazy" />
        ) : (
          <Award size={30} />
        )}
      </div>

      <span className="award-year">{award.year}</span>
      <h3 className="award-title">{award.title}</h3>
      <p className="award-desc">{award.description}</p>
      <div className="award-org">{award.organization}</div>
    </article>
  );
};

export default AwardCard;
