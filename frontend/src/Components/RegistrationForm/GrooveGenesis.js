import React from 'react'

function Groovegenesis() {
    let yesno = [
        "Yes", "No"
    ]
    return (
        <>
            {/*Participant Name*/}
            <div className='infoDiv'>
                <label>Participant Name</label>
                <input type="text" name="participantName" required placeholder="Participant Name" className="input" />
            </div>

            {/* Contact Number*/}
            <div className='infoDiv'>
                <label>Contact Number</label>
                <input type="number" name="contact_phone" required placeholder="Contact Number" className="input" />
            </div>

            {/* Email*/}
            <div className='infoDiv'>
                <label>Email</label>
                <input type="email" name="Email" required placeholder="Email" className="input" />
            </div>

            {/*Institute Name*/}
            <div className='infoDiv'>
                <label>Institute Name</label>
                <input type="text" name="instituteName" required placeholder="Institute Name" className="input" />
            </div>

            {/*Instrument Used*/}
            <div className='infoDiv'>
                <label>Instrument Used</label>
                <input type="text" name="instrumentsName" required placeholder="Instruments Name" className="input" />
            </div>

            {/*Instagram Handle (if you want to get mentioned in Crescendo's posts)*/}
            <div className='infoDiv'>
                <label>Instagram Handle (if you want to get mentioned in Crescendo's posts)</label>
                <input type="text" name="instagramID" placeholder="Instagram ID" className="input" />
            </div>

            {/* Will you be having accompanist? */}
            <div className='infoDiv'>
                <label className='info_heading' htmlFor=''>Will you be having backtrack?</label>
                {yesno.map((option, ind) => {
                    return <label htmlFor={ind} key={option}><input type="radio" name="yesno" value={option} className="input" />{option}</label>
                })}
            </div>

            {/* List of Instruments used in backtrack*/}
            <div className='infoDiv'>
                <label>List of Instruments used in backtrack</label>
                <input type="text" name="instrumentsName" placeholder="Instruments Name" className="input" />
            </div>

            {/* Video Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Video Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
            </div>

            {/* Backtrack Submission (if used) */}
            <div className='infoDiv'>
                <label className='withtooltip'>Backtrack Submission (if used) <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="aud_link" placeholder="paste audio link here" className="input" />
            </div>
        </>
    )
}

export default Groovegenesis