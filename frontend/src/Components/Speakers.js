// components/Speakers.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';

const Speakers = () => {
  return (
    <div className="speaker-section">
      <div className="content">
        <h2>Speaker Section</h2>
        <div className="speaker-info">
          {data.speakers.map((speaker, index) => (
            <div key={index} className="speaker">
              <img src={speaker.image} alt={`Speaker ${index + 1}`} />
              <p>{`${speaker.name}: ${speaker.info}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
