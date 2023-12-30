import React from 'react';
import EventContent from "../../assets/EventContent.json";
import logo from "../../assets/sponsors/sponsor1.svg";
import "../../newscss/formPageLeft.scss"

const FormPageLeft = () => {
  let roundRegex = /^[rR]ound [1-9]\d*/;

  let rules = EventContent.showstopper.rules;
  let regulations = EventContent.showstopper.regulations;
  return (
    <div className='main'>
      <img src={logo}></img>
      <div className='formContent'>
        <div className='title'>
          <h1>{EventContent.showstopper.name}</h1>
        </div>
        <div className='rules'>
          <div>
            <ul>
              {rules.map((rule, index) => (

                roundRegex.test(rule) ? <h3>{rule}</h3> : <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {regulations.map((regulation, index) => (
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