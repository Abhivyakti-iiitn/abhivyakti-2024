import React from 'react'

const Round = (props) => {
    return (
        <div className={`EventRound ${props.isLastTimeline&&'LastRound'}`}>
            <div className={`diamond ${props.glow&&'glow'}`}></div>
            <div className='RoundContent'>
                <div className='RoundTiming'>
                    <span className='RoundNo'>Round 1</span>
                    <span className='RoundDate'>{props.date}</span>
                </div>
                <div className='RoundDetails'>
                    ok
                </div>
            </div>
        </div>
    )
}

export default Round