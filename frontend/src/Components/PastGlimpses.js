// components/PastGlimpses.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';

const PastGlimpses = () => {
  return (
    <div className="past-glimpses">
      <div className="content">
        <h2>Past Glimpses</h2>
        <div className="image-grid">
          {data.pastGlimpsesImages.map((image, index) => (
            <motion.img key={index} src={image} alt={`Past Glimpse ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastGlimpses;
