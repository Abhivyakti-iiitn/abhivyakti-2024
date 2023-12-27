import React from 'react';
import showstopperImgSrc from '../assets/EventPageAsst/showstopper.png'
import starpodImgSrc from '../assets/EventPageAsst/starpod.png'
import beatsmithshowdownImgSrc from '../assets/EventPageAsst/beatboxshowdown.png'
import munImg from '../assets/EventPageAsst/munmain.png';
import rhymeriotImg from '../assets/EventPageAsst/rhymeriot.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const eventImages = {
    showstopper: showstopperImgSrc,
    starpod: starpodImgSrc,
    beatsmithShowdown: beatsmithshowdownImgSrc,
};

const EventSlide = (props) => {
    const nav = useNavigate();
    const imgSrc = eventImages[props.event.name] || '';

    const contentStyle = {
        backgroundImage: `url(${imgSrc})`,
        width: '100%',
        backgroundPosition: 'center',
    };

    return (
        <div className='EventSlide'>
            <div className='EventSlide__Img'>
                <img className='EventImage' src={imgSrc} />
            </div>
            <div className='EventSlide__Content' style={contentStyle}>
                <div className="blur">

                    <div className='EventSlide__text'>
                        <div className='EventSlide__name'>{props.event.name}</div>
                        <div className='EventSlide__desc'>Description</div>
                        <div className='EventSlide__learnmore' onClick={() => { nav(`/event/${props.event.name}`) }}>Learn More <ArrowForwardIcon className='EventSlide__learnmore-Arrow' fontSize='small' /> </div>
                    </div>
                    <div className='EventSlide__btn'>
                        <button className='EventRegBtn'>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSlide