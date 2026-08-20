import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Button from '../common/Button';
import { PROPERTY_TYPES, LOCATIONS, CONFIGURATIONS, PROJECT_STATUSES, BUDGET_RANGES } from '../../utils/constants';
import './PropertyFilter.css';

const PropertyFilter = ({ filters, onFilterChange, onSearch, onReset, resultCount }) => {
  const handleChange = (e) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="property-filter-bar">
      <div className="filter-header">
        <div className="filter-header-left">
          <SlidersHorizontal size={18} className="filter-icon" />
          <span className="filter-title">Filter Properties</span>
          {resultCount !== undefined && (
            <span className="filter-count">{resultCount} project{resultCount !== 1 ? 's' : ''} found</span>
          )}
        </div>
        <button className="filter-reset-btn" onClick={onReset}>Clear All</button>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-type">Plot Type</label>
          <select id="filter-type" name="type" className="filter-select" value={filters.type || 'all'} onChange={handleChange}>
            {PROPERTY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-location">Location</label>
          <select id="filter-location" name="location" className="filter-select" value={filters.location || 'all'} onChange={handleChange}>
            {LOCATIONS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-config">Plot Size</label>
          <select id="filter-config" name="configuration" className="filter-select" value={filters.configuration || 'all'} onChange={handleChange}>
            {CONFIGURATIONS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-status">Township Status</label>
          <select id="filter-status" name="status" className="filter-select" value={filters.status || 'all'} onChange={handleChange}>
            {PROJECT_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-budget">Plot Budget</label>
          <select id="filter-budget" name="budget" className="filter-select" value={filters.budget || 'all'} onChange={handleChange}>
            {BUDGET_RANGES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </div>

        <div className="filter-search-btn">
          <Button variant="primary" fullWidth onClick={onSearch} icon={<Search size={16} />}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
