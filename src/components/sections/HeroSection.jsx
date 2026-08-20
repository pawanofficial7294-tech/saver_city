import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/images';
import HeroSlide from './HeroSlide';
import './HeroSection.css';

const SLIDE_INTERVAL = 7000;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useRef(false);
  const total = heroSlides.length;

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const goTo = (index) => {
    setActiveIndex(((index % total) + total) % total);
  };

  const nextSlide = () => goTo(activeIndex + 1);
  const prevSlide = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (paused || prefersReduced.current || total <= 1) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, total, activeIndex]);

  return (
    <section
      className="hero"
      aria-label="Featured properties"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            index={index}
            total={total}
            active={index === activeIndex}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="hero-side-caption" aria-hidden="true">
        <span className="hero-caption-num">0{activeIndex + 1}</span>
        <span className="hero-caption-divider">/</span>
        <span className="hero-caption-total">0{total}</span>
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button className="hero-arrow hero-arrow-prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={22} />
        </button>
        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              className={`hero-dot ${index === activeIndex ? 'hero-dot-active' : ''}`}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
        <button className="hero-arrow hero-arrow-next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
