import faqData from '../../assets/faqData';
import "../../css/faq.css";
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Faq = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (sectionIndex) => {
        setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
        setActiveIndex(null); // Reset activeIndex when changing sections
    };

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const fadeIn = useSpring({
        opacity: activeIndex !== null ? 1 : 0,
    });

    return (
        <div className="faq-container">
            <div className="liner">

                <div className="line"></div>
                <h1>FAQ</h1>
                <div className="line"></div>
            </div>
            {/* {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className={`faq-question ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-header" onClick={() => toggleAnswer(index)}>
                            {faq.question}
                            <span
                                className="faq-toggle-button"
                            >
                                {activeIndex === index ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </span>
                        </div>
                        <animated.div style={fadeIn} className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                            {faq.answer}
                        </animated.div>
                    </div>
                </div>
            ))} */}
            <div className="faq-list">
                {Object.entries(faqData).map(([section, faqs], sectionIndex) => (
                    <div key={sectionIndex} className="faq-section">
                        <div className={`faq-section-header ${activeSection === sectionIndex ? 'active' : ''}`} onClick={() => toggleSection(sectionIndex)}>
                            {section}
                        </div>
                        {activeSection === sectionIndex && (
                            <div className="faq-section-content">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="faq-item">
                                        <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
                                            {faq.question}
                                            <span className="faq-toggle-button">
                                                {activeIndex === index ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                            </span>
                                        </div>
                                        <animated.div style={fadeIn} className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                            {faq.answer}
                                        </animated.div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Faq;
