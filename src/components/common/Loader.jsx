import React from 'react';
import './Loader.css';

const Loader = ({ fullPage = false, text = 'Loading...' }) => {
  if (fullPage) {
    return (
      <div className="loader-fullpage" role="status" aria-label={text}>
        <div className="loader-content">
          <div className="loader-ring">
            <div /><div /><div /><div />
          </div>
          <p className="loader-text">{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="loader-inline" role="status" aria-label={text}>
      <div className="loader-ring loader-ring-sm">
        <div /><div /><div /><div />
      </div>
    </div>
  );
};

export default Loader;
