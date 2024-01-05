import React, { useState, useRef } from 'react';
import questionsData from '../../assets/questionData.json';
import "../../newscss/form.scss";
import "../../css/tooltip.css"



const selector = (eventName) => {
  let organizations = [
    "UNHRC(United Nations Human Rights Council)",
    "WTO(World Trade Organization)",
    "Constituent Assembly of India Summit ",
    "International Press Committee "
  ]
  let yesno = [
    "Yes", "No"
  ]

  // console.log(organizations)
  switch (eventName) {
    case "modelunitednations":
      return <>
        {/* Phone Number (whatsapp) */}
        <div className='infoDiv'>
          <label>WhatsApp Number</label>
          <input type="number" name="contact_phone" required placeholder="WhatsApp Number" className="input" />
        </div>

        {/* School/College Name */}

        <div className='infoDiv'>
          <label>School/College name</label>
          <input type="text" name="teamLeadName" required placeholder="Team Lead" className="input" />
        </div>

        <div className='infoDiv'>
          <label className='info_heading'>Committee selection ( a counter applied on each, seats can be increased in future depending on the participation, portfolios, agendas and rop will be assigned or available for selection 12-15 days prior to the event)</label>
          {organizations.map((option, ind) => {
            return <label htmlFor={ind} key={option}><input type="radio" name='organizations' value={option} className="input" />{option}</label>
          })}
        </div>

        <div className='infoDiv'>
          <label className='info_heading' htmlFor=''>Accommodation required (on first come first basis and on payable basis) as 2 day event</label>
          {yesno.map((option, ind) => {
            return <label htmlFor={ind} key={option}><input type="radio" name="yesno" value={option} className="input" />{option}</label>
          })}
        </div>
      </>
      break;
    case "roadtoredcarpet":
      return <>
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
          <label>Short Video <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
        </div>
      </>

      break;
    case "admads":
      return <>
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
          <label>Short Video <i class="fa-solid fa-circle-info tooltip"> <span class="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" name="vid_link" required placeholder="paste video link here" className="input" />
        </div>
      </>

      break;

    default:
      break;
  }
}

const Form = (props) => {
  const formRef = useRef(null);
  // const [formData, setFormData] = useState({ });
  // const [answers, setAnswers] = useState({ });

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value });
  // };

  // const handleRadioChange = (questionId, value) => {
  //   setAnswers({...answers, [questionId]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);
    // console.log('Answers:', answers);
    // You can handle form submission logic here
    console.log(formRef.current.organizations?.value)
  };


  return (
    <div className='formDiv'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} ref={formRef} className='form'>
        {selector(props.name)}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};
export default Form






