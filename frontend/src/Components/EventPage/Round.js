import React from 'react'

const Round = (props) => {
  return (
    <div className='EventRound'>
        <div className='diamond'></div>
        <div className='RoundContent'>
        <div className='EventDate'>{props.date}</div>
        <div className='RoundDetails'>
            ok
        </div>
        </div>
    </div>
  )
}

export default Round