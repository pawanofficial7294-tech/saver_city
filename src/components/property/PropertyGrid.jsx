import React from 'react';
import PropertyCard from './PropertyCard';
import Loader from '../common/Loader';
import Button from '../common/Button';
import { SearchX } from 'lucide-react';
import './PropertyGrid.css';

const PropertyGrid = ({ projects, loading, error, onClearFilters }) => {
  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="property-grid-empty">
        <SearchX size={48} className="empty-icon" />
        <h3>Something went wrong</h3>
        <p>{error}</p>
        <Button variant="outline" onClick={onClearFilters}>Clear Filters & Retry</Button>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="property-grid-empty">
        <SearchX size={56} className="empty-icon" />
        <h3>No Properties Found</h3>
        <p>No properties match your current search criteria. Try adjusting the filters.</p>
        {onClearFilters && (
          <Button variant="outline" onClick={onClearFilters}>Clear Filters</Button>
        )}
      </div>
    );
  }

  return (
    <div className="property-grid">
      {projects.map((project) => (
        <PropertyCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PropertyGrid;
