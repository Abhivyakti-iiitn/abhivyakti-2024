// components/Speakers.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';
import '../scss/speakers.scss';
import instaIcon from '../assets/speakers/socialIcon1.svg';
import linkedinIcon from '../assets/speakers/socialIcon2.svg';
import fbIcon from '../assets/speakers/socialIcon3.svg';

const Speakers = () => {
  return (
    <div className="component speaker-section">
      <div className="content">
        <div className="speaker-info">
          {data.speakers.map((speaker, index) => (
            <div key={index} className="speaker">
              <div className='speaker-content'>
                <p className='leftSideText'>
                  <h3 className='speaker__name'>{speaker.name}</h3>
                  <div className='speaker__info'>{speaker.info} </div>
                </p>
                <div className="social-media-icons">
                  <p>|</p>
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
              <img className="speaker__header" src={speaker.image} alt={`Speaker ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
