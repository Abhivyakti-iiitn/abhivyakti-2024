import React from 'react'

const Round = (props) => {
    return (
        <div className={`EventRound ${props.isLastTimeline?'LastRound':''}`}>
            <div className={`diamond ${props.glow?'glow':''}`}></div>
            <div className='RoundContent'>
                <div className='RoundTiming'>
                    <span className='RoundNo'>{props.round}</span>
                </div>
                <div className='RoundDetails'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Round