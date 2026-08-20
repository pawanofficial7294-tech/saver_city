import React from 'react';
import { Crown, Users, Building2, HardHat } from 'lucide-react';
import Container from '../common/Container';
import StatCard from './StatCard';
import Reveal from '../common/Reveal';
import './StatsSection.css';

const stats = [
  {
    value: 2026,
    label: 'Established Year',
    sub: 'Building trust from day one',
    icon: <Crown size={22} />
  },
  {
    value: 2500,
    suffix: '+',
    label: 'Happy Families',
    sub: 'Living the Savera dream',
    icon: <Users size={22} />
  },
  {
    value: 31,
    suffix: '+',
    label: 'Completed Projects',
    sub: 'Delivered on time, every time',
    icon: <Building2 size={22} />
  },
  {
    value: 4,
    pad: true,
    suffix: '+',
    label: 'Ongoing Projects',
    sub: 'Currently under construction',
    icon: <HardHat size={22} />
  }
];

const StatsSection = () => {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <div className="stats-bg" />
      <Container>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
