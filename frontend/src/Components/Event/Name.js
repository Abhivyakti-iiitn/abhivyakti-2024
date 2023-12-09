import React from 'react';
import './name.css';
import mike from './pic/mike.png'

function Name() {
    return (
        <div>
            <div className='border'>
                <div className='heading'>STAR-POD</div>
                <div className='dia'></div>
            </div>
            <div className='subhead'>Stand Up Comedy Competition</div>
            <div className='sidecontainer'>
                <img className='mike' src={mike}></img>
                <div className='vline1'></div>
            </div>
            <div className='endline'></div>
        </div>
    );
}

export default Name;
