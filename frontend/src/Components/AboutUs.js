// components/AboutUs.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';
import '../scss/AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="component about-us">
      <div className="content">
        <h2 className='About__heading'>About</h2>
        <p>{data.aboutUs.text}</p>
      </div>
      <div className="image">
        <img src={data.aboutUs.image} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
