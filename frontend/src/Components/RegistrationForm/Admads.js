import React, { useState, useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewContext from '../../context/NewContext';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_HOST || "http://localhost:8080"

const Admads = ({formData, setFormData, onCloseModal, onOpenModal, handleChange}) => {

  const context = useContext(NewContext);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal()
  };

  return (
    <>
      <form onSubmit={handleSubmit}  className="form">
        <div className='infoDiv'>
          {/* Team Name */}
          <label htmlFor='teamName'>Team Name</label>
          <input type="text" id='teamName' name="teamName" required placeholder="Team Name" value={formData?.teamName} className="input" onChange={handleChange} />
        </div>
        <div className='infoDiv'>
          {/* College Name */}
          <label htmlFor='clgName'>College Name</label>
          <input type="text" id='clgName' name="clgName" required placeholder="College Name" value={formData?.clgName} className="input" onChange={handleChange} />
        </div>
        {/* Team Lead Name */}
        <div className='infoDiv'>
          <label htmlFor='teamLeadName'>Team Lead Name</label>
          <input type="text" id='teamLeadName' name="teamLeadName" required placeholder="Team Lead Name" value={formData?.teamLeadName} className="input" onChange={handleChange} />
        </div>
        {/* Contact Details of Leader (WhatsApp No.) */}
        <div className='infoDiv'>
          <label htmlFor='contact_phone'>Contact Details of Leader (WhatsApp No.)</label>
          <input type="number" id='contact_phone'  name="contact_phone" required placeholder="WhatsApp Number" value={formData?.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* Short Video */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='vid_link'>Short Video <i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='vid_link' name="vid_link" required placeholder="paste video link here" value={formData?.vid_link} className="input" onChange={handleChange} />
        </div>
        {/* Payment link*/}
        {/* <div className='infoDiv'>
          <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData.payment_link} className="input" onChange={handleChange} />
        </div> */}
        
        <button type="submit" >Continue</button>
      </form>
    </>
  );
};

export default Admads;
