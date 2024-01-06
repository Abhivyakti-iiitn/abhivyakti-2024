import React from 'react';
// import EventContent from "../../assets/EventContent.json";
// import logo from "../../assets/sponsors/sponsor1.svg";
import "../../newscss/formPageLeft.scss"
import LogoComponent from '../LogoComponent';

const FormPageLeft = (props) => {
  let roundRegex = /^[rR]ound [1-9]\d*/;

  // let rules = EventContent.showstopper.rules;
  // let regulations = EventContent.showstopper.regulations;
  return (
    <div className='main'>
      <LogoComponent/>
      <div className='formContent'>
        <div className='title'>
          <h1>{props.name}</h1>
        </div>
        <div className='rules'>
          <div>
            <ul>
              {props.rules?.map((rule, index) => (

                roundRegex.test(rule) ? <h3 key={index}>{rule}</h3> : <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {props.regulations?.map((regulation, index) => (
                roundRegex.test(regulation) ? <h3>{regulation}</h3> : <li key={index}>{regulation}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FormPageLeft