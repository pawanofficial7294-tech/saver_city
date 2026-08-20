import React from 'react';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import CTASection from '../../components/sections/CTASection';
import Container from '../../components/common/Container';
import '../Projects/Projects.css';

const WhySaveraCity = () => (
  <main>
    <div className="page-banner">
      <div className="page-banner-bg" />
      <Container>
        <div className="page-banner-content">
          <h1 className="page-banner-title">Why Savera City?</h1>
          <p className="page-banner-sub">Six compelling reasons why 1,500+ families have chosen Savera City as their home.</p>
        </div>
      </Container>
    </div>
    <WhyChooseUs />
    <CTASection />
  </main>
);

export default WhySaveraCity;
