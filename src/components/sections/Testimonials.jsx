import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const INTERVAL = 7000;

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const prev = () => setActiveIdx(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (paused || prefersReduced.current || testimonials.length <= 1) return undefined;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, activeIdx]);

  return (
    <section
      className="section-padding testimonials-section"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Reveal>
          <SectionTitle
            subtitle="Customer Reviews"
            title="What Our Residents Say"
            description="Real stories from real families who chose Savera City as their forever home."
            align="center"
          />
        </Reveal>

        <div className="testimonials-carousel">
          <button className="testimonial-nav testimonial-prev" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={22} />
          </button>

          <div className="testimonials-slide" key={testimonials[activeIdx].id}>
            <TestimonialCard testimonial={testimonials[activeIdx]} />
          </div>

          <button className="testimonial-nav testimonial-next" onClick={next} aria-label="Next testimonial">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="testimonials-dots" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`testimonial-dot ${i === activeIdx ? 'dot-active' : ''}`}
              onClick={() => setActiveIdx(i)}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Testimonial ${i + 1} from ${t.name}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
