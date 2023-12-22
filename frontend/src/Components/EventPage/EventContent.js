import React from 'react';
import EventContentLeft from './EventContentLeft';
import EventContentRight from './EventContentRight';

import '../../css/EventContent.css';
// import "../../css/temp.css";

const EventContent = (props) => {
  console.log(props);

  return (
    <div className='EventContent'>
        <EventContentLeft />
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