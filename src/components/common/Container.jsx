import React from 'react';

const Container = ({ children, className = '', narrow = false }) => {
  return (
    <div className={`container-custom ${narrow ? 'container-narrow' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
