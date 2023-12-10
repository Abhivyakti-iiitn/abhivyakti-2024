// components/Speakers.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';
import "../scss/speakers.scss";

const Speakers = () => {
  return (
    <div className="component speaker-section">
      <div className="content">
        <h2>Speakers</h2>
        <div className="speaker-info">
          {data.speakers.map((speaker, index) => (
            <>
            <div key={index} className="speaker">
              <p>{`${speaker.name}: ${speaker.info}`}</p>
            </div>
            <div key={index} className="speaker">
            <img src={speaker.image} alt={`Speaker ${index + 1}`} />
            </div>
            </>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default Speakers;
