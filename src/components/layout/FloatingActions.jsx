import React, { useState } from 'react';
import { MessageCircle, Phone, X, ChevronUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CONTACT_INFO } from '../../utils/constants';
import './FloatingActions.css';

const FloatingActions = () => {
  const [expanded, setExpanded] = useState(false);
  const { openEnquiryModal } = useApp();

  return (
    <div className="floating-actions" role="complementary" aria-label="Quick contact actions">
      {/* Main trigger */}
      <button
        className={`fab-trigger ${expanded ? 'fab-trigger-active' : ''}`}
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
        aria-label="Contact options"
      >
        {expanded ? <X size={22} /> : <ChevronUp size={22} />}
      </button>

      {/* Action buttons */}
      <div className={`fab-actions ${expanded ? 'fab-actions-open' : ''}`}>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I'm interested in your properties.`}
          target="_blank"
          rel="noreferrer"
          className="fab-btn fab-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="fab-label">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="fab-btn fab-call"
          aria-label="Call us"
        >
          <Phone size={20} />
          <span className="fab-label">Call Now</span>
        </a>

        {/* Enquire */}
        <button
          className="fab-btn fab-enquire"
          onClick={() => { setExpanded(false); openEnquiryModal(); }}
          aria-label="Quick enquiry"
        >
          <MessageCircle size={20} />
          <span className="fab-label">Enquire</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
