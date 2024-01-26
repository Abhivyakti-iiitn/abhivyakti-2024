import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/prize.css';

function Prize(props) {
    const isModelUnitedNations = props.name === "modelunitednations";
    const navigateTo = useNavigate();
    return (
        <div className='prize_pool'>
            <div className="liner">

                <div className="line"></div>
                <h1 className='prize'>PRIZE POOL</h1>
                <div className="line"></div>
            </div>
            <div className='prize_amount'>
                {props.prize?.length > 1 && <div>
                    <div>Second Prize</div>
                    <div>{props.prize[1]}</div>
                </div>}
                {props.prize?.length > 0 && <div>
                    <div>{isModelUnitedNations ? 'Prize Pool':'First Prize'}</div>
                    <div>{props.prize[0]}</div>
                </div>}
                {props.prize?.length === 3 && <div>
                    <div>Third Prize</div>
                    <div>{props.prize[2]}</div>
                </div>}
            </div>
            <div className='register_btn' onClick={() => navigateTo(`/form/${props.name?.toLowerCase().replace(' ', '')}`)}>Register Now</div>
        </div>
    );
}

export default Prize;
