import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/EventPageAsst/Glow-icon.svg"
import iiitn from "../assets/EventPageAsst/IIITNLogo.png"

function LogoComponent() {
  const navigateTo = useNavigate();
  return (
    <>
      <img src={iiitn} style={{ cursor: 'pointer', width: '40px' , alignSelf:"center" }} alt="Logo Here" onClick={()=>window.open('https://iiitn.ac.in/','_blank')}  />
      <img src={logo} style={{ cursor: 'pointer' }} alt="Logo Here" onClick={() => navigateTo('/home')} />
    </>
  )
}

export default LogoComponent
