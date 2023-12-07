import React from 'react'
import './EventCards.css'
import imgSrc from './assets/EventImages/a.jpg'

function EventCards(props) {
    return (
        <div id={props.id} className='EventCard hiddenCard'>
            <div className='eventContainer'>
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

export default EventCards