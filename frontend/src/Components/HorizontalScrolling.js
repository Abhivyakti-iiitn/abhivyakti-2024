// components/HorizontalScrolling.js

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AboutUs from './AboutUs';
import PastGlimpses from './PastGlimpses';
import Speakers from './Speakers';

import '../scss/HorizontalScrollingSection.scss'; // Replace with the path to your SCSS file

const HorizontalScrolling = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <>
      <div ref={targetRef} className="horizontal-scrolling">
        <div className="sticky-container">
          <div className="background-image"></div>
          <motion.div style={{ x }} className="motion-div">
            <AboutUs />
            <PastGlimpses />
            {/* <Speakers /> */}
          </motion.div>
        </div>
      </div>

      <div className="vertical-scrolling">
      <AboutUs />
      <PastGlimpses />
      {/* <Speakers /> */}
      </div>
</>
  );
};

export default HorizontalScrolling;
