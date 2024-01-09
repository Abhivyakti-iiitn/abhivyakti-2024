import React, { useState } from 'react'
import NewContext from './NewContext'

const DataContext = (props) => {
    const [userData, setuserData] = useState(null);
    const url = process.env.HOST || 'http://localhost:5000';

    const fetchUser = async (access_token) => {

        const res = await fetch(`${url}/api/fetch-user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access_token': access_token
            }
        });

        const data = await res.json();

        if (data.success) {

           setuserData(data.findUser)
        }
        return data
    }
    //    const [isLoggedin, setisLoggedin] = useState(false);
    return (
        <NewContext.Provider value={{ userData: userData, setuserData: setuserData, fetchUser: fetchUser }}>
            {props.children}
        </NewContext.Provider>
    )
}

export default DataContext;