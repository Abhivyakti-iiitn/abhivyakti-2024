import React from 'react'

const Round = (props) => {
  return (
    <div className='EventRound'>
        <div className='top'>
            <div className='diamond'></div>
            <div className='EventDate'>{props.date}</div>
        </div>
        <div className='roundDetails'>
            ok
        </div>
    </div>
  )
}

export default Round