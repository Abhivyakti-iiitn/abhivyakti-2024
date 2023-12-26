import React from 'react';
import LogoComponent from './LogoComponent';
import {useNavigate} from 'react-router-dom';

function StickyHeader(props) {
    const navigateTo = useNavigate();
    return (
        <div className={`pro_sticky_header`} style={{height:`${props.type == 1 ? "" : "15vh"}`}} >
            <div div className='top' >
                <div className="left" style={{justifyItems:"center", display:"flex"}}>
                    <ul>
                        <LogoComponent />
                        <li><div></div></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                    </ul>
                </div>
                <div className="right">

                    {props.type === 1 ? <ul>
                        <li onClick={() => navigateTo('/')}>HOME</li>
                        <li onClick={props.handleSignout}>SIGN OUT</li>

                    </ul> :
                        <ul>
                            <li >DETAILS</li>
                            <li >TIMELINE</li>
                            <li >RULES</li>
                            <li >PRIZES</li>
                            <li >FAQS</li>
                        </ul>}
                </div>
            </div >
        </div >
    )
}

export default StickyHeader