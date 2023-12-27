import React from 'react';
import '../../css/contact.css';
import Arr from '../../assets/EventPageAsst/arrow.png';

function Contact() {
    const contactBtnStyles = {
        fontSize: '1.15rem',
        backgroundColor: 'transparent',
        color: 'white',
        padding: '1rem 2rem',
        marginTop: '1rem',
        color: 'white',
        backgroundImage: 'linear-gradient(#F9DAA8, #BC615E)',
        borderImage: 'linear-gradient(#F9DAA8, #BC615E)',
        borderImageSlice: 1,
        cursor: 'pointer',
      };
    return (
        <div>
            <div className='or'>or</div>
            <div className='contact'>Contact Us</div>
            <img src={Arr} className='arrow'></img>
            <div className='box_1'>
                <div className='box_2'>
                    <div className='box_3'>
                        <div>
                            <div className='title1'>CLUB HEAD</div>
                            <div className='contact_info'>Rahul Gandhi</div>
                            <div>+91 9969496900</div>
                            <div>bt69@iiitn.ac.in</div>
                        </div>
                        <div>
                            <div className='title1 title2'>CONTACT 2</div>
                            <div className='contact_info'>Rahul Gandhi</div>
                            <div>+91 9969496900</div>
                            <div>bt69@iiitn.ac.in</div>
                        </div>
                    </div>
                    <div className='other_contact'>
                        <div className='title1 title3'>ANY OTHER CONTACT</div>
                        <div className='contact_info'>Rahul Gandhi</div>
                        <div>+91 9969496900</div>
                        <div>bt69@iiitn.ac.in</div>
                    </div>
                </div>
                <div >
                    <form className='box_4'>
                        <input type='text' placeholder='Name' className='input_tag tag1'></input><br></br>
                        <input type='' placeholder='phone no./email address' className='input_tag tag2'></input><br></br>
                        <input type='text' placeholder='ask your Queries' className='input_tag tag3'></input>
                        <button type='submit' className={'contactSubmitBtn'} style={contactBtnStyles}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
