import React from 'react'
import imgSrc from '../assets/EventImages/a.jpg'

function EventCards(props) {
    if (!props.exploreAllEvents) {
        return (
            <div id={props.id} className='EventCard hiddenCard'>
                <div className='event-container'>
                    <div className='event__img-container'>
                        <img src={imgSrc} className='event__img'></img>
                    </div>
                    <div className='event__content'>
                        <div className='event__name'>{props.name}</div>
                        <div className='event__desc'>{props.desc}</div>
                    </div>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className='EventCard explore'>
                <div className='explore__text'>
                    Explore all events &#8600;
                </div>
            </div>
        )
    }
}

export default EventCards