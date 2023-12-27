import React from 'react';
import EventContentLeft from './EventContentLeft';
import EventContentRight from './EventContentRight';

import '../../css/EventContent.css';
// import "../../css/temp.css";

const EventContent = (props) => {
  return (
    <div className='EventContent'>
      <div className={`sticky_header`} >
        <div div className='top' >
          <div className="left">
            <h1>{props.content.name} <br></br></h1>
          </div>
        </div >
      </div >
      <EventContentLeft
        date={props.content.registrationDate}
        team={props.content.Team}
        fees={props.content.fees}
        pool={props.content.pool}
      />
      <EventContentRight
        details={props.content.details}
        timeline={props.content.timeline}
        rules={props.content.rules}
        regulations={props.content.regulations}
      />
    </div>
  )
}

export default EventContent