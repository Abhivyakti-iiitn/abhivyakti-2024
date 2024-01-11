import React, { useState, useContext } from 'react';
import NewContext from '../../context/NewContext';
import { toast } from 'react-toastify';

const Groovegenesis = ({ formData, setFormData, onCloseModal, onOpenModal, handleChange }) => {

  const context = useContext(NewContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal()
  };

  const yesnoOptions = ["Yes", "No"];
  
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className='infoDiv'>
          {/* Participant Name */}
          <label htmlFor='participantName'>Participant Name</label>
          <input type="text" id='participantName' name="participantName" required placeholder="Participant Name" value={formData?.participantName} className="input" onChange={handleChange} />
        </div>
        {/* Contact Number */}
        <div className='infoDiv'>
          <label htmlFor='contact_phone'>Contact Number</label>
          <input type="number" id='contact_phone' name="contact_phone" required placeholder="Contact Number" value={formData?.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* Email */}
        <div className='infoDiv'>
          <label htmlFor='Email'>Email</label>
          <input type="email" id='Email' name="Email" required placeholder="Email" value={formData?.Email} className="input" onChange={handleChange} />
        </div>
        {/* Institute Name */}
        <div className='infoDiv'>
          <label htmlFor='instituteName'>Institute Name</label>
          <input type="text" id='instituteName' name="instituteName" required placeholder="Institute Name" value={formData?.instituteName} className="input" onChange={handleChange} />
        </div>
        {/* Instrument Used */}
        <div className='infoDiv'>
          <label htmlFor='instrumentsName'>Instrument Used</label>
          <input type="text" id='instrumentsName' name="instrumentsName" required placeholder="Instruments Name" value={formData?.instrumentsName} className="input" onChange={handleChange} />
        </div>
        {/* Instagram Handle */}
        <div className='infoDiv'>
          <label htmlFor='instagramID'>Instagram Handle (if you want to get mentioned in Crescendo's posts)</label>
          <input type="text" id='instagramID' name="instagramID" placeholder="Instagram ID" value={formData?.instagramID} className="input" onChange={handleChange} />
        </div>
        {/* Will you be having backtrack? */}
        <div className='infoDiv'>
          <label className='info_heading' htmlFor='yesno'>Will you be having backtrack?</label>
          {yesnoOptions.map((option, ind) => {
            return <label htmlFor={ind} key={option}><input type="radio" name="yesno" value={option} className="input" onChange={handleChange} />{option}</label>
          })}
        </div>
        {/* List of Instruments used in backtrack */}
        <div className='infoDiv'>
          <label htmlFor='instrumentsNameBacktrack'>List of Instruments used in backtrack</label>
          <input type="text" id='instrumentsNameBacktrack' name="instrumentsNameBacktrack" placeholder="Instruments Name" value={formData?.instrumentsNameBacktrack} className="input" onChange={handleChange} />
        </div>
        {/* Video Submission */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='vid_link'>Video Submission<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='vid_link' name="vid_link" required placeholder="paste video link here" value={formData?.vid_link} className="input" onChange={handleChange} />
        </div>
        {/* Backtrack Submission (if used) */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='aud_link'>Backtrack Submission (if used) <i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='aud_link' name="aud_link" placeholder="paste audio link here" value={formData?.aud_link} className="input" onChange={handleChange} />
        </div>
        {/* Payment link*/}
        {/* <div className='infoDiv'>
          <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData?.vid_link} className="input" onChange={handleChange} />
        </div> */}
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default Groovegenesis;
