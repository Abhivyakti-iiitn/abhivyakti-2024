import React, { useState } from 'react';

const Andhkaar = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeadName: "",
    instituteName: "",
    vid_link: "",
    script_link: "",
    payment_link:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset the form data
    setFormData({
      teamName: "",
      teamLeadName: "",
      instituteName: "",
      vid_link: "",
      script_link: "",
      payment_link:''
    });
    const response = await fetch("http://localhost:8080/andhakaar", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Handle the response as needed
  };

  return (
    <>
      <form method='POST' className="form" onSubmit={handleSubmit}>
        <div className='infoDiv'>
          {/* Team Name */}
          <label htmlFor='teamName'>Team Name</label>
          <input type="text" id='teamName' name="teamName" required placeholder="Team Name" value={formData.teamName} className="input" onChange={handleChange} />
        </div>
        {/* Team Lead Name */}
        <div className='infoDiv'>
          <label htmlFor='teamLeadName'>Team Lead Name</label>
          <input type="text" id='teamLeadName' name="teamLeadName" required placeholder="Team Lead Name" value={formData.teamLeadName} className="input" onChange={handleChange} />
        </div>
        {/* Institute Name */}
        <div className='infoDiv'>
          <label htmlFor='instituteName'>Institute Name</label>
          <input type="text" id='instituteName' name="instituteName" required placeholder="Institute Name" value={formData.instituteName} className="input" onChange={handleChange} />
        </div>
        {/* Video Submission */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='vid_link'>Video Submission<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='vid_link' name="vid_link" required placeholder="paste file link" value={formData.vid_link} className="input" onChange={handleChange} />
        </div>
        {/* Script Submission */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='script_link'>Script Submission<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the script to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='script_link' name="script_link" required placeholder="paste file link" value={formData.script_link} className="input" onChange={handleChange} />
        </div>
        {/* Payment link*/}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData.vid_link} className="input" onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Andhkaar;
