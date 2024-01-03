import React,{useEffect}  from 'react';
import deadline from "../../assets/EventImages/deadline.svg";
import teamSize from "../../assets/EventImages/Group.svg";
import fees from "../../assets/EventImages/fees.svg";
import prize from "../../assets/EventImages/prize.svg";
import {useNavigate, useParams} from "react-router-dom";
const EventContentLeft = (props) => {
  const params = useParams();

  const navigateTo = useNavigate()
  
  
  return (
    <div className='EventContent-left sticktoleft'>
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
      </div>
        <button className='register-button' onClick={()=>navigateTo(`/form/${params.eventname?.toLowerCase().replace(' ', '')}`)}>
          Register Now
        </button>
    </div>
  );
};

export default EventContentLeft;