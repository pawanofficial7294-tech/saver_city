import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import AwardCard from './AwardCard';
import { awards } from '../../data/awards';
import './AwardsSection.css';

const AwardsSection = () => {
  return (
    <section className="section-padding awards-section" id="awards">
      <Container>
        <Reveal>
          <SectionTitle
            subtitle="Awards & Recognition"
            title="Celebrated for Excellence"
            description="Industry-recognized leadership in construction quality, sustainability, and customer trust."
            align="center"
          />
        </Reveal>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <Reveal key={award.id} delay={index * 120}>
              <AwardCard award={award} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AwardsSection;
