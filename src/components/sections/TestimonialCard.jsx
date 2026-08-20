import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, designation, text, rating, avatar } = testimonial;

  return (
    <figure className="testimonial-card">
      <Quote size={38} className="testimonial-quote-icon" aria-hidden="true" />
      <blockquote className="testimonial-text">"{text}"</blockquote>
      <div className="testimonial-rating" aria-label={`Rated ${rating} out of 5`}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="star-filled" aria-hidden="true" />
        ))}
      </div>
      <figcaption className="testimonial-author">
        <img
          src={avatar}
          alt={`Portrait of ${name}`}
          className="testimonial-avatar"
          loading="lazy"
        />
        <div className="testimonial-author-info">
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-designation">{designation}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
