import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Download } from 'lucide-react';
import Button from '../common/Button';
import { validateForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { projects } from '../../data/projects';
import FormSuccessView from './FormSuccessView';
import './Forms.css';

const BrochureForm = ({ defaultProject = '' }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: defaultProject });
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
      name: 'required', phone: 'required|phone',
      email: 'required|email', project: 'required'
    });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
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

  if (status === 'success') {
    return (
      <FormSuccessView
        title="Brochure Request Submitted!"
        message={responseMessage || "Thank you! Your brochure request has been registered. You can download the official Savera City Master Layout Map below."}
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
      <div className="form-group">
        <label className="form-label" htmlFor="brochure-name">Full Name *</label>
        <input id="brochure-name" name="name" type="text" className={`form-control ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Your name" />
        {errors.name && <span className="form-error-msg">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="brochure-phone">Phone Number *</label>
        <input id="brochure-phone" name="phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={handleChange} placeholder="Mobile number" />
        {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="brochure-email">Email Address *</label>
        <input id="brochure-email" name="email" type="email" className={`form-control ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="your@email.com" />
        {errors.email && <span className="form-error-msg">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="brochure-project">Project *</label>
        <select id="brochure-project" name="project" className={`form-control ${errors.project ? 'error' : ''}`} value={form.project} onChange={handleChange}>
          <option value="">Select Project</option>
          {projects.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
        {errors.project && <span className="form-error-msg">{errors.project}</span>}
      </div>
      <Button type="submit" variant="primary" fullWidth loading={status === 'loading'} size="lg">
        <Download size={16} /> Download Brochure
      </Button>
    </form>
  );
};

export default BrochureForm;
