import React from 'react';
import '../css/profile.css';
import Footer from './Footer';
import {useNavigate} from "react-router-dom";
import logo from "../assets/EventPageAsst/logoPlaceHolder.svg"
import LogoComponent from './LogoComponent';
import StickyHeader from './StickyHeader';

function Profile() {
    const navigateTo = useNavigate(); 
    const handleSignout = () =>{
        localStorage.removeItem("usrName");
        navigateTo('/');
    }
    return (
        <>
           <StickyHeader type = {1}/>
            <div className='profile_page'>
                <div className='profile_heading'>
                    <div class="horizontal-line1"></div>
                    <h1 className='profile'>PROFILE</h1>
                    <div class="horizontal-line1"></div>
                </div>
                <div className='all_events'>
                    <div className='events_heading head1'>
                        <div className='sub_events'>
                            <h2 className='events1 tag'>DETAILS</h2>
                            <div className='horizontal-line2 hl1'></div>
                        </div>
                        <div className='infobox user_details'>
                            <div className='profile_detail'>
                                <div className='d1'>Name: Bobby Deol</div>
                                <div className='d1'>Email: lordbobby@gmail.com</div>
                                <div className='d1'>Contact No: 9876543210</div>
                            </div>
                        </div>
                    </div>
                    <div className='events_heading head2'>
                        <div className='sub_events'>
                            <h2 className='registered_events tag'>REGISTERED EVENTS</h2>
                            <div className='horizontal-line2 hl2'></div>
                        </div>
                        <div className='infobox event_details'>
                            <div className='eventCard'>
                                <div className='event_detail'>
                                    <div className='evnt_name'>SHOWSTOPPER</div>
                                    <div className='evnt_detail'>Solo Dance Competition</div>
                                </div>
                                <div className='reg_detail'>
                                    <div className='evnt_reg'>Registered</div>
                                    <div className='reg_name'>as Bobby Doel!</div>
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