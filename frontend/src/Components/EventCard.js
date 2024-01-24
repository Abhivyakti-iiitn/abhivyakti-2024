import React, { useState } from 'react'
// import imgSrc from '../assets/EventImages/a.jpg';
import showstopperImg from '../assets/EventPageAsst/showstopper.png';
import stellarsingoff from '../assets/EventPageAsst/Steller singOff.png';
import praanant from '../assets/EventPageAsst/praanant.png';
import rythmrumle from '../assets/EventPageAsst/RHYTHM RUMBLE.png';
import rhymeriotImg from '../assets/EventPageAsst/rhymeriotbg.png';
import beatsmithshowdown from '../assets/EventPageAsst/beatboxshowdown.png';
import bronxbattleground from '../assets/EventPageAsst/Bronx Battleground.png';
import mun from '../assets/EventPageAsst/munmain.png';
import roadtoredcarpet from '../assets/EventPageAsst/Road to red carpet.png'
import defaultImg from '../assets/EventImages/a.jpg';
import { useNavigate } from 'react-router-dom';

function EventCards(props) {
    const nav = useNavigate();
    const [hovered, setHovered] = useState(false);
    let cleanedName = props.name?.toLowerCase().replaceAll(' ','');
    let imgSrc;

    switch (cleanedName) {
        case 'showstopper':
            imgSrc = showstopperImg;
            break;
        case 'stellarsing-off':
            imgSrc = stellarsingoff;
            break;
        case 'rythmrumble':
            imgSrc = rythmrumle;
            break;
        case 'roadtoredcarpet':
            imgSrc = roadtoredcarpet;
            break;
        case 'praanant':
            imgSrc = praanant;
            break;
        case 'rhymeriot':
            imgSrc = rhymeriotImg;
            break;
        case 'modelunitednations(mun)':
            imgSrc = mun;
            break;
        case 'beatsmithshowdown':
            imgSrc = beatsmithshowdown;
            break;
        case 'bronxbattleground':
            imgSrc = bronxbattleground;
            break;
        default:
            imgSrc = defaultImg; // Set a default value or handle the case where no match is found
            break;
    }


    if (!props.exploreAllEvents) {
        return (
            <div id={props.id} className='EventCard hiddenCard' onClick={() => { nav(`/event/${props.name.toLowerCase().replaceAll(' ', '')}`) }}>
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