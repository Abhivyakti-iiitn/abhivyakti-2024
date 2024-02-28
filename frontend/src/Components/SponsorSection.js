// components/SponsorSection.js
import React from 'react';

const SponsorSection = ({ title, sponsors }) => {
  if (!sponsors) {
    return null; // Return null or handle appropriately
  }

  return (
    <div className="sponsor-section">
      <h3>{title}</h3>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor} alt={`Sponsor ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SponsorSection;
