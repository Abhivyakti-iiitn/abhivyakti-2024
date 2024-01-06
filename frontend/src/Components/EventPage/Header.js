import React from 'react'
import "../../css/Eventheader.css"
import { useNavigate } from "react-router-dom";
// import logo from "../../assets/EventPageAsst/logoPlaceHolder.svg"
import estória from "../../assets/Clubs Logo/estoria logo(chest left).png"
import crescendo from '../../assets/Clubs Logo/crescendo-logo--01 (3).png'
import orator from '../../assets/Clubs Logo/orator logo.png';
import probe from '../../assets/Clubs Logo/probe.png';
import dtaraxia from '../../assets/Clubs Logo/dtaraxia.png';
import LogoComponent from '../LogoComponent';

const logoData = {
    estória: estória,
    crescendo: crescendo,
    orator: orator,
    probe: probe,
    dtaraxia: dtaraxia,
}
function Header(props) {
    // console.log("sad", props.event)
    const navigateTo = useNavigate();
    const logoImg = logoData[props.clubName.toLowerCase().replace(' ', '').replace('-', '')];

    return (
        <>
            <div className={`event_header ${props.raw?.toLowerCase().replace(' ', '').split('(')[0]}`} >
                <div div className='top' >
                    <div className="left">
                        <ul>
                            <LogoComponent />
                            <li><div></div></li>
                            <li onClick={()=>window.open("https://www.instagram.com/abhivyakti_iiitn/", '_blank', 'noopener,noreferrer')}><i className="fa-brands fa-instagram"></i></li>
                            <li onClick={()=>window.open("https://www.linkedin.com/in/abhivyakti-iiitn/", '_blank', 'noopener,noreferrer')}><i className="fa-brands fa-linkedin"></i></li>
                            {/* <li onClick={()=>window.open("https://www.linkedin.com/in/abhivyakti-iiitn/", '_blank')}><i className="fa-brands fa-facebook"></i></li> */}
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li onClick={() => document.querySelector('.EventDetailsSection').scrollIntoView(1)}>DETAILS</li>
                            <li onClick={() => document.querySelector('.roundsAndTimline').scrollIntoView(1)}>TIMELINE</li>
                            <li onClick={() => document.querySelector('.rulesAndRegulation').scrollIntoView(1)}>RULES</li>
                            <li onClick={() => document.querySelector('.prize').scrollIntoView(1)}>PRIZES</li>
                            <li onClick={() => document.querySelector('.faq-container').scrollIntoView(1)}>FAQs</li>
                            <li onClick={() => navigateTo('/allevents')}>EVENTS</li>
                            <li onClick={() => document.querySelector('.contact').scrollIntoView(1)}>CONTACT</li>
                        </ul>
                    </div>
                </div >
                <div className="mid">
                    <div className="mid_left">

                        <h1 className={`${props.name?.length > 15 ? "longhname" : "shorthname"}`}>{props.name} <br></br></h1>
                        <h2>{props.tagline}</h2>
                    </div>
                    <div className="mid_right">
                        <h4>Brought to you by</h4>
                        <p><span><img src={logoImg} alt="clublogo" srcSet="" /><br />
                            {props.clubName}</span></p>
                        <h4 style={{ display: 'none' }}>sponsored by</h4>
                        <p style={{ display: 'none' }}><img src={logoImg} alt="clublogo" srcSet="" /><img src={logoImg} alt="clublogo" srcSet="" /><img src={logoImg} alt="clublogo" srcSet="" /></p>
                    </div>
                </div>
            </div >
            <div className="blur_portion">

            </div>
        </>
    )
}

export default Header