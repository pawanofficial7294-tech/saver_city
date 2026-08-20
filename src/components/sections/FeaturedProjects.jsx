import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import PropertyCard from '../property/PropertyCard';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import { projectService } from '../../services/projectService';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectService.getFeaturedProjects().then(setProjects).catch(() => {});
  }, []);

  return (
    <section className="section-padding featured-projects-section" id="featured-projects">
      <Container>
        <Reveal>
          <div className="featured-header">
            <SectionTitle
              subtitle="Our Portfolio"
              title="Featured Projects"
              description="Explore our premium curated developments across Bihar and Jharkhand. Every project is built with care, precision, and the finest materials."
            />
            <Link to="/projects" className="btn btn-outline btn-md featured-view-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="featured-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 110}>
              <PropertyCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
