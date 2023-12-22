import React from 'react';

const EventContentLeft = () => {
  return (
    <div className='EventContent-left'>
      <div className='sticky-content'>
        <div className='info-item'>
          <img className='icon' src='/path/to/calendar-icon.png' alt='Calendar' />
          Registration Deadline: <span>Date below it</span>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/users-icon.png' alt='Users' />
          Team size: <span>No. below it</span>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/money-icon.png' alt='Money' />
          Registration Fee: <span>10 rs</span>
        </div>
        <div className='info-item'>
          <img className='icon' src='/path/to/trophy-icon.png' alt='Trophy' />
          Prize Pool: <span>Prize pool</span>
        </div>
        <button className='register-button'>
          Register
        </button>
      </div>
    </div>
  );
};

export default EventContentLeft;