import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../../components/common/Container';
import ContactForm from '../../components/forms/ContactForm';
import SectionTitle from '../../components/common/SectionTitle';
import { CONTACT_INFO } from '../../utils/constants';
import '../Projects/Projects.css';
import './Contact.css';

const Contact = () => {
  const contactItems = [
    { icon: <Phone size={20} />, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: <Mail size={20} />, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: <MapPin size={20} />, label: 'Address', value: CONTACT_INFO.address },
    { icon: <Clock size={20} />, label: 'Office Hours', value: CONTACT_INFO.hours }
  ];

  return (
    <main>
      <div className="page-banner">
        <div className="page-banner-bg" />
        <Container>
          <div className="page-banner-content">
            <h1 className="page-banner-title">Contact Us</h1>
            <p className="page-banner-sub">Reach out to our property experts. We're always happy to help.</p>
          </div>
        </Container>
      </div>

      <section className="section-padding">
        <Container>
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-info-col">
              <SectionTitle subtitle="Get in Touch" title="We're Here to Help" />
              <p className="contact-intro">
                Whether you want to enquire about a specific project, book a site visit, or simply have a question 
                about our properties — our team is available six days a week.
              </p>

              <div className="contact-items">
                {contactItems.map((item) => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value contact-item-link">
                          {item.value}
                        </a>
                      ) : (
                        <div className="contact-item-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="contact-map">
                <div className="contact-map-placeholder">
                  <MapPin size={28} />
                  <p>Savera City Corporate Office</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-sub">Fill in the form below and we'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
