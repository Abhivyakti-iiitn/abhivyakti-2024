import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const ShowStopper = () => {
  const [formData, setFormData] = useState({
    name: "",
    clgName: "",
    contact_phone: "",
    aud_link: "",
    vid_link: ""
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
      name: "",
      clgName: "",
      contact_phone: "",
      aud_link: "",
      vid_link: ""
    });
    const response = await fetch("http://localhost:8080/showstopper", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Handle the response as needed
  };

  return (
    <form method='POST' className='form'>
    
   
        <div className='infoDiv'>
        {/* Team Name */}
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' name="name" required placeholder="Name" value={formData.name} className="input" onChange={handleChange} />
      </div>
      <div className='infoDiv'>
        {/* College Name */}
        <label htmlFor='clgName'>Institute Name</label>
        <input type="text" name="clgName" id='clgName' required placeholder="Institute Name" value={formData.clgName} className="input" onChange={handleChange} />
      </div>
      {/* Contact Details of Leader (WhatsApp No.) */}
      <div className='infoDiv'>
        <label htmlFor='contact_phone'>Contact Details (WhatsApp No.)</label>
        <input type="number" name="contact_phone" id='contact_phone' required placeholder="WhatsApp Number" value={formData.contact_phone} className="input" onChange={handleChange} />
      </div>
      {/*Audio Link*/}
        <div className='infoDiv'>
        <label className='withtooltip' htmlFor='aud_link'>Audio Track<i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="aud_link" id='aud_link' required placeholder="paste audio link here" className="input" value={formData.aud_link} onChange={handleChange}/>
        </div>
        {/* Short Video */}
        <div className='infoDiv'>
        <label className='withtooltip' htmlFor='vid_link'>Short Video <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="vid_link" id='vid_link' required placeholder="paste video link here" value={formData.vid_link} className="input" onChange={handleChange}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Continue</button>
      
   
    </form>
  );
};

export default ShowStopper;


