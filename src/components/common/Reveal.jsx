import React from 'react';
import { useInView } from '../../hooks/useInView';
import './Reveal.css';

const Reveal = ({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  ...props
}) => {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
