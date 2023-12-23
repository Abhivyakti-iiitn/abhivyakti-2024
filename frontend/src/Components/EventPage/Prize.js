import React from 'react';
import '../../css/prize.css';

function Prize() {
    return (
        <div>
            <div className='prize'>PRIZE POOL</div>
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
            <div className='register_btn'>Register Now</div>
        </div>
    );
}

export default Prize;
