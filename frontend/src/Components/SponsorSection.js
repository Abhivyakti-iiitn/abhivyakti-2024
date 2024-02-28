// components/SponsorSection.js
import React from 'react';

const SponsorSection = ({ title, sponsors }) => {
  if (!sponsors) {
    return null; // Return null or handle appropriately
  }

  const style = {
    "Title Sponsors": {
      maxHeight: '16vh'
    },
    "Co-Sponsors": {
      maxHeight: '8vh'
    },
    "Powered By": {
      maxHeight: '8vh'
    },
    "Associate Sponsor": {
      maxHeight: '8vh'
    },
  };


  return (
    <div className="sponsor-section">
      <h3>{title}</h3>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor} style={style[title]} alt={`Sponsor ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SponsorSection;
