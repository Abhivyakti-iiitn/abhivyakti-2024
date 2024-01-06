import React from 'react'

function Andhkaar() {
    return (
        <>
            <div className='infoDiv'>
                {/*Team Name*/}
                <label>Team Name</label>
                <input type="text" name="teamName" required placeholder="Team Name" className="input" />
            </div>

            {/* Team Lead Name */}
            <div className='infoDiv'>
                <label>Team Lead Name</label>
                <input type="text" name="teamLeadName" required placeholder="Team Lead Name" className="input" />
            </div>

            {/*Institute Name*/}
            <div className='infoDiv'>
                <label>Institute Name</label>
                <input type="text" name="instituteName" required placeholder="Institute Name" className="input" />
            </div>

            {/* Video Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Video Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="vid_link" required placeholder="Add File" className="input" />
            </div>

            {/* Script Submission*/}
            <div className='infoDiv'>
                <label className='withtooltip'>Script Submission<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the script to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                <input type="url" name="script_link" required placeholder="Add File" className="input" />
            </div>
        </>
    )
}

export default Andhkaar