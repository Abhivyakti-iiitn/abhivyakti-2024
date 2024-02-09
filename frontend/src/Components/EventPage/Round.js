import React from 'react'

const Round = (props) => {
    let roundRegex = /^(Preliminary Round|Preliminary Round Results|Finals|Judgement Criteria|[rR]ound [1-9]|General Rules|Rules for duet|Rules for group)|Introduction|Model United Nations Explanation|COMMITTEES OVERVIEW|1. United Nations Human Rights Council|1.1. Samples-agenda :|2. All India Political Parties Meet - Historic Conference Constituent Assembly|2.1. Samples-Agenda :|3. Bollywood Committee Summit|3.1. Samples-agenda :|4. International Press|4.1. Samples-agenda :|HIGHLIGHTS OF THE EVENT|Miscellaneous$/i;
    return (
        <div className={`EventRound ${props.isLastTimeline?'LastRound':''}`}>
            <div className={`diamond ${props.glow?'glow':''}`}></div>
            <div className='RoundContent'>
                <div className='RoundTiming'>
                    <span className='RoundNo'>{props.round}</span>
                </div>
                <div className='RoundDetails'>
                    {/* {props.content} */}
                    {props.content.length === 1 ? (
                <span>{props.content[0]}</span>
              ) : (
                <ul>
                  {props.content.map((detail, index) => (
                    roundRegex.test(detail) ? <h3 key={index}>{detail}</h3> : <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
                </div>
            </div>
        </div>
    )
}

export default Round