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
    <section ref={targetRef} className="horizontal-scrolling">
      <div className="sticky-container">
        <motion.div style={{ x }} className="motion-div">
          <div className="component-wrapper">
            <AboutUs />
          </div>
          <div className="component-wrapper">
            <PastGlimpses />
          </div>
          <div className="component-wrapper">
            <Speakers />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrolling;


