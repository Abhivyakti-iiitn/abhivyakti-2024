import React from 'react'

function Bahumukhi() {
    return (
        <>
            {/*Participant Name*/}
            <div className='infoDiv'>
                <label>Participant Name</label>
                <input type="text" name="participantName" required placeholder="Participant Name" className="input" />
            </div>

            {/*Institute Name*/}
            <div className='infoDiv'>
                <label>Institute Name</label>
                <input type="text" name="instituteName" required placeholder="Institute Name" className="input" />
            </div>

            {/* Script Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Script Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the script to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="script_link" required placeholder="Add File" className="input" />
            </div>

            {/* Video Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Video Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="vid_link" required placeholder="Add File" className="input" />
            </div>
        </>
    )
}

export default Bahumukhi