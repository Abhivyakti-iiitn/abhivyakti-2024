import React from 'react'
import Round from './Round'
import Faq from './Faq'
import Head from './Head'

const EventContentRight = (props) => {
  return (
    <div className='EventContent-right'>
      <div className='details'>
        <div className='EventContent__heading'>
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
      <div className='roundsAndTimline'>
        <div className='EventContent__heading'>
          <fieldset>
            <legend>
              Rounds & Timeline
            </legend>
          </fieldset>
        </div>
        <div className='EventContent_content'>
          {props.timeline.map((date) => (
            <Round key={date} date={date} />
          ))}
        </div>
      </div>
      <div className='rulesAndRegulation'>
        <div className='EventContent__heading'>
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