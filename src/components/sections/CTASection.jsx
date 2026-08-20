import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../common/Button';
import Container from '../common/Container';
import { CalendarCheck, MessageSquare } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
  const { openEnquiryModal, openSiteVisitModal } = useApp();

  return (
    <section className="cta-section" id="cta-section" aria-label="Call to action">
      <div className="cta-bg" aria-hidden="true" />
      <Container>
        <div className="cta-content">
          <h2 className="cta-heading">Ready to Find Your Dream Property?</h2>
          <p className="cta-subtext">
            Talk to our property experts today. Book a site visit or enquire about any project — 
            completely free and without obligations.
          </p>
          <div className="cta-actions">
            <Button
              variant="secondary"
              size="lg"
              onClick={openSiteVisitModal}
              icon={<CalendarCheck size={18} />}
            >
              Book a Site Visit
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              onClick={openEnquiryModal}
              icon={<MessageSquare size={18} />}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
