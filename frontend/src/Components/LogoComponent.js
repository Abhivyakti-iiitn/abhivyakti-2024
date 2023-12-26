import React from 'react'
import {useNavigate} from 'react-router-dom';
import logo from "../assets/EventPageAsst/logoPlaceHolder.svg"

function LogoComponent() {
    const navigateTo = useNavigate();
  return (
    <img src={logo} style={{cursor:'pointer'}} alt="Loho Here" onClick={()=>navigateTo('/')} />
  )
}

export default LogoComponent