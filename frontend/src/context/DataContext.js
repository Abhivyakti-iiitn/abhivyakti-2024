import React, { useState } from 'react'
import NewContext from './NewContext'
import { toast } from 'react-toastify';

// const selector = (eventName) => {



//     // console.log(organizations)
//     switch (eventName) {
//         case "modelunitednations":
//             return <Mun onOpenModal={onOpenModal} onCloseModal={onCloseModal} />;
//         case "roadtoredcarpet":
//             return <Roadtoredcarpet />;
//         case "admads":
//             return <Admads onOpenModal={onOpenModal} onCloseModal={onCloseModal} handleChange={handleChange} />;
//         case "showstopper":
//             return <ShowStopper />
//         case "bronxbattleground":
//             return <BronxBattleground />
//         case "rythmrumble":
//             return <RythmRumble />
//         case "groovegenesis":
//             return <Groovegenesis />
//         case "stellarsing-off":
//             return <Stellarsingoff />
//         case "rhymeriot":
//             return <Rhymeriot />
//         case "praanant":
//             return <Praanaant />
//         case "andhakaar":
//             return <Andhkaar />
//         case "bahumukhi":
//             return <Bahumukhi />
//         default:
//             break;
//     }

// }

const DataContext = (props) => {
    const [userData, setuserData] = useState(null);
    const url = process.env.REACT_APP_HOST || 'https://abhivyakti-2024-m1j7.vercel.app';
    const [isloggedIn, setisloggedIn] = useState(false)

    const logIn = () =>{setisloggedIn(true)};
    const logOut = () =>{setisloggedIn(false)};


    // console.log(url)

    const Register = async (event_name, formData, name, email, access_token) => {
       

        // let rest_link = selector(event_name);
        const response = await fetch(`${url}/api/${event_name}`, {
            method: 'POST',
            body: JSON.stringify({formData, regBy : name, regbyEmail:email}),
            headers: {
                'Content-Type': 'application/json',
                'access_token': access_token
            }
        });

        const data = await response.json();

        return data;


    }

    const fetchUser = async (access_token) => {

        const res = await fetch(`${url}/api/fetch-user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access_token': access_token
            }
        });

        const data = await res.json();

        return data
    }
    //    const [isLoggedin, setisLoggedin] = useState(false);
    return (
        <NewContext.Provider value={{ userData: userData, setuserData: setuserData, fetchUser: fetchUser, Register:Register, isloggedIn:isloggedIn, logIn:logIn, logOut:logOut }}>
            {props.children}
        </NewContext.Provider>
    )
}

export default DataContext;