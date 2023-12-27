import React from 'react';
import '../css/tandc.css';
import tcdata from '../assets/tandc.json';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';


function TandC() {

    const nav = useNavigate();
    return (
        <>

            <div className='termsconditions'>
                <div className="liner">
                    <div className="line"></div>
                    <h1>Terms & Conditions</h1>
                    <div className="line"></div>
                </div>

                <div className="tc_content">

                    {tcdata.map((el) => {
                        return <div className='tc_cont_item'>

                            {el.head && <h3 className='head'>{el.head}</h3>}
                            <p className='para'>{el.para}</p>
                        </div>
                    })}
                </div>
                <span onClick={() => nav(-1)}><i class="fa-solid fa-xmark"></i>Close</span>
            </div>
            <Footer/>
        </>
    )
}

export default TandC