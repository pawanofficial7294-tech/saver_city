import React from 'react';
import Container from '../../components/common/Container';
import CTASection from '../../components/sections/CTASection';
import DrAyeshaFatimaImg from '../../assets/DrAyeshaFatima.png';
import '../Projects/Projects.css';

const Chairman = () => (
  <main>
    <div className="page-banner">
      <div className="page-banner-bg" />
      <Container>
        <div className="page-banner-content">
          <h1 className="page-banner-title">Chairperson's Message</h1>
          <p className="page-banner-sub">A message from the founding visionary of Savera City.</p>
        </div>
      </Container>
    </div>

    <section className="section-padding">
      <Container>
        <div className="chairman-layout">
          <div className="chairman-img-col">
            <img
              src={DrAyeshaFatimaImg}
              alt="Dr. Ayesha Fatima, Founder & Chairperson of Savera City Real Estates"
              className="chairman-img"
              loading="lazy"
            />
            <div className="chairman-info">
              <div className="chairman-name">Dr. Ayesha Fatima</div>
              <div className="chairman-designation">Founder & Chairperson, Savera City Real Estates</div>
            </div>
          </div>

          <div className="chairman-content">
            <span className="about-page-label">From the Desk of</span>
            <h2 className="about-page-heading">Building a Legacy of Trust</h2>
            <p>When I started Savera City in 2026, my vision was not just to construct buildings — it was to build communities where families thrive, where children grow up in safe, modern environments, and where every homebuyer feels respected and valued.</p>
            <p>Established in 2026, we are dedicated to delivering dream plots and homes, earning the trust of families across Bihar and Jharkhand. This has been possible because of one unwavering principle: we never compromise on quality or integrity.</p>
            <p>Real estate is not just about square footage. It is about life quality. It is about giving people spaces that inspire them. It is about being honest with every buyer, transparent in every transaction, and accountable at every step of the construction journey.</p>
            <p>We are RERA-compliant, award-winning, and most importantly — people-first. As we expand our portfolio to new cities and new segments, this philosophy remains our North Star.</p>
            <p>I invite you to visit any of our projects, see the quality of construction with your own eyes, and experience the Savera City difference.</p>
            <div className="chairman-signature">
              <p className="chairman-sig-text">— Dr. Ayesha Fatima</p>
              <p className="chairman-sig-title">Founder & Chairperson</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <CTASection />
  </main>
);

export default Chairman;
