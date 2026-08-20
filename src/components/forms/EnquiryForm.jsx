import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { validateForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { projects } from '../../data/projects';
import { PROPERTY_TYPES } from '../../utils/constants';
import FormSuccessView from './FormSuccessView';
import './Forms.css';

const EnquiryForm = ({ defaultProject = '' }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    project: defaultProject, propertyType: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
      email: 'required|email',
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

  if (status === 'success') {
    return (
      <FormSuccessView
        title="Enquiry Received Successfully!"
        message={responseMessage || "Thank you for reaching out to Savera City. Our plot consultant will get in touch with you shortly to share full plot layouts and pricing."}
        onReset={() => setStatus('idle')}
      />
    );
  }

  return (
    <form className="form-layout" onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className="form-alert form-alert-error">
          <AlertCircle size={16} /> {responseMessage}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-name">Full Name *</label>
          <input id="enquiry-name" name="name" type="text" className={`form-control ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Your full name" />
          {errors.name && <span className="form-error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-phone">Phone Number *</label>
          <input id="enquiry-phone" name="phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" />
          {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="enquiry-email">Email Address *</label>
        <input id="enquiry-email" name="email" type="email" className={`form-control ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="your@email.com" />
        {errors.email && <span className="form-error-msg">{errors.email}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-project">Interested Project *</label>
          <select id="enquiry-project" name="project" className={`form-control ${errors.project ? 'error' : ''}`} value={form.project} onChange={handleChange}>
            <option value="">Select Project</option>
            {projects.map(p => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
          {errors.project && <span className="form-error-msg">{errors.project}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="enquiry-type">Property Type</label>
          <select id="enquiry-type" name="propertyType" className="form-control" value={form.propertyType} onChange={handleChange}>
            <option value="">Select Type</option>
            {PROPERTY_TYPES.filter(t => t.value !== 'all').map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="enquiry-message">Message</label>
        <textarea id="enquiry-message" name="message" className="form-control" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us your requirements..." />
      </div>

      <Button type="submit" variant="primary" fullWidth loading={status === 'loading'} size="lg">
        Submit Enquiry
      </Button>
    </form>
  );
};

export default EnquiryForm;
