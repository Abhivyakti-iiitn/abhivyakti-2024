import React, { useEffect } from 'react'
import "../../css/Eventheader.css"

function Header(props) {
    console.log("sad", props)
    return (
        <>
            <div className='main__header'>
                <div div className='top' >
                    <div className="left">
                        <ul>
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
                    <h1>{props.event.name} <br></br></h1>
                    <h3>tagline, tagline, tagline</h3>
                </div>
            </div >
        </>
    )
}

export default Header