import React, { useState, useEffect } from 'react'
import Round from './Round'
import Faq from './Faq'
import Head from './Head'

const EventContentRight = (props) => {
  const [alreadyGlowing, setAlreadyGlowing] = useState(false);  

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
      <div className='EventDetail details'>
        <div className='EventContent_heading'>
          <fieldset>
            <legend>
              Details
            </legend>
          </fieldset>
        </div>
        <div className='EventContent_content'>
          {props.details}
        </div>
      </div>
      <div className='EventDetail roundsAndTimline'>
        <div className='EventContent_heading'>
          <fieldset>
            <legend>
              Rounds & Timeline
            </legend>
          </fieldset>
        </div>
        <div className='EventContent_content'>
          {props.timeline.map((date, id) => {
            const isLastElement = id === props.timeline.length - 1;

            const parts = date.split('/');
            const eventDate = new Date(`20${parts[2]}`, parts[1] - 1, parts[0]);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            console.log("check"+alreadyGlowing);
            const glow = today <= eventDate && handleGlowing();
            console.log(glow);

            return (
              <Round key={id} date={date} isLastTimeline={isLastElement} glow={glow} />
            )
          })}
        </div>
      </div>
      <div className='EventDetail rulesAndRegulation'>
        <div className='EventContent_heading'>
          <fieldset>
            <legend>
              Rules & Regulations
            </legend>
          </fieldset>
        </div>
        <div className='EventContent_content'>
          <div className='rules'>
            Rules: {props.rules}
          </div>
          <div>
            {props.regulations}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default EventContentRight