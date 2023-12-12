import React from 'react';
import '../../css/club.css';
import symbol from '../../assets/EventPageAsst/symbol2.png'

function Club() {
    return (
        <div>
            <img className='symbol' src={symbol}></img>
            <div className='clubname'>ESTORIA</div>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='container1'>
                <div className='innerdiv'>
                    <div className='intro'>Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience, typically delivering a monologue filled with humorous anecdotes, observations, jokes, and storytelling. The performer, commonly known as a stand-up comedian, engages the audience through their comedic skills, wit, and often sharp commentary on various subjects like everyday life, culture, society, politics, relationships, and personal experiences.</div>
                    <div className='line3'></div>
                </div>
                <div className='vline'></div>
                <div className='innerdiv'>
                    <div className='details'>
                        <div className='date'>Date</div>
                        <div className='venue'>Venue</div>
                    </div>
                    <div className='line4'></div>
                </div>
            </div>
        </div>
    );
}

export default Club;