import React from 'react';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import Container from '../../components/common/Container';
import ContactForm from '../../components/forms/ContactForm';
import SectionTitle from '../../components/common/SectionTitle';
import '../Projects/Projects.css';
import './Careers.css';

const openings = [
  { id: 1, title: 'Senior Sales Executive', department: 'Sales', location: 'Patna, Bihar', type: 'Full-time', experience: '3-5 years' },
  { id: 2, title: 'Civil Site Engineer', department: 'Construction', location: 'Ranchi, Jharkhand', type: 'Full-time', experience: '2-4 years' },
  { id: 3, title: 'Digital Marketing Manager', department: 'Marketing', location: 'Patna, Bihar', type: 'Full-time', experience: '4+ years' },
  { id: 4, title: 'Customer Relationship Executive', department: 'CRM', location: 'Patna, Bihar', type: 'Full-time', experience: '1-3 years' }
];

const Careers = () => {
  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <h1 className="page-banner-title">Careers at Savera City</h1>
            <p className="page-banner-sub">Join a growing team that's building the future of real estate in Bakhtiyarpur, Bihar, India.</p>
          </div>
        </Container>
      </div>

      <section className="section-padding">
        <Container>
          <div className="careers-layout">
            <div className="careers-main">
              <SectionTitle subtitle="Work with us" title="Current Openings" />
              <div className="careers-list">
                {openings.map(job => (
                  <div key={job.id} className="career-card">
                    <div className="career-card-header">
                      <div>
                        <h3 className="career-title">{job.title}</h3>
                        <div className="career-dept">{job.department}</div>
                      </div>
                      <button className="btn btn-primary btn-sm">Apply Now</button>
                    </div>
                    <div className="career-meta">
                      <span><MapPin size={13} /> {job.location}</span>
                      <span><Clock size={13} /> {job.type}</span>
                      <span><Briefcase size={13} /> {job.experience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="careers-sidebar">
              <div className="careers-sidebar-card">
                <h3>Didn't find a match?</h3>
                <p>Send us your resume and we'll reach out when a suitable opportunity opens up.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Careers;
