// components/HorizontalScrollingComponent.js

import React from 'react';
import AboutUs from './AboutUs';
import PastGlimpses from './PastGlimpses';
import Speakers from './Speakers';
import "../css/HorizontalScrollingSection.scss"
const HorizontalScrollingComponent = () => {
  return (
    <div className="horizontal-scrolling-section">
      <AboutUs />
      <PastGlimpses />
      <Speakers />
    </div>
  );
};

export default HorizontalScrollingComponent;
