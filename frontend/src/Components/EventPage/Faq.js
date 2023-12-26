import faqData from '../../assets/faqData';
import "../../css/faq.css";
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

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
            {faqData.map((faq, index) => (
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
            ))}
        </div>
    );
};

export default Faq;
