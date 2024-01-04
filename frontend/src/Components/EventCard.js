import React, { useState } from 'react'
// import imgSrc from '../assets/EventImages/a.jpg';
import showstopperImg from '../assets/EventPageAsst/showstopper.png';
import starpodImg from '../assets/EventPageAsst/starpod.png';
import beatsmithshowdownImg from '../assets/EventPageAsst/beatboxshowdown.png';
import munImg from '../assets/EventPageAsst/munmain.png';
import rhymeriotImg from '../assets/EventPageAsst/rhymeriot.png';
import defaultImg from '../assets/EventImages/a.jpg';
import { useNavigate } from 'react-router-dom';

function EventCards(props) {
    const nav = useNavigate();
    const [hovered, setHovered] = useState(false);
    let cleanedName = props.name?.toLowerCase();
    let imgSrc;

    switch (cleanedName) {
        case 'showstopper':
            imgSrc = showstopperImg;
            break;
        case 'starpod':
            imgSrc = starpodImg;
            break;
        case 'beatsmithshowdown':
            imgSrc = beatsmithshowdownImg;
            break;
        case 'mun':
            imgSrc = munImg;
            break;
        case 'rhymeriot':
            imgSrc = rhymeriotImg;
            break;
        default:
            imgSrc = defaultImg; // Set a default value or handle the case where no match is found
            break;
    }


    if (!props.exploreAllEvents) {
        return (
            <div id={props.id} className='EventCard hiddenCard' onClick={() => { nav(`/event/${props.name}`) }}>
                <div className='event-container' >

                    <div className='event__img-container' >
                        <img src={imgSrc} className='event__img' alt='event_image' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></img>

                    </div>
                    <img src={imgSrc} className='event__img_ambience' alt='event_image' style={{ opacity: hovered ? 1 : 0 }} ></img>
                    <div className='event__content'>
                        <div className='event__name'>{props.name}</div>
                        <div className='event__desc'>{props.desc}</div>
                    </div>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className='EventCard explore'>
                <div className='explore__text' onClick={()=>nav('/allevents')}>
                    Explore all events <i className="fas fa-arrow-right southeast"></i>
                </div>
            </div>
        )
    }
}

export default EventCards