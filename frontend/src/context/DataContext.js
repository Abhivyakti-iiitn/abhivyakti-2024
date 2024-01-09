import React, { useState } from 'react'
import NewContext from './NewContext'

const DataContext = (props) => {
   const [userData, setuserData] = useState(null);
//    const [isLoggedin, setisLoggedin] = useState(false);
    return (
        <NewContext.Provider value={{ userData:userData, setuserData:setuserData }}>
            {props.children}
        </NewContext.Provider>
    )
}

export default DataContext;