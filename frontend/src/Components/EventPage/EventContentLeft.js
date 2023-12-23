import React from 'react';
import deadline from "../../assets/EventImages/deadline.svg";
import teamSize from "../../assets/EventImages/Group.svg";
import fees from "../../assets/EventImages/fees.svg";
import prize from "../../assets/EventImages/prize.svg";
const EventContentLeft = (props) => {
  return (
    <div className='EventContent-left'>
      <div className='sticky-content'>
        <div className='info-item'>
          <img className='icon' src={deadline}/>
          <div className='info'>
          Registration Deadline: 
          <span>{props.date}</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src={teamSize} />
          <div className='info'>
          Team size: <span>{props.team}</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src={fees}/>
          <div className='info'>
          Registration Fee: <span>{props.fees}</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src={prize}/>
          <div className='info'>
          Prize Pool: <span>{props.pool}</span>
          </div>
        </div>
        <button className='register-button'>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventContentLeft;