import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/EventPageAsst/Glow-icon.svg"
import iiitn from "../assets/IIITNLogo.png"

function LogoComponent() {
  const navigateTo = useNavigate();
  return (
    <>
      <img src={logo} style={{ cursor: 'pointer' }} alt="Logo Here" onClick={() => navigateTo('/home')} />
      <img src={iiitn} style={{ cursor: 'pointer', width: '75px' }} alt="Logo Here" onClick={() => navigateTo('/home')} />
    </>
  )
}

export default LogoComponent