import React, { useState } from 'react';
const url = process.env.REACT_APP_HOST || "http://localhost:8080"
const BronxBattleground = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeadName: '',
    leadEmail: '',
    contact_phone: '',
    aud_link: '',
    vid_link: '',
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
      teamName: '',
      teamLeadName: '',
      leadEmail: '',
      contact_phone: '',
      aud_link: '',
      vid_link: '',
      payment_link:''
    });
    try {
      
      const response = await fetch('http://localhost:8080/bronxbattleground', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Handle the response as needed
    } catch (error) {
      console.error('Fetch error:', error);
    }
    

    // Handle the response as needed
  };

  return (
    <>
      <form method="POST" className='form' >
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
        {/* Leader Email */}
        <div className='infoDiv'>
          <label htmlFor='leadEmail'>Leader E-mail:</label>
          <input type="email" id='leadEmail' name="leadEmail" required placeholder="Leader E-mail" value={formData.leadEmail} className="input" onChange={handleChange} />
        </div>
        {/* Contact Details of Leader (WhatsApp No.) */}
        <div className='infoDiv'>
          <label htmlFor='contact_phone'>Contact Details (WhatsApp No.)</label>
          <input type="number" id='contact_phone' name="contact_phone" required placeholder="WhatsApp Number" value={formData.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* Audio Link */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='aud_link'>Audio Track<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='aud_link' name="aud_link" required placeholder="paste audio link here" value={formData.aud_link} className="input" onChange={handleChange} />
        </div>
        {/* Short Video */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='vid_link'>Short Video <i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='vid_link' name="vid_link" required placeholder="paste video link here" value={formData.vid_link} className="input" onChange={handleChange} />
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

export default BronxBattleground;
