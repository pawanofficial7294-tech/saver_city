import React from 'react';
import { CheckCircle, Download, Map, RefreshCw } from 'lucide-react';
import Button from '../common/Button';
import { useApp } from '../../context/AppContext';
import layoutMapImg from '../../assets/savera_city_layout_map.png';
import './Forms.css';

const FormSuccessView = ({
  title = "Thank You! Request Submitted",
  message = "Your submission has been received successfully. Our plot specialist will get in touch with you shortly.",
  onReset
}) => {
  const { openLayoutMapModal } = useApp();

  return (
    <div className="form-success-card">
      <div className="form-success-header">
        <div className="form-success-icon-wrap">
          <CheckCircle size={44} className="form-success-icon" />
        </div>
        <h3 className="form-success-title">{title}</h3>
        <p className="form-success-msg">{message}</p>
      </div>

      {/* Map Download Bonus Box */}
      <div className="form-success-download-box">
        <div className="download-box-badge">FREE DOWNLOAD</div>
        <div className="download-box-content">
          <div className="download-box-icon">
            <Map size={24} />
          </div>
          <div className="download-box-text">
            <h4>Savera City Master Layout Map</h4>
            <p>Official layout plan with plot demarcations &amp; road dimensions</p>
          </div>
        </div>

        <div className="download-box-actions">
          <a
            href={layoutMapImg}
            download="Savera_City_Layout_Map.png"
            className="btn btn-primary btn-md download-btn-highlight"
          >
            <Download size={18} /> Download Layout Map
          </a>
          <Button
            variant="outline"
            size="md"
            onClick={openLayoutMapModal}
            icon={<Map size={18} />}
          >
            View Interactive Map
          </Button>
        </div>
      </div>

      {onReset && (
        <button type="button" className="form-reset-link" onClick={onReset}>
          <RefreshCw size={13} /> Submit Another Request
        </button>
      )}
    </div>
  );
};

export default FormSuccessView;
