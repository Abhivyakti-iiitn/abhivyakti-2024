import faqData from '../../assets/faqData';
import "../../css/faq.css";
import '../../css/faqNew.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Faq = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (sectionIndex) => {
        console.log(sectionIndex);
        setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
    };

    const toggleAnswer = (sectionIndex, index) => {
        setActiveSection(sectionIndex);
        setActiveIndex(activeIndex !== null ? null : index);
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
            <div className='faq-main'>
                {activeSection!==null ?
                    (Object.keys(faqData).map((category, categoryIndex) => {
                        if (categoryIndex === activeSection) {
                            return (
                                <div key={categoryIndex} className="faq-category">
                                    <div className='faq-categorycontainer'>
                                        <h2 className='faq-categoryName faq-question' >{category}</h2>
                                        <i onClick={() => toggleSection(categoryIndex)} className='fas fa-arrow-left'></i>
                                    </div>
                                    {faqData[category].map((faq, index) => (
                                        <div key={index} className="faq-item">
                                            <div className={`faq-question ${activeIndex === index ? 'active' : ''}`}>
                                                <div className="faq-header" onClick={() => toggleAnswer(categoryIndex, index)}>
                                                    {faq.question}
                                                    <span className="faq-toggle-button">
                                                        {activeIndex === index ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                                    </span>
                                                </div>
                                                <animated.div style={fadeIn} className={`faq-answer ${activeIndex === index && activeSection === categoryIndex ? 'show' : ''}`}>
                                                    {faq.answer}
                                                </animated.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })) :
                    (
                        <div className='faq-sections'>
                            {Object.keys(faqData).map((category, categoryIndex) => (
                                <div key={categoryIndex} className='faq-item faq-section' onClick={() => toggleSection(categoryIndex)}>
                                    <h2 key={categoryIndex} 
                                        className='faq-categoryHeading faq-question faq-header'
                                    >
                                        {category}
                                    </h2>
                                    <i key={categoryIndex} className='fas fa-arrow-right'></i>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Faq;
