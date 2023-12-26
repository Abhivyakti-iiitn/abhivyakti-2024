import React from 'react';
import EventContent from "../../assets/EventContent.json";
import logo from "../../assets/sponsors/sponsor1.svg";
import "../../newscss/formPageLeft.scss"

const FormPageLeft = () => {
  return (
    <div className='main'>
      <img src={logo}></img>
      <div className='formContent'>
        <div className='title'>
          <h1>{EventContent.showstopper.name}</h1>
        </div>  
        <div className='rules'>
          <p>{EventContent.showstopper.rules}</p>
        </div>
      </div>  
    </div>
  )
}

export default FormPageLeft