import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/prize.css';
import {toast} from 'react-toastify';
import eventContent from '../../assets/EventContent.json';

function Prize(props) {
    const isModelUnitedNations = props.name === "modelunitednations";
    const navigateTo = useNavigate();

    const isRegistrationDateValid = (registrationDate) => {
        const [day, month, year] = registrationDate.split('/').map(Number);
        const registrationDateObj = new Date(2000 + year, month - 1, day);
        const currentDate = new Date();
    
        return currentDate <= registrationDateObj;
      }
    
      const handleRegisterClick = () => {
        if (isRegistrationDateValid(eventContent[props.name].registrationDate))
            navigateTo(`/form/${props.name?.toLowerCase().replace(' ', '')}`);
        else
          toast.error(`Registration Closed for ${eventContent[props.name].name}`);
      }

    return (
        <div className='prize_pool'>
            <div className="liner">

                <div className="line"></div>
                <h1 className='prize'>PRIZE POOL</h1>
                <div className="line"></div>
            </div>
            <div className='prize_amount'>
                {props.prize?.length === 1 && <div>
                    <div>{isModelUnitedNations ? 'Prize Pool' : 'First Prize'}</div>
                    <div>{props.prize[0]}</div>
                </div>}
                
                {props.prize?.length === 2 && <>
                    <div>
                        <div>{isModelUnitedNations ? 'Prize Pool' : 'First Prize'}</div>
                        <div>{props.prize[0]}</div>
                    </div>
                    <div>
                        <div>Second Prize</div>
                        <div>{props.prize[1]}</div>
                    </div>
                </>}

                {props.prize?.length === 3 && <>
                    <div>
                        <div>Second Prize</div>
                        <div>{props.prize[1]}</div>
                    </div>
                    <div>
                        <div>{isModelUnitedNations ? 'Prize Pool' : 'First Prize'}</div>
                        <div>{props.prize[0]}</div>
                    </div>
                    <div>
                        <div>Third Prize</div>
                        <div>{props.prize[2]}</div>
                    </div>
                </>}
            </div>
            <div className='register_btn' onClick={handleRegisterClick}>Register Now</div>
        </div>
    );
}

export default Prize;
