import React, { useState } from 'react';
import { Maximize2, Compass, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PLOT_SIZES } from '../../utils/constants';
import { useApp } from '../../context/AppContext';
import Button from '../common/Button';
import PlotAreaChart from './PlotAreaChart';
import './PlotSizeCalculator.css';

const plotDetailsMap = {
  "600": {
    code: "SD",
    dimension: "20 Ft Frontage × 30 Ft Depth (20' × 30')",
    sqft: "600 Sq.Ft.",
    sqyd: "66.6 Sq.Yards",
    facing: "East / North / West",
    roadWidth: "30 Ft Wide Road (NH-30 Bakhtiyarpur Four Lane)",
    oneTimePrice: "₹9,00,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹9,60,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹26,000/-",
    bookingEmi: "₹16,000/-",
    agreementAmt: "₹2,40,000/- (25%)",
    emiDetails: "₹30,000 × 24 Months = ₹7,20,000/-",
    idealFor: "Starter Compact Plot / Modern Townhouse",
    highlights: ["Booking Amt: ₹26,000 (100%) / ₹16,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  },
  "1200": {
    code: "SC",
    dimension: "30 Ft Frontage × 40 Ft Depth (30' × 40')",
    sqft: "1,200 Sq.Ft.",
    sqyd: "133.3 Sq.Yards",
    facing: "East / North / South / West",
    roadWidth: "40 Ft Wide Main Road",
    oneTimePrice: "₹18,00,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹19,20,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹51,000/-",
    bookingEmi: "₹26,000/-",
    agreementAmt: "₹4,80,000/- (25%)",
    emiDetails: "₹60,000 × 24 Months = ₹14,40,000/-",
    idealFor: "Standard 3BHK Independent Villa with Car Parking",
    highlights: ["Booking Amt: ₹51,000 (100%) / ₹26,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  },
  "1500": {
    code: "SF",
    dimension: "30 Ft Frontage × 50 Ft Depth (30' × 50')",
    sqft: "1,500 Sq.Ft.",
    sqyd: "166.6 Sq.Yards",
    facing: "East / North Facing",
    roadWidth: "40 Ft Wide Road",
    oneTimePrice: "₹22,50,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹24,00,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹61,000/-",
    bookingEmi: "₹31,000/-",
    agreementAmt: "₹6,00,000/- (25%)",
    emiDetails: "₹75,000 × 24 Months = ₹18,00,000/-",
    idealFor: "Premium 3-4BHK Villa with Front Garden & Balcony",
    highlights: ["Booking Amt: ₹61,000 (100%) / ₹31,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  },
  "1800": {
    code: "SB",
    dimension: "36 Ft Frontage × 50 Ft Depth (36' × 50')",
    sqft: "1,800 Sq.Ft.",
    sqyd: "200 Sq.Yards",
    facing: "North-East Corner / East",
    roadWidth: "40 Ft & 50 Ft Avenue",
    oneTimePrice: "₹27,00,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹28,80,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹76,000/-",
    bookingEmi: "₹36,000/-",
    agreementAmt: "₹7,20,000/- (25%)",
    emiDetails: "₹90,000 × 24 Months = ₹21,60,000/-",
    idealFor: "Deluxe Duplex Villa with Double Garage",
    highlights: ["Booking Amt: ₹76,000 (100%) / ₹36,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  },
  "2400": {
    code: "SE",
    dimension: "40 Ft Frontage × 60 Ft Depth (40' × 60')",
    sqft: "2,400 Sq.Ft.",
    sqyd: "266.6 Sq.Yards",
    facing: "Highway Service Road / East Corner",
    roadWidth: "50 Ft Boulevard",
    oneTimePrice: "₹36,00,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹38,40,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹1,01,000/-",
    bookingEmi: "₹51,000/-",
    agreementAmt: "₹9,60,000/- (25%)",
    emiDetails: "₹1,20,000 × 24 Months = ₹28,80,000/-",
    idealFor: "Commercial / Twin Villa Plot",
    highlights: ["Booking Amt: ₹1,01,000 (100%) / ₹51,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  },
  "3600": {
    code: "SA",
    dimension: "50 Ft Frontage × 72 Ft Depth (50' × 72')",
    sqft: "3,600 Sq.Ft.",
    sqyd: "400 Sq.Yards",
    facing: "East-North Corner / Park Facing",
    roadWidth: "60 Ft Main Boulevard Road",
    oneTimePrice: "₹54,00,000/- (@ ₹1,500/sqft)",
    emiPrice: "₹57,60,000/- (@ ₹1,600/sqft)",
    bookingOneTime: "₹1,51,000/-",
    bookingEmi: "₹76,000/-",
    agreementAmt: "₹14,40,000/- (25%)",
    emiDetails: "₹1,80,000 × 24 Months = ₹43,20,000/-",
    idealFor: "Executive Large Plot / Twin Duplex / Commercial",
    highlights: ["Booking Amt: ₹1,51,000 (100%) / ₹76,000 (EMI)", "₹100/sqft Discount Offer Applied", "25% Agreement Amount in 1 Month"]
  }
};

const PlotSizeCalculator = () => {
  const [selectedSize, setSelectedSize] = useState("1200");
  const { openSiteVisitModal, openEnquiryModal } = useApp();

  const currentPlot = plotDetailsMap[selectedSize] || plotDetailsMap["1200"];

  const handleSelectPlotFromPaper = (plot) => {
    setSelectedSize(String(plot.sqft));
  };

  return (
    <section className="plot-calculator-section">
      <div className="container-custom">
        <div className="plot-calc-header text-center">
          <span className="badge badge-primary badge-pill">OFFICIAL TOWNSHIP SPECIFICATIONS</span>
          <h2 className="plot-calc-title">PLOT AREA & SIZE CHART</h2>
          <p className="plot-calc-sub">
            Government approved plot layout categories (SA, SB, SC, SD, SE, SF, SG) designed for maximum space utilization and Vastu compliance.
          </p>
        </div>

        <div className="plot-chart-and-calc-grid">
          {/* Paper Brochure Chart Component */}
          <div className="paper-chart-col">
            <PlotAreaChart onSelectPlot={handleSelectPlotFromPaper} activeCode={selectedSize} />
          </div>

          {/* Interactive Plot Size Viewer & Details */}
          <div className="calc-details-col">
            {/* Quick buttons */}
            <div className="plot-size-grid">
              {PLOT_SIZES.map((item) => (
                <button
                  key={item.value}
                  className={`plot-size-card ${selectedSize === item.value ? 'active' : ''}`}
                  onClick={() => setSelectedSize(item.value)}
                >
                  <div className="plot-card-header">
                    <span className="plot-sqft">{item.sqft} <small>Sq.Ft</small></span>
                    {selectedSize === item.value && <CheckCircle2 size={16} className="plot-check" />}
                  </div>
                  <div className="plot-code-badge-sm">{item.code}</div>
                  <div className="plot-dim-text">{item.dimension}</div>
                </button>
              ))}
            </div>

            {/* Selected Plot Details Card */}
            <div className="plot-detail-display">
              <div className="plot-detail-main">
                <div className="plot-visual-box">
                  <div className="plot-blueprint">
                    <div className="plot-blueprint-border">
                      <div className="plot-code-overlay-badge">{currentPlot.code}</div>
                      <div className="plot-dim-label top">{currentPlot.dimension.split('×')[0].split('(')[0].trim()}</div>
                      <div className="plot-dim-label right">{currentPlot.dimension.split('×')[1].split(')')[0].trim()}</div>
                      <div className="plot-blueprint-inner">
                        <Maximize2 size={28} className="blueprint-icon" />
                        <span className="blueprint-sqft">{currentPlot.sqft}</span>
                        <span className="blueprint-sqyd">({currentPlot.sqyd})</span>
                      </div>
                      <div className="plot-road-indicator">
                        <span>{currentPlot.roadWidth}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plot-specs-box">
                  <div className="plot-specs-header">
                    <h3>Plot Category {currentPlot.code} ({currentPlot.sqft})</h3>
                    <span className="plot-price-badge">{currentPlot.oneTimePrice}</span>
                  </div>

                  <div className="plot-spec-rows">
                    <div className="spec-row">
                      <span className="spec-label"><Maximize2 size={15} /> 100% One-Time Price:</span>
                      <span className="spec-val highlight-val">{currentPlot.oneTimePrice} (Booking: {currentPlot.bookingOneTime})</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label"><Compass size={15} /> Full EMI Plan (24 Mos):</span>
                      <span className="spec-val">{currentPlot.emiPrice} (Booking: {currentPlot.bookingEmi})</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label"><ShieldCheck size={15} /> EMI Breakdown:</span>
                      <span className="spec-val">{currentPlot.emiDetails}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Ideal Building Design:</span>
                      <span className="spec-val">{currentPlot.idealFor}</span>
                    </div>
                  </div>

                  <div className="plot-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {currentPlot.highlights.map((h, i) => (
                        <li key={i}><CheckCircle2 size={15} className="list-check" /> {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="plot-action-btns">
                    <Button variant="primary" onClick={openSiteVisitModal}>
                      Book Free Site Visit for Plot {currentPlot.code}
                    </Button>
                    <Button variant="outline" onClick={openEnquiryModal}>
                      Enquire Availability <ArrowRight size={15} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotSizeCalculator;
