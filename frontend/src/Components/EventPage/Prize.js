import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/prize.css';

function Prize() {
    const navigateTo = useNavigate();
    return (
        <div className='prize_pool'>
            <div className="liner">

                <div className="line"></div>
                <h1 className='prize'>PRIZE POOL</h1>
                <div className="line"></div>
            </div>
            <div className='prize_amount'>
                <div>
                    <div>Second Prize</div>
                    <div>23 Cr</div>
                </div>
                <div>
                    <div>First Prize</div>
                    <div>28 Cr</div>
                </div>
                <div>
                    <div>Third Prize</div>
                    <div>18 Cr</div>
                </div>
            </div>
            <div className='add_prize'>
                <div>Additional Prizes</div>
                <div>T-shirts/ Goodies /Swag pack/ Certificates.</div>
            </div>
            <div className='register_btn' onClick={()=>navigateTo('/form')}>Register Now</div>
        </div>
    );
}

export default Prize;
