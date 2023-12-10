// components/AboutUs.js

import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content">
        <h2>About Us</h2>
            <p>{data.aboutUs.text}</p>
            <img src={data.aboutUs.image} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
