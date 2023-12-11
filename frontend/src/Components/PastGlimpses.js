// components/PastGlimpses.js

import React from 'react';
import "../scss/PastGlimpses.scss";
import data from '../assets/data';

const PastGlimpses = () => {
  return (
    <div className="component past-glimpses">
      <div className="content">
        <h2>Past Glimpses</h2>
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
