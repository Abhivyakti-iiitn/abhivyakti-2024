import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/EntryLoader.css";

function EntryLoader(props) {
    const navigateTo = useNavigate();
    setTimeout(() => {
        navigateTo('/home');
    }, 4000);
    return (
        <div className="entry_loader">
            <div className="entry_loader_main">
                <div className="entry_loader_img"></div>
                <div className='entry_loader_txt'>{props.msg}</div>
            </div>
        </div>
    )
}

export default EntryLoader