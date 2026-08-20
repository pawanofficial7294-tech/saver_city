import React from 'react';
import './Logo.css';

const Logo = ({ variant = 'default', size = 'medium', showTagline = true, className = '' }) => {
  // size options: 'small', 'medium', 'large'
  // variant options: 'default' (dark/colored text), 'light' (white text for dark bg), 'stacked'

  return (
    <div className={`savera-logo savera-logo-${size} savera-logo-${variant} ${className}`}>
      <div className="savera-logo-graphic">
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="savera-logo-svg">
          <defs>
            <linearGradient id="sunGradient" x1="200" y1="20" x2="200" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="roofGradient" x1="50" y1="120" x2="350" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E4D2B" />
              <stop offset="50%" stopColor="#2D6A4F" />
              <stop offset="100%" stopColor="#1E4D2B" />
            </linearGradient>
          </defs>

          {/* Sun Rays */}
          <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
            <line x1="200" y1="10" x2="200" y2="22" />
            <line x1="160" y1="20" x2="166" y2="30" />
            <line x1="240" y1="20" x2="234" y2="30" />
            <line x1="125" y1="40" x2="135" y2="48" />
            <line x1="275" y1="40" x2="265" y2="48" />
            <line x1="100" y1="70" x2="112" y2="76" />
            <line x1="300" y1="70" x2="288" y2="76" />
            <line x1="85" y1="105" x2="98" y2="108" />
            <line x1="315" y1="105" x2="302" y2="108" />
          </g>

          {/* Rising Sun */}
          <path d="M 120 135 A 80 80 0 0 1 280 135 Z" fill="url(#sunGradient)" />

          {/* Pine Trees */}
          {/* Back/Smaller Trees */}
          <path d="M 148 135 L 155 110 L 152 110 L 157 95 L 154 95 L 160 80 L 166 95 L 163 95 L 168 110 L 165 110 Z" fill="#1B4332" />
          <path d="M 235 135 L 241 110 L 238 110 L 243 95 L 240 95 L 246 80 L 252 95 L 249 95 L 254 110 L 251 110 Z" fill="#1B4332" />
          
          {/* Main Central Trees */}
          <path d="M 180 135 L 188 100 L 184 100 L 192 70 L 187 70 L 195 40 L 200 28 L 205 40 L 213 70 L 208 70 L 216 100 L 212 100 L 220 135 Z" fill="#1B4332" />
          <path d="M 165 135 L 172 105 L 169 105 L 175 80 L 171 80 L 178 55 L 184 80 L 180 80 L 186 105 L 183 105 L 190 135 Z" fill="#2D6A4F" />
          <path d="M 210 135 L 217 105 L 214 105 L 220 80 L 216 80 L 223 55 L 229 80 L 225 80 L 231 105 L 228 105 L 235 135 Z" fill="#2D6A4F" />

          {/* Outer edge trees */}
          <path d="M 135 135 L 140 115 L 138 115 L 143 100 L 148 115 L 146 115 L 151 135 Z" fill="#1B4332" />
          <path d="M 250 135 L 254 115 L 252 115 L 257 100 L 262 115 L 260 115 L 265 135 Z" fill="#1B4332" />

          {/* Roof & Plot Boundary Structure */}
          <path d="M 50 145 L 200 90 L 350 145 L 342 153 L 200 102 L 58 153 Z" fill="url(#roofGradient)" />
          <path d="M 75 147 L 200 105 L 325 147 L 320 152 L 200 110 L 80 152 Z" fill="#40916C" />

          {/* Windows / Plot Grid icon */}
          <g fill="#1E4D2B">
            <rect x="190" y="115" width="8" height="8" rx="1" />
            <rect x="202" y="115" width="8" height="8" rx="1" />
            <rect x="190" y="127" width="8" height="8" rx="1" />
            <rect x="202" y="127" width="8" height="8" rx="1" />
          </g>

          {/* Bottom Leaf Accent */}
          <path d="M 188 178 C 182 170, 192 160, 200 168 C 200 168, 196 178, 188 178 Z" fill="#52B788" />
          <path d="M 212 178 C 218 170, 208 160, 200 168 C 200 168, 204 178, 212 178 Z" fill="#2D6A4F" />

          {/* Separator Lines */}
          <line x1="70" y1="173" x2="182" y2="173" stroke="#2D6A4F" strokeWidth="1.5" />
          <line x1="218" y1="173" x2="330" y2="173" stroke="#2D6A4F" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="savera-logo-text">
        <span className="savera-logo-title">SAVERA CITY</span>
        {showTagline && (
          <span className="savera-logo-tagline">
            LAND & PLOT DEVELOPERS
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
