import React from 'react';
// import EventContent from "../../assets/EventContent.json";
// import logo from "../../assets/sponsors/sponsor1.svg";
import "../../newscss/formPageLeft.scss"
import LogoComponent from '../LogoComponent';

const FormPageLeft = (props) => {
  // let roundRegex = /^[rR]ound [1-9]\d*/;
  let roundRegex = /^(Preliminary Round|Preliminary Round Results|Finals|Judgement Criteria|[rR]ound [1-9]|General Rules|Rules for duet|Rules for group)|Introduction|Model United Nations Explanation|COMMITTEES OVERVIEW|1. United Nations Human Rights Council|1.1. Samples-agenda :|2. All India Political Parties Meet - Historic Conference Constituent Assembly|2.1. Samples-Agenda :|3. Bollywood Committee Summit|3.1. Samples-agenda :|4. International Press|4.1. Samples-agenda :|HIGHLIGHTS OF THE EVENT|Miscellaneous$/i;

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