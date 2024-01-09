import React from 'react'

function Rhymeriot() {
    let yesno = [
        "Yes", "No"
    ]
    return (
        <>
            {/*Band Name*/}
            <div className='infoDiv'>
                <label>Band Name</label>
                <input type="text" name="bandName" required placeholder="Band Name" className="input" />
            </div>

            {/*Leader Name*/}
            <div className='infoDiv'>
                <label>Leader Name</label>
                <input type="text" name="leaderName" required placeholder="Leader Name" className="input" />
            </div>

            {/* Leader Contact Details*/}
            <div className='infoDiv'>
                <label>Leader Contact Number</label>
                <input type="number" name="contact_phone" required placeholder="Contact Number" className="input" />
            </div>

            {/*Leader Email*/}
            <div className='infoDiv'>
                <label>Leader Email</label>
                <input type="email" name="leaderEmail" required placeholder="Email" className="input" />
            </div>

            {/*Institute Name*/}
            <div className='infoDiv'>
                <label>Institute Name</label>
                <input type="text" name="instituteName" required placeholder="Institute Name" className="input" />
            </div>

            {/* Will you be needing Drumkit? */}
            <div className='infoDiv'>
                <label className='info_heading' htmlFor=''>Will you be needing Drumkit?</label>
                {yesno.map((option, ind) => {
                    return <label htmlFor={ind} key={option}><input type="radio" name="yesno" value={option} className="input" />{option}</label>
                })}
            </div>

            {/* List of Instruments used and number of vocalists.*/}
            <div className='infoDiv'>
                <label>List of Instruments used and number of vocalists.</label>
                <input type="text" name="instrumentsName" placeholder="Instruments Name" className="input" />
            </div>

            {/* Video Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Video Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
            </div>

            {/* Backtrack Submission (if used) */}
            <div className='infoDiv'>
                <label className='withtooltip'>Backtrack Submission (if used) <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="aud_link" placeholder="paste audio link here" className="input" />
            </div>
        </>
    )
}

export default Rhymeriot