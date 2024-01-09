import React, { useState } from 'react';

const Mun = () => {
  const [formData, setFormData] = useState({
    contact_phone: '',
    teamLeadName: '',
    organizations: '',
    accommodationRequired: ''
  });

  const organizations = [
    "UNHRC(United Nations Human Rights Council)",
    "WTO(World Trade Organization)",
    "Constituent Assembly of India Summit",
    "International Press Committee"
  ];

  const yesno = ["Yes", "No"];

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
      contact_phone: '',
      teamLeadName: '',
      organizations: '',
      accommodationRequired: ''
    });
    console.log(formData);
    const response = await fetch('http://localhost:8080/mun', {
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
          {/* WhatsApp Number */}
          <label htmlFor='contact_phone'>WhatsApp Number</label>
          <input type="number" id='contact_phone' name="contact_phone" required placeholder="WhatsApp Number" value={formData.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* School/College Name */}
        <div className='infoDiv'>
          <label htmlFor='teamLeadName'>School/College name</label>
          <input type="text" id='teamLeadName' name="teamLeadName" required placeholder="Team Lead" value={formData.teamLeadName} className="input" onChange={handleChange} />
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
        <button type="submit" onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Mun;
