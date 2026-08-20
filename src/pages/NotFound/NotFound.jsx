import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="not-found-page">
      <Container>
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="not-found-actions">
            <Link to="/">
              <Button variant="primary" size="lg">Back to Home</Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">Explore Projects</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
