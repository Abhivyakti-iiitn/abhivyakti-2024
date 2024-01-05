import React from 'react'

function Roadtoredcarpet() {
  return (
    <>
      <div className='infoDiv'>
        {/*Team Name*/}
        <label>Team Name</label>
        <input type="text" name="teamName" required placeholder="Team Name" className="input" />
      </div>
      <div className='infoDiv'>
        {/*College Name*/}
        <label>College Name</label>
        <input type="text" name="teamName" required placeholder="College Name" className="input" />
      </div>
      {/* Team Lead Name */}
      <div className='infoDiv'>
        <label>Team Lead Name</label>
        <input type="text" name="teamLeadName" required placeholder="Team Lead Name" className="input" />
      </div>
      {/* Contact Details of Leader (WhatsApp No.)*/}
      <div className='infoDiv'>
        <label>Contact Details of Leader (WhatsApp No.)</label>
        <input type="number" name="contact_phone" required placeholder="WhatsApp Number" className="input" />
      </div>
      {/* Short Video */}
      <div className='infoDiv'>
        <label className='withtooltip'>Short Video <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
      </div>
    </>
  )
}

export default Roadtoredcarpet