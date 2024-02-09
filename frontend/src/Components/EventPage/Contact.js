import React, { useEffect, useRef, useState } from 'react';
import '../../css/contact.css';
import Arr from '../../assets/EventPageAsst/arrow.png';
import clubDetails from "../../assets/clubdata.json";
import emailjs from '@emailjs/browser';
import MailLoader from '../Loader';
import { toast } from 'react-toastify';


const PUB_API = process.env.REACT_APP_EMAILJS_PUB_API;
const TEMP_ID = process.env.REACT_APP_EMAILJS_TEMP_ID;
const SERV_ID = process.env.REACT_APP_EMAILJS_SEVICE_ID;



function Contact(props) {

    const [isSending, setisSending] = useState(false)

    const form = useRef(null);

    useEffect(() => {
        emailjs.init(PUB_API);
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setisSending(true);

        // console.log(form.current.message.value)


        await emailjs.sendForm(SERV_ID, TEMP_ID, form.current)
            .then(function (response) {
                // console.log('SUCCESS!', response.status, response.text);
                form.current.from_name.value = "";
                form.current.email_phone.value = "";
                form.current.message.value = "";

                
                toast.success("Mail Sent Successfully!");
                
            }, function (error) {
                console.log('FAILED...', error);
                toast.error("Failed to send the mail! Please contact manually through the given information! ");
            });


        setisSending(false);

    }
    const contactBtnStyles = {
        fontSize: '1.15rem',
        backgroundColor: 'transparent',
        color: 'white',
        padding: '0.5rem 2rem',
        marginTop: '1rem',
        color: 'white',
        borderImage: 'linear-gradient(#F9DAA8, #BC615E)',
        width: '240%',
        borderImageSlice: 1,
        cursor: 'pointer',
        borderRadius: '10px'
    };

    return (
        <div>
            <div className='or'>or</div>
            <div className='contact'>Contact Us</div>
            <img src={Arr} className='arrow'></img>
            <div className='box_1'>
                <div className='box_2'>
                    {clubDetails[props.clubName.toLowerCase()] && <div className='box_3'>
                        <div>
                            <div className='title1'>CLUB HEAD</div>
                            <div className='contact_info'>{clubDetails[props.clubName.toLowerCase()]?.clubHead}</div>
                            <div>{clubDetails[props.clubName.toLowerCase()]?.contactLead}</div>
                            <div><a style={{ color: 'brown', textDecorationLine: 'none' }} href={`mailto:${clubDetails[props.clubName.toLowerCase()]?.emailIdLead}`}>{clubDetails[props.clubName.toLowerCase()]?.emailIdLead}</a></div>
                        </div>
                        <div>
                            {clubDetails[props.clubName.toLowerCase()]?.clubCoLead !== "" && <><div className='title1 title2'>CLUB CO-LEAD</div>
                                <div className='contact_info'>{clubDetails[props.clubName.toLowerCase()]?.clubCoLead}</div>
                                <div>{clubDetails[props.clubName.toLowerCase()]?.contactCoLead}</div>
                                <div><a style={{ color: 'brown', textDecorationLine: 'none' }} href={`mailto:${clubDetails[props.clubName.toLowerCase()]?.emailIdCoLead}`}>{clubDetails[props.clubName.toLowerCase()]?.emailIdCoLead}</a></div></>}
                        </div>
                    </div>}
                    <div className='other_contact'>
                        <div className='title1 title3'>CULTURAL COORDINATOR </div>
                        <div className='contact_info'>Divyanshu Singh</div>
                        {/* <div>+917234032401</div> */}
                        <div><a style={{ color: 'brown', textDecorationLine: 'none' }} href="mailto:bt21cse162@iiitn.ac.in">bt21cse162@iiitn.ac.in</a></div>
                    </div>
                </div>
                <form className='box_4' ref={form} onSubmit={handleSubmit}>
                    {isSending && <div className='loader'><MailLoader /></div>}

                    <input type='text' required placeholder='Name' name='from_name' className='input_tag tag1' style={{color:'lightgrey'}}></input><br></br>
                    <input type='text' required placeholder='phone no./email address' name='email_phone' className='input_tag tag2' style={{color:'lightgrey'}}></input><br></br>
                    <textarea type='text' required multiple placeholder='ask your Queries' name='message' className='input_tag tag3' style={{color:'lightgrey'}}></textarea>
                    <button type='submit' className={'contactSubmitBtn'} disabled={isSending}>Submit</button>

                </form>

            </div>
        </div>
    );
}

export default Contact;