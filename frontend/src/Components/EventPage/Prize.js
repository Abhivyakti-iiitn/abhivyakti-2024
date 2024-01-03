import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/prize.css';

function Prize(props) {
    console.log(props)
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
                    <div>{props.prize?.length == 1 ? props.prize[0]:"23 Cr"}</div>
                </div>
                <div>
                    <div>First Prize</div>
                    <div>{props.prize?.length == 2 ? props.prize[1]:"28 Cr"}</div>
                </div>
                <div>
                    <div>Third Prize</div>
                    <div>{props.prize?.length == 3 ? props.prize[2]:"18 Cr"}</div>
                </div>
            </div>
            <div className='add_prize'>
                <div>Additional Prizes</div>
                <div>{props.addPrize?.length !== 0 ? props.addPrize : "T-shirts/ Goodies /Swag pack/ Certificates."}</div>
            </div>
            <div className='register_btn' onClick={()=>navigateTo(`/form/${props.name?.toLowerCase().replace(' ', '')}`)}>Register Now</div>
        </div>
    );
}

export default Prize;
