import React from 'react'
import ReactDom from 'react-dom'
import "../css/Modal.css"
import qr from "../assets/qr.jpg"

export default function Modal({ open, onClose, handleSubmit, formData, handleChange, underProcess }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='Modal__overlay' />
            <div className='Modal'>
                <button className='Modal__btn' onClick={onClose}>X</button>
                <h3 className='Modal__text'>UPI-7058449059@axl</h3>
                <img src={qr} alt="7058449059@axl" className="qr Modal__qr" />
                {/* Payment link*/}
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}} >

                    <div className='infoDiv'>
                        <label className='withtooltip' required htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                        <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData?.payment_link} className="input" onChange={handleChange} />
                    </div>
                    <button className='Modal__submit' type='submit' disabled={underProcess} >Proceed</button>
                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}