import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Download, FileText, ShieldCheck, FileCheck2, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import { validateForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { downloadBrochurePdf } from '../../utils/pdf';
import './BrochureSection.css';

const initialForm = { name: '', phone: '', email: '' };

const BrochureSection = () => {
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
      phone: 'required|phone',
      email: 'required|email'
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const res = await enquiryService.requestBrochure(form);
      setStatus('success');
      setResponseMessage(res.message);
    } catch {
      setStatus('error');
      setResponseMessage('Request failed. Please try again.');
    }
  };

  const handleDownload = () => {
    downloadBrochurePdf(form.name);
  };

  return (
    <section className="brochure-section" id="download-brochure">
      <Container>
        <Reveal>
          <div className="brochure-card">
            <div className="brochure-info">
              <span className="brochure-eyebrow">Company Brochure</span>
              <h2 className="brochure-title">Download Our Brochure</h2>
              <p className="brochure-lead">
                Get a complete overview of our residential and commercial projects —
                specifications, floor plans, amenities, and price guides in one handy PDF.
              </p>
              <ul className="brochure-points">
                <li>
                  <FileText size={16} />
                  <span>Project portfolios with imagery and layouts</span>
                </li>
                <li>
                  <FileCheck2 size={16} />
                  <span>Detailed specifications and RERA details</span>
                </li>
                <li>
                  <ShieldCheck size={16} />
                  <span>Transparent pricing and payment plans</span>
                </li>
              </ul>
            </div>

            <div className="brochure-form-panel">
              {status === 'success' ? (
                <div className="brochure-success">
                  <CheckCircle size={52} className="brochure-success-icon" />
                  <h3>Your Brochure is Ready!</h3>
                  <p>{responseMessage}</p>
                  <Button variant="primary" size="lg" onClick={handleDownload} icon={<Download size={18} />}>
                    Download Brochure (PDF)
                  </Button>
                  <button className="brochure-again" onClick={() => { setStatus('idle'); setForm(initialForm); }}>
                    Request for a different number
                  </button>
                </div>
              ) : (
                <form className="brochure-form" onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="form-alert form-alert-error">
                      <AlertCircle size={16} /> {responseMessage}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="broc-name">Name *</label>
                    <input
                      id="broc-name"
                      name="name"
                      type="text"
                      className={`form-control ${errors.name ? 'error' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="broc-phone">Phone *</label>
                      <input
                        id="broc-phone"
                        name="phone"
                        type="tel"
                        className={`form-control ${errors.phone ? 'error' : ''}`}
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Mobile number"
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="broc-email">Email *</label>
                      <input
                        id="broc-email"
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

                  <Button type="submit" variant="secondary" fullWidth size="lg" loading={status === 'loading'} icon={<Download size={18} />}>
                    Download Brochure
                  </Button>

                  <p className="brochure-note">
                    <Sparkles size={13} /> Instant download after a quick verification
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default BrochureSection;
