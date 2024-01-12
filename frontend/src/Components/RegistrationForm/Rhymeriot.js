import React, { useState, useContext } from 'react';
import NewContext from '../../context/NewContext';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_HOST || "http://localhost:8080"

const Rhymeriot = ({ formData, setFormData, onCloseModal, onOpenModal, handleChange }) => {

  const context = useContext(NewContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isRegistered = await context.checkRegistrationStatus('rhymeriot', window.localStorage.getItem("access_token"));

      if (isRegistered) toast.error('You have already registered for this event.');
      else onOpenModal();
  } catch (error) {
      console.error('Error checking registration status:', error);
  }
  };

  const yesnoOptions = ["Yes", "No"];

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className='infoDiv'>
        <label htmlFor='bandName'>Band Name</label>
        <input type="text" id='bandName' name="bandName" required placeholder="Band Name" value={formData?.bandName} className="input" onChange={handleChange} />
      </div>
      {/* Leader Name */}
      <div className='infoDiv'>
        <label htmlFor='leaderName'>Leader Name</label>
        <input type="text" id='leaderName' name="leaderName" required placeholder="Leader Name" value={formData?.leaderName} className="input" onChange={handleChange} />
      </div>
      {/* Leader Contact Number */}
      <div className='infoDiv'>
        <label htmlFor='contact_phone'>Leader Contact Number</label>
        <input type="number" id='contact_phone' name="contact_phone" required placeholder="Contact Number" value={formData?.contact_phone} className="input" onChange={handleChange} />
      </div>
      {/* Leader Email */}
      <div className='infoDiv'>
        <label htmlFor='leaderEmail'>Leader Email</label>
        <input type="email" id='leaderEmail' name="leaderEmail" required placeholder="Email" value={formData?.leaderEmail} className="input" onChange={handleChange} />
      </div>
      {/* Institute Name */}
      <div className='infoDiv'>
        <label htmlFor='instituteName'>Institute Name</label>
        <input type="text" id='instituteName' name="instituteName" required placeholder="Institute Name" value={formData?.instituteName} className="input" onChange={handleChange} />
      </div>
      {/* Will you be needing Drumkit? */}
      <div className='infoDiv'>
        <label className='info_heading' htmlFor='yesno'>Will you be needing Drumkit?</label>
        {yesnoOptions.map((option, ind) => (
          <label htmlFor={ind} key={option}>
            <input type="radio" name="yesno" value={option} className="input" onChange={handleChange} checked={formData?.yesno === option} />
            {option}
          </label>
        ))}
      </div>
      {/* List of Instruments used and number of vocalists. */}
      <div className='infoDiv'>
        <label htmlFor='instrumentsName'>List of Instruments used and number of vocalists.</label>
        <input type="text" id='instrumentsName' name="instrumentsName" placeholder="Instruments Name" value={formData?.instrumentsName} className="input" onChange={handleChange} />
      </div>
      {/* Video Submission */}
      <div className='infoDiv'>
        <label className='withtooltip' htmlFor='vid_link'>Video Submission<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" id='vid_link' name="vid_link" required placeholder="paste video link here" value={formData?.vid_link} className="input" onChange={handleChange} />
      </div>

      {/* Backtrack Submission (if used) */}
      <div className='infoDiv'>
        <label className='withtooltip'>Backtrack Submission (if used) <i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
        <input type="url" name="aud_link" placeholder="paste audio link here" className="input" onChange={handleChange} />
      </div>
      {/* Payment link*/}
      {/* <div className='infoDiv'>
          <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData?.vid_link} className="input" onChange={handleChange} />
          </div> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Rhymeriot;