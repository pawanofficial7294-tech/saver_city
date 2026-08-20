import React from 'react';
import { Home, Droplets, Activity, Smile, Shield, Zap, Eye, Calendar, ParkingCircle, TreePine } from 'lucide-react';
import './PropertyAmenities.css';

const iconMap = {
  Clubhouse: Home, 'Swimming Pool': Droplets, Gym: Activity,
  "Children's Play Area": Smile, 'Landscaped Garden': TreePine,
  Security: Shield, Parking: ParkingCircle, 'Power Backup': Zap,
  CCTV: Eye, 'Community Hall': Calendar
};

const PropertyAmenities = ({ amenities }) => {
  return (
    <div className="amenities-grid">
      {amenities.map((name) => {
        const Icon = iconMap[name] || Shield;
        return (
          <div key={name} className="amenity-item">
            <div className="amenity-icon">
              <Icon size={22} />
            </div>
            <span className="amenity-name">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyAmenities;
