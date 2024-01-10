import React from 'react'
import ReactDom from 'react-dom'
import "../css/Modal.css"
import qr from "../assets/qr.jpg"

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000
// }

export default function Modal({ open, onClose, handleSubmit, formData, handleChange }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div 
            // style={OVERLAY_STYLES} 
            className='Modal__overlay' />
            <div 
            // style={MODAL_STYLES} 
            className='Modal'>
                <button className='Modal__btn' onClick={onClose}>X</button>
                <h3 className='Modal__text'>UPI-7058449059@axl</h3>
                <img src={qr} alt="7058449059@axl" className="qr Modal__qr" />
                {/* Payment link*/}
                <div className='infoDiv'>
                    <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                    <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData.payment_link} className="input" onChange={handleChange} />
                </div>
                <button className='Modal__submit' type='button' onClick={handleSubmit}>Proceed</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}