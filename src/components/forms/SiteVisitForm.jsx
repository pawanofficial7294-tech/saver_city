import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { validateForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { projects } from '../../data/projects';
import FormSuccessView from './FormSuccessView';
import './Forms.css';

const SiteVisitForm = ({ defaultProject = '' }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    project: defaultProject, preferredDate: '', preferredTime: '', message: ''
  });
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
      email: 'required|email', project: 'required',
      preferredDate: 'required', preferredTime: 'required'
    });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus('loading');
    try {
      const res = await enquiryService.bookSiteVisit(form);
      setStatus('success');
      setResponseMessage(res.message);
    } catch {
      setStatus('error');
      setResponseMessage('Booking failed. Please call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <FormSuccessView
        title="Site Visit Scheduled Successfully!"
        message={responseMessage || "Thank you for scheduling a site visit with Savera City. Our sales team will confirm your slot and arrange free site transport."}
        onReset={() => setStatus('idle')}
      />
    );
  }

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = ['9:30 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM'];

  return (
    <form className="form-layout" onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className="form-alert form-alert-error">
          <AlertCircle size={16} /> {responseMessage}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="visit-name">Full Name *</label>
          <input id="visit-name" name="name" type="text" className={`form-control ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Your name" />
          {errors.name && <span className="form-error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="visit-phone">Phone Number *</label>
          <input id="visit-phone" name="phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={handleChange} placeholder="Mobile number" />
          {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="visit-email">Email Address *</label>
        <input id="visit-email" name="email" type="email" className={`form-control ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="your@email.com" />
        {errors.email && <span className="form-error-msg">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="visit-project">Project to Visit *</label>
        <select id="visit-project" name="project" className={`form-control ${errors.project ? 'error' : ''}`} value={form.project} onChange={handleChange}>
          <option value="">Select Project</option>
          {projects.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
        </select>
        {errors.project && <span className="form-error-msg">{errors.project}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="visit-date">Preferred Date *</label>
          <input id="visit-date" name="preferredDate" type="date" min={today} className={`form-control ${errors.preferredDate ? 'error' : ''}`} value={form.preferredDate} onChange={handleChange} />
          {errors.preferredDate && <span className="form-error-msg">{errors.preferredDate}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="visit-time">Preferred Time *</label>
          <select id="visit-time" name="preferredTime" className={`form-control ${errors.preferredTime ? 'error' : ''}`} value={form.preferredTime} onChange={handleChange}>
            <option value="">Select Time</option>
            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.preferredTime && <span className="form-error-msg">{errors.preferredTime}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="visit-message">Additional Notes</label>
        <textarea id="visit-message" name="message" className="form-control" rows={2} value={form.message} onChange={handleChange} placeholder="Any specific requirements or questions..." />
      </div>

      <Button type="submit" variant="secondary" fullWidth loading={status === 'loading'} size="lg">
        Book Site Visit
      </Button>
    </form>
  );
};

export default SiteVisitForm;
