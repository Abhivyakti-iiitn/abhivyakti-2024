import React, { useState, useEffect } from 'react'
import Round from './Round'
import Faq from './Faq'
import Head from './Head'

const EventContentRight = (props) => {

  // let roundRegex = /^[rR]ound [1-9]\d*/;
  let roundRegex = /^(Preliminary Round|Preliminary Round Results|Finals|Judgement Criteria|[rR]ound [1-9]|General Rules|Rules for duet|Rules for group)|Introduction|Model United Nations Explanation|COMMITTEES OVERVIEW|1. United Nations Human Rights Council|1.1. Agenda - Addressing Religious Discrimination and Proxy Wars|2. All India Political Parties Meet - In Present Era|2.1. Agenda - Reservation Policy in India and India's Neighbourhood First Policy|3. Bollywood Committee Summit|3.1. Agenda - Empowering Indian Cinema|4. International Press|4.1. Agenda - Reviewing Bollywood Summit, AIPPM, UNHRC Functioning:|HIGHLIGHTS OF THE EVENT|Miscellaneous$/i;
  let roundRegex2 = /^[1-9]\d*\./;
  const [alreadyGlowing, setAlreadyGlowing] = useState(false);
  const [glowIndex, setGlowIndex] = useState(-1);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < props.timeline[0].date.length; i++) {
      const date = props.timeline[0].date[i];
      const parts = date.split('/');
      const eventDate = new Date(`20${parts[2]}`, parts[1] - 1, parts[0]);

      if (today <= eventDate) {
        setGlowIndex(i);
        break; // Set the glow index and exit the loop
      }
    }
  }, [props.timeline]);

  const handleGlowing = () => {
    if (!alreadyGlowing) {
      setAlreadyGlowing(true);
      console.log("ret true");
      return true;
    }
    console.log("ret false");
    return false;
  };

  return (
    <div className='EventContent-right'>
      <div className='EventDetail EventDetailsSection'>
        <div className='EventContent_heading'>
          {/* <fieldset>
            <legend>
              Details
            </legend>
          </fieldset> */}
          <div className="liner">

            {/* <div className="line"></div> */}
            <h1>
              Details
            </h1>
            <div className="line"></div>
          </div>
        </div>
        {/* <div className='EventContent_content '> */}
          {/* {props.details} */}
          {/* <ul>
              {props.details.map((detail, index) => (

               roundRegex.test(detail) ? <h3 key={index}>{detail}</h3> : <li key={index}>{detail}</li>
              ))}
            </ul>
        </div> */}
        <div className='EventContent_content'>
          {/* Updated rendering logic for details */}
          {props.details.length === 1 ? (
            <span>{props.details[0]}</span>
          ) : (
            <ul>
              {props.details.map((detail, index) => (
                roundRegex.test(detail) ? <h3 key={index}>{detail}</h3> : <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='EventDetail roundsAndTimline'>
        <div className='EventContent_heading'>
          {/* <fieldset>
            <h2>
              Rounds & Timeline
            </h2>
          </fieldset> */}
          <div className="liner">

            {/* <div className="line"></div> */}
            <h1>
              Rounds & Timeline
            </h1>
            <div className="line"></div>
          </div>
        </div>
        <div className='EventContent_content'>
          {props.timeline[0].date.map((date, id) => {
            const isLastElement = id === props.timeline[0].date.length - 1;
            const glow = id === glowIndex;

            return (
              <Round key={id} round={props.timeline[0].head[id]} content={props.timeline[0].content[id]} date={date} isLastTimeline={isLastElement} glow={glow} />
            )
          })}
        </div>
      </div>
      <div className='EventDetail rulesAndRegulation'>
        <div className='EventContent_heading'>
          {/* <fieldset>
            <legend>
              Rules & Regulations
            </legend>
          </fieldset> */}
          <div className="liner">

            {/* <div className="line"></div> */}
            <h1>
              Rules & Regulations
            </h1>
            <div className="line"></div>
          </div>
        </div>
        <div className='EventContent_content'>
          <div className='EventRules'>
            <ul>
              {props.rules.map((rule, index) => (

               roundRegex.test(rule) ? <h3 key={index}>{rule}</h3> : <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          <div className='EventRegulations'>
            <ul>
              {props.regulations.map((regulation, index) => (
               roundRegex.test(regulation) ? <h3>{regulation}</h3> : <li className={`${roundRegex2.test(regulation)? 'lststylenone':''}`} key={index}>{regulation}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventContentRight