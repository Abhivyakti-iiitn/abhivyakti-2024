import React from 'react'

function Mun() {
  let organizations = [
    "UNHRC(United Nations Human Rights Council)",
    "WTO(World Trade Organization)",
    "Constituent Assembly of India Summit ",
    "International Press Committee "
  ]
  let yesno = [
    "Yes", "No"
  ]
  return (
    <>
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
  )
}

export default Mun