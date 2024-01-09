import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../css/EntryLoader.css";
import NewContext from '../context/NewContext';
import { toast } from 'react-toastify';



function EntryLoader(props) {
    const context = useContext(NewContext);
    const navigateTo = useNavigate();


    useEffect(() => {

        let suc = false;
        
        if (window.localStorage.getItem("access_token")) {
            try {

                const data = context.fetchUser(window.localStorage.getItem("access_token")).then((el)=>{
                    suc = el.success;
                    context.setuserData(el.findUser);
                })
                
            } catch (err) {
                navigateTo('/home');
                console.log(err);
            }
        }
        setTimeout(() => {
            if (suc){
        //    toast.success("Welcome Back!");

            }
            navigateTo('/home');
        }, 4000);
    }, [])

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