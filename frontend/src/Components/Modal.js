import React from 'react'
import ReactDom from 'react-dom'
import "../css/Modal.css"
import qr from "../assets/qr.png"
import { toast } from 'react-toastify'

export default function Modal({ open, onClose, handleSubmit, formData, handleChange, underProcess,fees }) {
    if (!open) return null
    // const Regex = /^https:\/\/drive\.google\.com\//;
    // const Regex = /^https:\/\/drive\.google\.com\/(?:open\?id=|file\/d\/|drive\/folders\/)([a-zA-Z0-9_-]{28,})(?:\/view)?(?:\?usp=sharing)?$/;
    const Regex = /^https:\/\/drive\.google\.com\/(?:open\?id=|file\/d\/|drive\/folders\/)([a-zA-Z0-9_-]{28,})(?:\/view)?(?:\?.*?(?:usp=sharing|usp=drive_link))?$/;


    const regcheck = (e) => {
        e.preventDefault(); 
        if (Regex.test(formData?.payment_link)){
            handleSubmit();
        }else{
            toast(`Please only provide google drive link.`);
            toast("Please make sure that sharing is set to anyone with link.",{
                delay:3000
            });
            return;
        }
    }

    return ReactDom.createPortal(
        <>
            <div className='Modal__overlay' />
            <div className='Modal'>
                <button className='Modal__btn' onClick={onClose}>X</button>
                <h3 className='Modal__text'>UPI-7058449059@axl</h3>
                <img src={qr} alt="7058449059@axl" className="qr Modal__qr" />
                {/* Payment link*/}
                <form onSubmit={regcheck} style={{display:'flex', flexDirection:'column'}} >
                    <h1 style={{textAlign:"center",marginBottom:"-10px",marginTop:"0px",fontSize:"1.5rem"}}>Pay {fees}</h1>
                    <div className='infoDiv'>
                        <label className='withtooltip' required htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                        <input type="url" id='payment_link' name="payment_link" required placeholder="paste drive link here" value={formData?.payment_link} className="input" onChange={handleChange} />
                    </div>
                    <button className='Modal__submit' type='submit' disabled={underProcess} >Proceed</button>
                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}