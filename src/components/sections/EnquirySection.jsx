import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import { validateForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { projects } from '../../data/projects';
import { CONTACT_INFO } from '../../utils/constants';
import './EnquirySection.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  project: '',
  message: ''
};

const EnquirySection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form, {
      name: 'required',
      email: 'required|email',
      phone: 'required|phone',
      project: 'required'
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const res = await enquiryService.submitEnquiry(form);
      setStatus('success');
      setResponseMessage(res.message);
    } catch {
      setStatus('error');
      setResponseMessage('Something went wrong. Please try again or call us directly.');
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
  };

  return (
    <section className="enquiry-section" id="enquire">
      <div className="enquiry-bg" aria-hidden="true" />
      <Container>
        <div className="enquiry-card">
          {/* Info panel */}
          <Reveal variant="left" className="enquiry-info">
            <span className="enquiry-eyebrow">Get In Touch</span>
            <h2 className="enquiry-title">Enquire Now</h2>
            <p className="enquiry-lead">
              Talk to our property experts about your dream home or a smart
              investment. We respond within one business day.
            </p>

            <ul className="enquiry-contact-list">
              <li>
                <span className="enquiry-contact-icon"><Phone size={16} /></span>
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <span className="enquiry-contact-icon"><Mail size={16} /></span>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li>
                <span className="enquiry-contact-icon"><MapPin size={16} /></span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <span className="enquiry-contact-icon"><Clock size={16} /></span>
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>

            <div className="enquiry-trust">
              <span>RERA Compliant Projects</span>
              <span>No Hidden Costs</span>
              <span>On-Time Possession</span>
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal variant="right" className="enquiry-form-panel">
            {status === 'success' ? (
              <div className="enquiry-success">
                <CheckCircle size={52} className="enquiry-success-icon" />
                <h3>Thank You, {form.name.split(' ')[0] || 'Friend'}!</h3>
                <p>{responseMessage}</p>
                <Button variant="outline" size="sm" onClick={resetForm}>
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <div className="form-alert form-alert-error">
                    <AlertCircle size={16} /> {responseMessage}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-name">Name *</label>
                    <input
                      id="enq-name"
                      name="name"
                      type="text"
                      className={`form-control ${errors.name ? 'error' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-email">Email *</label>
                    <input
                      id="enq-email"
                      name="email"
                      type="email"
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-phone">Phone *</label>
                    <input
                      id="enq-phone"
                      name="phone"
                      type="tel"
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-project">Interested Project *</label>
                    <select
                      id="enq-project"
                      name="project"
                      className={`form-control ${errors.project ? 'error' : ''}`}
                      value={form.project}
                      onChange={handleChange}
                    >
                      <option value="">Select Project</option>
                      {projects.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                    {errors.project && <span className="form-error-msg">{errors.project}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="enq-message">Message</label>
                  <textarea
                    id="enq-message"
                    name="message"
                    className="form-control"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us your requirements..."
                  />
                </div>

                <Button type="submit" variant="primary" fullWidth size="lg" loading={status === 'loading'}>
                  Submit Enquiry
                </Button>
                <p className="enquiry-privacy">
                  Your details are safe with us. We never share your information.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default EnquirySection;
