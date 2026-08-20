import React from 'react';
import { Leaf, Cpu, ClipboardCheck } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Container from '../common/Container';
import Reveal from '../common/Reveal';
import FeatureCard from './FeatureCard';
import './WhyChooseUs.css';

const features = [
  {
    icon: <ClipboardCheck size={26} />,
    title: 'Spot Registry & 100% Mutation',
    description:
      'We offer RERA-approved plots with crystal-clear legal titles, zero litigation, immediate spot registry at circle offices, and guaranteed government mutation.'
  },
  {
    icon: <Leaf size={26} />,
    title: 'Standard Approved Plot Sizes',
    description:
      'Engineered plot dimensions — 600, 1,200, 1,500, 1,800, 3,600, and 4,800 Sq.Ft. — optimized for Vastu orientation, frontages, and efficient house construction.'
  },
  {
    icon: <Cpu size={26} />,
    title: 'Modern Township Infrastructure',
    description:
      'Complete township development featuring 60ft & 40ft wide blacktop roads, underground electrical lines, solar streetlight grids, and 24x7 gated security posts.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding why-section" id="why-savera-city">
      <Container>
        <Reveal>
          <SectionTitle
            subtitle="Why Choose Us"
            title="The Savera City Advantage"
            description="Three principles guide everything we build — sustainability, innovation, and uncompromising quality."
            align="center"
          />
        </Reveal>
        <div className="why-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 130} className="why-grid-item">
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
