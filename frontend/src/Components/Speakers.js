// components/Speakers.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';
import "../scss/speakers.scss";
import instaIcon from "../assets/speakers/socialIcon1.svg";
import linkedinIcon from "../assets/speakers/socialIcon2.svg";
import fbIcon from "../assets/speakers/socialIcon3.svg";

const Speakers = () => {
  return (
    <div className="component speaker-section">
      <div className="content">
        <h2>Speakers</h2>
        <div className="speaker-info">
          {data.speakers.map((speaker, index) => (
            <>
            <div className='speaker-content'>
            <div key={index} className="speaker">
              <p>{`${speaker.name}: ${speaker.info}`}</p>
            </div>
            <div className="social-media-icons">
                <a href={speaker.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={instaIcon} alt="Instagram" />
                </a>
                <a href={speaker.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook" />
                </a>
                <a href={speaker.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
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
