import React, { useEffect } from 'react'
import "../../css/Eventheader.css"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/EventPageAsst/logoPlaceHolder.svg"
import LogoComponent from '../LogoComponent';

function Header(props) {
    // console.log("sad", props.event)
    const navigateTo = useNavigate();


    return (
        <>
            <div className={`event_header ${props.raw?.toLowerCase().replace(' ', '')}`} >
                <div div className='top' >
                    <div className="left">
                        <ul>
                            <LogoComponent />
                            <li><div></div></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                            <li><i class="fa-brands fa-facebook"></i></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li onClick={()=>document.querySelector('.EventDetailsSection').scrollIntoView(1)}>DETAILS</li>
                            <li onClick={()=>document.querySelector('.roundsAndTimline').scrollIntoView(1)}>TIMELINE</li>
                            <li onClick={()=>document.querySelector('.rulesAndRegulation').scrollIntoView(1)}>RULES</li>
                            <li onClick={()=>document.querySelector('.prize').scrollIntoView(1)}>PRIZES</li>
                            <li onClick={()=>document.querySelector('.faq-container').scrollIntoView(1)}>FAQs</li>
                            <li>EVENTS</li>
                            <li onClick={()=>document.querySelector('.contact').scrollIntoView(1)}>CONTACT</li>
                        </ul>
                    </div>
                </div >
                <div className="mid">
                    <div className="mid_left">

                        <h1 className={`${props.name?.length > 15 ? "longhname":"shorthname"}`}>{props.name} <br></br></h1>
                        <h2>{props.tagline}</h2>
                    </div>
                    <div className="mid_right">
                        <h4>Brought to you by</h4>
                        <p><span><img src={logo} alt="clublogo" srcset="" /><br />
                            club Name</span></p>
                        <h4>sponsored by</h4>
                        <p><img src={logo} alt="clublogo" srcset="" /><img src={logo} alt="clublogo" srcset="" /><img src={logo} alt="clublogo" srcset="" /></p>
                    </div>
                </div>
            </div >
            <div className="blur_portion">
                
            </div>
        </>
    )
}

export default Header