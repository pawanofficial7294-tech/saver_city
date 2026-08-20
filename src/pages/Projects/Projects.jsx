import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyFilter from '../../components/property/PropertyFilter';
import PropertyGrid from '../../components/property/PropertyGrid';
import Container from '../../components/common/Container';
import { projectService } from '../../services/projectService';
import './Projects.css';

const Projects = ({ preFilter = {} }) => {
  const [searchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || 'all',
    location: searchParams.get('location') || 'all',
    configuration: searchParams.get('configuration') || 'all',
    status: searchParams.get('status') || 'all',
    budget: 'all',
    ...preFilter
  });

  const fetchProjects = async (currentFilters) => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectService.getProjects(currentFilters);
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(filters);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilters(prev => ({ ...prev, ...newFilter }));
  };

  const handleSearch = () => {
    fetchProjects(filters);
  };

  const handleReset = () => {
    const reset = { type: 'all', location: 'all', configuration: 'all', status: 'all', budget: 'all', ...preFilter };
    setFilters(reset);
    fetchProjects(reset);
  };

  const pageTitle = preFilter.type
    ? `${preFilter.type} Projects`
    : preFilter.status
    ? `${preFilter.status} Projects`
    : 'All Projects';

  return (
    <main>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <h1 className="page-banner-title">{pageTitle}</h1>
            <p className="page-banner-sub">Discover our portfolio of premium properties across Bihar and Jharkhand.</p>
          </div>
        </Container>
      </div>

      <div className="section-padding">
        <Container>
          <PropertyFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
            onReset={handleReset}
            resultCount={projects.length}
          />
          <PropertyGrid
            projects={projects}
            loading={loading}
            error={error}
            onClearFilters={handleReset}
          />
        </Container>
      </div>
    </main>
  );
};

export default Projects;
