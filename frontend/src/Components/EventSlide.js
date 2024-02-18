import React from 'react';
import showstopperImgSrc from '../assets/EventPageAsst/showstopper.png'
import starpodImgSrc from '../assets/EventPageAsst/starpod.png'
import beatsmithshowdownImgSrc from '../assets/EventPageAsst/beatboxshowdown.png'
import munImg from '../assets/EventPageAsst/munmainbg.png';
import admads from '../assets/EventPageAsst/AD Mad.png';
import kavisammelan from '../assets/EventPageAsst/KAVI SAMMELAN.png';
import groovegenesis from '../assets/EventPageAsst/Groove Genesis(Instrumental).png';
import andhakaar from '../assets/EventPageAsst/ANDHKAAR (Stage Play).png';
import bahumukhi from '../assets/EventPageAsst/BAHUMUKHI (Monoact).png';
import dastaanechhotaparda from '../assets/EventPageAsst/Dastaan-e-Chhota.png';
import bronxbattleground from '../assets/EventPageAsst/Bronx Battleground.png';
import roadtoredcarpet from '../assets/EventPageAsst/Road to red carpet.png';
import rhymeriotImg from '../assets/EventPageAsst/rhymeriotbg.png';
import praanant from '../assets/EventPageAsst/praanant.png';
import rythmrumble from '../assets/EventPageAsst/RHYTHM RUMBLE.png';
import stellarsingoff from '../assets/EventPageAsst/Steller singOff.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import defaultImg from '../assets/EventImages/a.jpg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const eventImages = {
    showstopper: showstopperImgSrc,
    starpod: starpodImgSrc,
    beatsmithshowdown: beatsmithshowdownImgSrc,
    modelunitednations: munImg,
    rhymeriot: rhymeriotImg,
    kavisammelan: kavisammelan,
    admads: admads,
    dastaanechhotaparda: dastaanechhotaparda,
    andhakaar: andhakaar,
    bahumukhi: bahumukhi,
    groovegenesis: groovegenesis,
    bronxbattleground: bronxbattleground,
    roadtoredcarpet: roadtoredcarpet,
    stellarsingoff: stellarsingoff,
    praanant: praanant,
    rythmrumble: rythmrumble


};

const EventSlide = (props) => {
    const nav = useNavigate();
    const imgSrc = eventImages[props.event.name.toLowerCase().replaceAll(' ', '').replaceAll('-', '').split('(')[0]] || defaultImg;

    const contentStyle = {
        width: '100%',
        backgroundPosition: 'center',
    };

    const isRegistrationDateValid = (registrationDate) => {
        const [day, month, year] = registrationDate.split('/').map(Number);
        const registrationDateObj = new Date(2000 + year, month - 1, day+1);
        const currentDate = new Date();
      
        return currentDate <= registrationDateObj;
      }

    const handleRegisterClick = () => {
        if(isRegistrationDateValid(props.event.registrationDate))
            nav(`/form/${props.event.name.toLowerCase().replaceAll(' ', '')}`);
        else 
            toast.error(`Registration Closed for ${props.event.name}`);
    }

    return (
        <>
            <div className='EventSlide'>
                <div className='EventSlide__Img'>
                    <img className='EventImage' src={imgSrc} />
                </div>
                <div className={`EventSlide__Content ${props.event.name.toLowerCase().replaceAll(' ', '').replaceAll('(mun)','')}`} style={contentStyle}>
                    <div className="blur">

                        <div className='EventSlide__text'>
                            <div className={`EventSlide__name ${props.event.name?.length > 15 ? "longcardename" : "shortcardename"}`}>{props.event.name}</div>
                            <div className='EventSlide__desc'>{props.event?.tagline}</div>
                            <div className='EventSlide__learnmore' onClick={() => { nav(`/event/${props.event.name.toLowerCase().replaceAll(' ', '').replaceAll("(mun)","")}`) }}>Learn More <ArrowForwardIcon className='EventSlide__learnmore-Arrow' fontSize='small' /> </div>
                        </div>
                        <div className='EventSlide__btn'>
                            <button className='EventRegBtn' onClick={handleRegisterClick}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventSlide