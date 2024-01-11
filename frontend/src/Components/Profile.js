import React, { useEffect, useContext, useState } from 'react';
import '../css/profile.css';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogoComponent from './LogoComponent';
import StickyHeader from './StickyHeader';
import arr from '../assets/ProfilePage/rightarrow.png'
import NewContext from '../context/NewContext';
import eventContent from "../assets/EventContent.json"
import showstopperImg from '../assets/EventPageAsst/showstopper.png';
import stellarsingoff from '../assets/EventPageAsst/Steller singOff.png';
import praanant from '../assets/EventPageAsst/praanant.png';
import rythmrumle from '../assets/EventPageAsst/RHYTHM RUMBLE.png';
import rhymeriotImg from '../assets/EventPageAsst/rhymeriotbg.png';
import beatsmithshowdown from '../assets/EventPageAsst/beatboxshowdown.png';
import bronxbattleground from '../assets/EventPageAsst/Bronx Battleground.png';
import andhakaar from '../assets/EventPageAsst/ANDHKAAR (Stage Play).png';
import bahumukhi from '../assets/EventPageAsst/BAHUMUKHI (Monoact).png';
import groovegenesis from '../assets/EventPageAsst/Groove Genesis(Instrumental).png'
import mun from '../assets/EventPageAsst/munmain.png';
import roadtoredcarpet from '../assets/EventPageAsst/Road to red carpet.png';
import defaultImg from '../assets/EventImages/a.jpg';


function Profile() {
    const navigateTo = useNavigate();
    const context = useContext(NewContext);

    const [eventData, seteventData] = useState(null);
    const handleSignout = () => {
        window.localStorage.removeItem("access_token");
        context.setuserData(null);
        navigateTo('/login');
    }

    const pickImage = (name) => {
        let imgSrc = "";
        switch (name) {
            case 'showstopper':
                imgSrc = showstopperImg;
                break;
            case 'andhakaar':
                imgSrc = andhakaar;
                break;
            case 'bahumukhi':
                imgSrc = bahumukhi;
                break;
            case 'groovegenesis':
                imgSrc = groovegenesis;
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
            case 'modelunitednations':
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

        return imgSrc;
    }
    const fetchEvent = async () => {
        const data = await context.fetchEventData(window.localStorage.getItem("access_token"));

        if (data.success) {
            seteventData(data.datajson);
        } else {
            toast.error("Failed to fetch Events!");
            toast.error(data.msg);
        }

    }

    useEffect(() => {
        document.querySelector(".profile_heading").scrollIntoView(0);
        fetchEvent();

    }, [])

    return (
        <>
            <StickyHeader type={1} handleSignout={handleSignout} />
            <div className='profile_page'>
                <div className='profile_heading'>
                    <div class="horizontal-line1"></div>
                    <h1 className='profile'>PROFILE</h1>
                    <div class="horizontal-line1"></div>
                </div>
                {/* For laptop view */}
                <div className='main_container'>
                    <div className="user_details_head">DETAILS</div>
                    <div className='user_box'>
                        <img className='profile_pic' src='https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/L161.png.transform/cc-width-720-height-540/image.png' alt=''></img>
                        <div className='user_details'>
                            <div>
                                <div className='user_info user_name'>{context.userData?.username}</div>
                                <div>{context.userData?.email}</div>
                            </div>
                            <div className='mob_no'>
                                <div className='user_info'>{context.userData?.phone}</div>
                                <div>{context.userData?.college}</div>
                            </div>
                        </div>
                    </div>
                    <div className='registered_events'>REGISTERED EVENTS</div>
                    <div className='events_box'>
                        {eventData && Object.keys(eventData).map(el => {

                            let date = new Date(eventData[el]?.date);
                            let istTime = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

                            return eventData[el] && <div className='card' >
                                <div className='event_pic'><img alt='' src={pickImage(el.toLowerCase())} className='event_pic'></img></div>
                                <div className='evt_detail'>
                                    <div className='evt_name'>{eventContent[el.toLowerCase()]?.name}</div>
                                    <div>{eventContent[el.toLowerCase()]?.tagline}</div>
                                    <div>{`Registered On: ${istTime} | By: ${eventData[el]?.regBy} ${eventData[el]?.teamName ? "| Team Name: " + eventData[el]?.teamName : ""}`}</div>
                                    <div>{"Deadline: " + eventContent[el.toLowerCase()]?.registrationDate}

                                        <span className='lrnmr' onClick={() => navigateTo(`/event/${el.toLowerCase()}`)} style={{ cursor: 'pointer' }}>Learn More<img alt='' src={arr} className='rgharr'></img></span>
                                    </div>
                                </div>
                            </div>
                        }
                        )}



                    </div>
                </div>


                {/* For mobile view */}
                <div className='main_container2'>
                    <div className="user_details_head ush2">DETAILS</div>
                    <div className='user_box2'>
                        <img alt='' className='profile_pic2' src='https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/L161.png.transform/cc-width-720-height-540/image.png'></img>
                        <div className='user_details2'>
                            <div className='user_name'>{context.userData?.username}</div>
                            <div className='det'>{context.userData?.college}</div>
                            <div className='det'>{context.userData?.email}</div>
                            <div className='det'>{context.userData?.phone}</div>
                        </div>
                    </div>
                    <div className='registered_events2'>REGISTERED EVENTS</div>
                    <div className='events_box2'>
                        {eventData && Object.keys(eventData).map(el => {

                            let date = new Date(eventData[el]?.date);
                            let istTime = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

                            return eventData[el] && <div className='card'>
                                <div ><img alt='' src={pickImage(el.toLowerCase())} className='event_pic2'></img></div>
                                <div className='evt_detail2'>
                                    <div><span className='evt_name2'>{eventContent[el.toLowerCase()]?.name}</span><span className='evt_sub'>{"(" + eventContent[el.toLowerCase()]?.tagline + ")"}</span></div>
                                    <div>{istTime} </div>
                                    <div>{"By: " + eventData[el]?.regBy} </div>
                                    {eventData[el]?.teamName && <div>{"Team Name: " + eventData[el]?.teamName}</div>}
                                    <div>{"Deadline: " + <div>eventContent[el.toLowerCase()]?.registrationDate</div>
                                    }</div>
                                    <div className='learn'>
                                        <div style={{ cursor: 'pointer' }} onClick={() => navigateTo(`/event/${el.toLowerCase()}`)}>Learn More<img alt='' src={arr} className='rgharr'></img></div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;