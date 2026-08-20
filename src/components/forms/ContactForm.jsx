import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { validateForm } from '../../utils/validators';
import { contactService } from '../../services/contactService';
import FormSuccessView from './FormSuccessView';
import './Forms.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
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
      email: 'required|email', message: 'required'
    });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus('loading');
    try {
      const res = await contactService.submitContact(form);
      setStatus('success');
      setResponseMessage(res.message);
    } catch {
      setStatus('error');
      setResponseMessage('Message failed to send. Please try again or call us.');
    }
  };

  if (status === 'success') {
    return (
      <FormSuccessView
        title="Message Sent Successfully!"
        message={responseMessage || "Thank you for contacting Savera City! We have received your message and will get back to you within 2 hours."}
        onReset={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
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
          <label className="form-label" htmlFor="contact-name">Full Name *</label>
          <input id="contact-name" name="name" type="text" className={`form-control ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Your name" />
          {errors.name && <span className="form-error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
          <input id="contact-phone" name="phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={handleChange} placeholder="Mobile number" />
          {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-email">Email Address *</label>
        <input id="contact-email" name="email" type="email" className={`form-control ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="your@email.com" />
        {errors.email && <span className="form-error-msg">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" className="form-control" value={form.subject} onChange={handleChange} placeholder="How can we help you?" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message *</label>
        <textarea id="contact-message" name="message" className={`form-control ${errors.message ? 'error' : ''}`} rows={5} value={form.message} onChange={handleChange} placeholder="Write your message here..." />
        {errors.message && <span className="form-error-msg">{errors.message}</span>}
      </div>
      <Button type="submit" variant="primary" fullWidth loading={status === 'loading'} size="lg">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
