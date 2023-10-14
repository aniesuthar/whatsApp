import { createContext, useEffect, useRef, useState } from "react";

import { io } from 'socket.io-client';



export const AccountContext = createContext(null);

function AccountProvider ({children}){

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState();

    const socket = useRef();

    // const socketURL = "ws://pf-whatsappsocket.onrender.com";
    const socketURL = "ws://localhost:8000";

    useEffect(()=>{
        socket.current = io(socketURL);
        console.log("Socket Server is Running");
    }, [])

    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )

}

export default AccountProvider;