import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Button from '../common/Button';
import { PROPERTY_TYPES, LOCATIONS, CONFIGURATIONS, PROJECT_STATUSES } from '../../utils/constants';
import './PropertySearchSection.css';

const PropertySearchSection = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ type: '', location: '', configuration: '', status: '' });

  const handleChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') params.set(key, value);
    });
    navigate(`/projects?${params.toString()}`);
  };

  return (
    <section className="search-section" aria-label="Property search">
      <div className="container-custom">
        <div className="search-card">
          <h2 className="search-title">Find Your Perfect Property</h2>
          <div className="search-controls">
            {[
              { name: 'type', label: 'Property Type', options: PROPERTY_TYPES },
              { name: 'location', label: 'Location', options: LOCATIONS },
              { name: 'configuration', label: 'Configuration', options: CONFIGURATIONS },
              { name: 'status', label: 'Project Status', options: PROJECT_STATUSES }
            ].map(({ name, label, options }) => (
              <div key={name} className="search-select-wrap">
                <label className="search-select-label" htmlFor={`search-${name}`}>{label}</label>
                <select
                  id={`search-${name}`}
                  name={name}
                  className="search-select"
                  value={filters[name]}
                  onChange={handleChange}
                >
                  {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="search-btn-wrap">
              <Button variant="primary" size="lg" onClick={handleSearch} icon={<Search size={18} />} fullWidth>
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearchSection;
