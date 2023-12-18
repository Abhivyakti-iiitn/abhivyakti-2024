// components/PastGlimpses.js

import React from 'react';
import data from '../assets/data';
import '../scss/PastGlimpses.scss';

const PastGlimpses = () => {
  return (
    <div className="container__past-glimpses">
      <div className="pg__content">
        <h2 className='PastGlimpse__heading'>Past Glimpses</h2>
      </div>
      <div className="image-grid">
        {data.pastGlimpsesImages.map((image, index) => (
          <img key={index} src={image} alt={`Past Glimpse ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PastGlimpses;
