import React from 'react'

const ShowStopper = () => {
  return (
    <>
    <div className='infoDiv'>
        {/*Team Name*/}
        <label>Name</label>
        <input type="text" name="name" required placeholder="Name" className="input" />
      </div>
      <div className='infoDiv'>
        {/*College Name*/}
        <label>Institute Name</label>
        <input type="text" name="clgName" required placeholder="Institute Name" className="input" />
      </div>
      {/* Contact Details of Leader (WhatsApp No.)*/}
      <div className='infoDiv'>
        <label>Contact Details (WhatsApp No.)</label>
        <input type="number" name="contact_phone" required placeholder="WhatsApp Number" className="input" />
      </div>
      {/*Audio Link*/}
      <div className='infoDiv'>
        <label className='withtooltip'>Audio Track<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="aud_link" required placeholder="paste audio link here" className="input" />
      </div>
      {/* Short Video */}
      <div className='infoDiv'>
        <label className='withtooltip'>Short Video <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
      </div>
      </>
  )
}

export default ShowStopper