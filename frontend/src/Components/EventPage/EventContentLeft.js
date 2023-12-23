import React from 'react';

const EventContentLeft = () => {
  return (
    <div className='EventContent-left'>
      <div className='sticky-content'>
        <div className='info-item'>
          <img className='icon' src='/path/to/calendar-icon.png'/>
          <div className='info'>
          Registration Deadline: 
          <span>Date below it</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/users-icon.png' />
          <div className='info'>
          Team size: <span>No. below it</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/money-icon.png'/>
          <div className='info'>
          Registration Fee: <span>10 rs</span>
          </div>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/trophy-icon.png'/>
          <div className='info'>
          Prize Pool: <span>Prize pool</span>
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