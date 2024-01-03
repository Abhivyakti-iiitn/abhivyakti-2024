import React from 'react';
import '../../css/contact.css';
import Arr from '../../assets/EventPageAsst/arrow.png';
import clubDetails from "../../assets/clubdata.json";

function Contact(props) {

    console.log(props.clubName.toLowerCase());

    const handleSubmit = (e) => {
        e.preventDefault();

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
                    <div className='box_3'>
                        <div>
                            <div className='title1'>CLUB HEAD</div>
                            <div className='contact_info'>{clubDetails[props.clubName.toLowerCase()]?.clubHead}</div>
                            <div>{clubDetails[props.clubName.toLowerCase()]?.contactLead}</div>
                            <div><a style={{color:'brown', textDecorationLine:'none'}} href={`mailto:${clubDetails[props.clubName.toLowerCase()]?.emailIdLead}`}>{clubDetails[props.clubName.toLowerCase()]?.emailIdLead}</a></div>
                        </div>
                        <div>
                            <div className='title1 title2'>CLUB CO-LEAD</div>
                            <div className='contact_info'>{clubDetails[props.clubName.toLowerCase()]?.clubCoLead}</div>
                            <div>{clubDetails[props.clubName.toLowerCase()]?.contactCoLead}</div>
                            <div><a style={{color:'brown', textDecorationLine:'none'}} href={`mailto:${clubDetails[props.clubName.toLowerCase()]?.emailIdCoLead}`}>{clubDetails[props.clubName.toLowerCase()]?.emailIdCoLead}</a></div>
                        </div>
                    </div>
                    <div className='other_contact'>
                        <div className='title1 title3'>CULTURAL COORDINATOR </div>
                        <div className='contact_info'>Divyanshu Singh</div>
                        <div>+917234032401</div>
                        <div><a style={{color:'brown', textDecorationLine:'none'}} href="mailto:bt21cse162@iiitn.ac.in">bt21cse162@iiitn.ac.in</a></div>
                    </div>
                </div>

                <form className='box_4' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' className='input_tag tag1'></input><br></br>
                    <input type='' placeholder='phone no./email address' className='input_tag tag2'></input><br></br>
                    <input type='text' placeholder='ask your Queries' className='input_tag tag3'></input>
                    <button type='submit' className={'contactSubmitBtn'} >Submit</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;
