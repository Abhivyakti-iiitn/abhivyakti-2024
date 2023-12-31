import React from 'react'
import {useNavigate} from 'react-router-dom';
import logo from "../assets/EventPageAsst/Glow-icon.svg"

function LogoComponent() {
    const navigateTo = useNavigate();
  return (
    <div className= 'logo'>
    <img src={logo} style={{cursor:'pointer'}} alt="Loho Here" onClick={()=>navigateTo('/')} />
    </div>
  )
}

export default LogoComponent
