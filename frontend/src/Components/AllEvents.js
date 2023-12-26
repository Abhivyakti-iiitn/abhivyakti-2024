import React, { useEffect, useState } from 'react';
import eventsArray from "../assets/EventDetails.json";
import '../css/AllEvents.css';
import EventSlide from './EventSlide';
import LogoComponent from './LogoComponent';
import StickyHeader from './StickyHeader';
import Footer from './Footer';

const AllEvents = () => {
    const [eventType, setEventType] = useState('');
    const [activeButton, setActiveButton] = useState('all'); // Initially set to 'all'

    const filteredEvents = eventType === "Solo" ? eventsArray.filter(event => event.Team === "Solo") : eventsArray.filter(event => event.Team !== "Solo");
    const events = eventType ? filteredEvents : eventsArray;

    return (
        <>
            <StickyHeader type = "2"/>
            <div className='AllEvents'>
                <div className='AllEvents__heading'>
                    <fieldset className='AllEventsFS'>
                        <legend className='AllEventsL'>
                            All Events
                        </legend>
                    </fieldset>
                </div>
                <div className='EventTypeControl'>
                    <div
                        key='all'
                        className={`EventTypeBtn ${activeButton === 'all' ? 'active' : ''}`}
                        onClick={() => {
                            setEventType('');
                            setActiveButton('all');
                        }}
                    >
                        All Events
                        <div className='AllEventsUnderline'></div>
                    </div>
                    <div
                        key='solo'
                        className={`EventTypeBtn ${activeButton === 'solo' ? 'active' : ''}`}
                        onClick={() => {
                            setEventType('Solo');
                            setActiveButton('solo');
                        }}
                    >
                        Solo Events
                        <div className='AllEventsUnderline'></div>
                    </div>
                    <div
                        key='team'
                        className={`EventTypeBtn ${activeButton === 'team' ? 'active' : ''}`}
                        onClick={() => {
                            setEventType('Team');
                            setActiveButton('team');
                        }}
                    >
                        Team Events
                        <div key={'underline'} className='AllEventsUnderline'></div>
                    </div>
                </div>
                <div className='EventSlides'>
                    {events.map((event) => (
                        <div key={event.id}>
                            <EventSlide event={event} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AllEvents;
