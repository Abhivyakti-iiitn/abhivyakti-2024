import React, { useState, useContext } from 'react';
import NewContext from '../../context/NewContext';
import { toast } from 'react-toastify';

const Mun = ({ formData, setFormData, onCloseModal, onOpenModal, handleChange }) => {

  const context = useContext(NewContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isRegistered = await context.checkRegistrationStatus('modelunitednations', window.localStorage.getItem("access_token"));

      if (isRegistered) toast.error('You have already registered for this event.');
      else onOpenModal();
  } catch (error) {
      console.error('Error checking registration status:', error);
  }
  };

  const organizations = [
    "UNHRC(United Nations Human Rights Council)",
    "WTO(World Trade Organization)",
    "Constituent Assembly of India Summit",
    "International Press Committee"
  ];

  const yesno = ["Yes", "No"];

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className='infoDiv'>
          {/* WhatsApp Number */}
          <label htmlFor='contact_phone'>WhatsApp Number</label>
          <input type="number" id='contact_phone' name="contact_phone" required placeholder="WhatsApp Number" value={formData?.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* School/College Name */}
        <div className='infoDiv'>
          <label htmlFor='teamLeadName'>School/College name</label>
          <input type="text" id='teamLeadName' name="teamLeadName" required placeholder="Team Lead" value={formData?.teamLeadName} className="input" onChange={handleChange} />
        </div>
        {/* Committee Selection */}
        <div className='infoDiv'>
          <label className='info_heading'>Committee selection</label>
          {organizations.map((option, ind) => {
            return <label htmlFor={ind} key={option}><input type="radio" name='organizations' value={option} className="input" onChange={handleChange} />{option}</label>
          })}
        </div>
        {/* Accommodation Required */}
        <div className='infoDiv'>
          <label className='info_heading'>Accommodation required (on first come first basis and on payable basis) as a 2-day event</label>
          {yesno.map((option, ind) => {
            return <label htmlFor={ind} key={option}><input type="radio" name="accommodationRequired" value={option} className="input" onChange={handleChange} />{option}</label>
          })}
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

export default Mun;
