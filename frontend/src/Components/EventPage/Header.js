import React, { useEffect } from 'react'
import "../../css/Eventheader.css"
import logo from "../../assets/EventPageAsst/logoPlaceHolder.svg"

function Header(props) {
    // console.log("sad", props)


    return (
        <>
            <div className={`event_header ${props.event.name.toLowerCase()}`} >
                <div div className='top' >
                    <div className="left">
                        <ul>
                            <img src={logo} alt="Loho Here" srcset="" />
                            <li><div></div></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                            <li><i class="fa-brands fa-facebook"></i></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>ABOUT</li>
                            <li>EVENTS</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div >
                <div className="mid">
                    <div className="mid_left">

                        <h1>{props.event.name} <br></br></h1>
                        <h3>tagline, tagline, tagline</h3>
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
            <div className={`sticky_header`} >
                <div div className='top' >
                    <div className="left">
                        <h1>{props.event.name} <br></br></h1>
                        {/* <h3>tagline, tagline, tagline</h3> */}
                    </div>
                    {/* <div className="right">
                        <ul>
                            <li>ABOUT</li>
                            <li>EVENTS</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div> */}
                </div >
            </div >

        </>
    )
}

export default Header