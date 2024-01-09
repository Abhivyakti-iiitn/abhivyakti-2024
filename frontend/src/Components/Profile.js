import React, {useEffect} from 'react';
import '../css/profile.css';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import logo from "../assets/EventPageAsst/logoPlaceHolder.svg"
import LogoComponent from './LogoComponent';
import StickyHeader from './StickyHeader';
import arr from '../assets/ProfilePage/rightarrow.png'

function Profile() {
    const navigateTo = useNavigate();
    const handleSignout = () => {
        localStorage.removeItem("usrName");
        navigateTo('/');
    }
    useEffect(() => {
        document.querySelector(".profile_heading").scrollIntoView(0);
    }, [])
    
    return (
        <>
            <StickyHeader type={1} />
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
                                <div className='user_info user_name'>Bobby Deol</div>
                                <div>bobbydeol@gmail.com</div>
                            </div>
                            <div className='mob_no'>
                                <div className='user_info'>98753243470</div>
                                <div>Indian Institute of Information Technology, Nagpur</div>
                            </div>
                        </div>
                    </div>
                    <div className='registered_events'>REGISTERED EVENTS</div>
                    <div className='events_box'>
                    <div className='card'>
                            <div className='event_pic'><img alt='' src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic'></img></div>
                            <div className='evt_detail'>
                                <div className='evt_name'>SHOWSTOPPER</div>
                                <div>Event Subtitle</div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST | By: Name of person who registered the team | Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 |
                                    <span className='close_btn'>Closed</span>
                                    <span className='lrnmr'>Learn More<img alt='' src={arr} className='rgharr'></img></span>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='event_pic'><img alt='' src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic'></img></div>
                            <div className='evt_detail'>
                                <div className='evt_name'>SHOWSTOPPER</div>
                                <div>Event Subtitle</div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST | By: Name of person who registered the team | Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 |
                                    <span className='close_btn'>Closed</span>
                                    <span className='lrnmr'>Learn More<img alt=''src={arr} className='rgharr'></img></span>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='event_pic'><img alt=''src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic'></img></div>
                            <div className='evt_detail'>
                                <div className='evt_name'>SHOWSTOPPER</div>
                                <div>Event Subtitle</div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST | By: Name of person who registered the team | Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 |
                                    <span className='close_btn'>Closed</span>
                                    <span className='lrnmr'>Learn More<img alt=''src={arr} className='rgharr'></img></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* For mobile view */}
                <div className='main_container2'>
                    <div className="user_details_head ush2">DETAILS</div>
                    <div className='user_box2'>
                        <img alt=''className='profile_pic2' src='https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/L161.png.transform/cc-width-720-height-540/image.png'></img>
                        <div className='user_details2'>
                            <div className='user_name'>Bobby Deol</div>
                            <div className='det'>Indian Institute of Information Technology, Nagpur</div>
                            <div className='det'>bobbydeol@gmail.com</div>
                            <div className='det'>98753243470</div>
                        </div>
                    </div>
                    <div className='registered_events2'>REGISTERED EVENTS</div>
                    <div className='events_box2'>
                        <div className='card'>
                            <div ><img alt=''src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic2'></img></div>
                            <div className='evt_detail2'>
                                <div><span className='evt_name2'>SHOWSTOPPER</span><span className='evt_sub'>(Event Subtitle)</span></div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST </div>
                                <div>By: Name of person who registered </div>
                                <div>Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 </div>
                                <div className='learn'>
                                    <span className='close_btn'>Closed</span>
                                    <div>Learn More<img alt=''src={arr} className='rgharr'></img></div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div ><img alt=''src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic2'></img></div>
                            <div className='evt_detail2'>
                                <div><span className='evt_name2'>SHOWSTOPPER</span><span className='evt_sub'>(Event Subtitle)</span></div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST </div>
                                <div>By: Name of person who registered </div>
                                <div>Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 </div>
                                <div className='learn'>
                                    <span className='close_btn'>Closed</span>
                                    <div>Learn More<img alt=''src={arr} className='rgharr'></img></div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div ><img alt=''src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg" className='event_pic2'></img></div>
                            <div className='evt_detail2'>
                                <div><span className='evt_name2'>SHOWSTOPPER</span><span className='evt_sub'>(Event Subtitle)</span></div>
                                <div>Registered On: 04 Jan 2024, 01:41 PM IST </div>
                                <div>By: Name of person who registered </div>
                                <div>Team Name: anything</div>
                                <div>Deadline: 15 Feb 2024 </div>
                                <div className='learn'>
                                    <span className='close_btn'>Closed</span>
                                    <div>Learn More<img alt=''src={arr} className='rgharr'></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;