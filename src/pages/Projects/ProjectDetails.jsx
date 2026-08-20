import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Download, CalendarCheck, ArrowLeft, FileText } from 'lucide-react';
import { projectService } from '../../services/projectService';
import PropertyGallery from '../../components/property/PropertyGallery';
import PropertyOverview from '../../components/property/PropertyOverview';
import PropertyAmenities from '../../components/property/PropertyAmenities';
import PropertyLocation from '../../components/property/PropertyLocation';
import FloorPlans from '../../components/property/FloorPlans';
import PropertySpecifications from '../../components/property/PropertySpecifications';
import ConstructionStatus from '../../components/property/ConstructionStatus';
import EnquiryForm from '../../components/forms/EnquiryForm';
import SiteVisitForm from '../../components/forms/SiteVisitForm';
import BrochureForm from '../../components/forms/BrochureForm';
import Testimonials from '../../components/sections/Testimonials';
import Loader from '../../components/common/Loader';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import { useApp } from '../../context/AppContext';
import './ProjectDetails.css';

const SectionHeader = ({ title }) => (
  <div className="pd-section-header">
    <h2 className="pd-section-title">{title}</h2>
    <div className="pd-section-divider" />
  </div>
);

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('enquiry');
  const { openBrochureModal } = useApp();

  useEffect(() => {
    setLoading(true);
    projectService.getProjectBySlug(slug)
      .then(data => { setProject(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader fullPage text="Loading project details..." />;

  if (!project) {
    return (
      <main className="pd-not-found">
        <Container>
          <h1>Project Not Found</h1>
          <p>The project you are looking for does not exist or has been removed.</p>
          <Link to="/projects"><Button variant="primary">Browse All Projects</Button></Link>
        </Container>
      </main>
    );
  }

  const statusColors = { Ongoing: '#10B981', Completed: '#3B82F6', Upcoming: '#F59E0B' };

  return (
    <main>
      {/* Hero */}
      <section className="pd-hero" style={{ backgroundImage: `url(${project.images[0]})` }}>
        <div className="pd-hero-overlay" />
        <Container>
          <div className="pd-hero-content">
            <Link to="/projects" className="pd-back-link">
              <ArrowLeft size={16} /> All Projects
            </Link>
            <div className="pd-hero-badges">
              <span className="pd-badge" style={{ background: statusColors[project.status] }}>{project.status}</span>
              <span className="pd-badge pd-badge-type">{project.type}</span>
            </div>
            <h1 className="pd-hero-title">{project.name}</h1>
            <div className="pd-hero-location">
              <MapPin size={16} /> {project.location}
            </div>
            <div className="pd-hero-price">{project.price}</div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="pd-layout">
          {/* Main Content */}
          <div className="pd-main">
            {/* Overview */}
            <section className="pd-section" aria-labelledby="overview-title">
              <SectionHeader title="Project Overview" />
              <p className="pd-description">{project.description}</p>
              <PropertyOverview project={project} />
            </section>

            {/* Gallery */}
            {project.images?.length > 0 && (
              <section className="pd-section" aria-labelledby="gallery-title">
                <SectionHeader title="Photo Gallery" />
                <PropertyGallery images={project.images} name={project.name} />
              </section>
            )}

            {/* Configurations */}
            {project.configDetails?.length > 0 && (
              <section className="pd-section">
                <SectionHeader title="Configurations & Pricing" />
                <div className="pd-configs-grid">
                  {project.configDetails.map((config) => (
                    <div key={config.type} className="pd-config-card">
                      <div className="pd-config-type">{config.type}</div>
                      <div className="pd-config-size">{config.size}</div>
                      <div className="pd-config-price">{config.price}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Specifications */}
            {project.specifications?.length > 0 && (
              <section className="pd-section">
                <SectionHeader title="Key Specifications" />
                <PropertySpecifications specifications={project.specifications} />
              </section>
            )}

            {/* Amenities */}
            {project.amenities?.length > 0 && (
              <section className="pd-section">
                <SectionHeader title="Amenities" />
                <PropertyAmenities amenities={project.amenities} />
              </section>
            )}

            {/* Floor Plans */}
            {project.floorPlans?.length > 0 && (
              <section className="pd-section">
                <SectionHeader title="Floor Plans" />
                <FloorPlans floorPlans={project.floorPlans} />
              </section>
            )}

            {/* Location */}
            <section className="pd-section">
              <SectionHeader title="Location & Connectivity" />
              <PropertyLocation location={project.location} nearbyPlaces={project.nearbyPlaces} />
            </section>

            {/* Construction Status */}
            {project.constructionStatus && (
              <section className="pd-section">
                <SectionHeader title="Construction Progress" />
                <ConstructionStatus constructionStatus={project.constructionStatus} />
              </section>
            )}

            {/* RERA Info */}
            <section className="pd-section">
              <SectionHeader title="RERA & Legal Information" />
              <div className="pd-rera-box">
                <FileText size={20} className="pd-rera-icon" />
                <div>
                  <div className="pd-rera-label">RERA Registration Number</div>
                  <div className="pd-rera-number">{project.reraNumber || 'Application Pending'}</div>
                  <div className="pd-rera-note">
                    This project is registered with the Bihar Real Estate Regulatory Authority. 
                    Buyers are advised to verify the RERA details on the official website before investing.
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="pd-section">
              <Testimonials />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-sticky">
              {/* Brochure */}
              <div className="pd-brochure-card">
                <h3 className="pd-sidebar-title">Project Brochure</h3>
                <p className="pd-sidebar-sub">Download the detailed project brochure with floor plans and pricing.</p>
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => openBrochureModal(project)}
                  icon={<Download size={16} />}
                >
                  Download Brochure
                </Button>
              </div>

              {/* Form Tabs */}
              <div className="pd-form-card">
                <div className="pd-form-tabs">
                  {[
                    { id: 'enquiry', label: 'Enquire Now' },
                    { id: 'visit', label: 'Site Visit' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      className={`pd-form-tab ${activeTab === tab.id ? 'pd-form-tab-active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="pd-form-body">
                  {activeTab === 'enquiry' && <EnquiryForm defaultProject={project.name} />}
                  {activeTab === 'visit' && <SiteVisitForm defaultProject={project.name} />}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default ProjectDetails;
