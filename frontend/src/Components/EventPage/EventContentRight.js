import React, { useState, useEffect } from 'react'
import Round from './Round'
import Faq from './Faq'
import Head from './Head'

const EventContentRight = (props) => {
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
        <div className='EventContent_content paddingLeft'>
          {props.details}
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
        <div className='EventContent_content paddingLeft'>
          <div className='EventRules'>
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