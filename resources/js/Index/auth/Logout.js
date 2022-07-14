import UserContext from "../UserContext";
import { useState, useEffect, useContext } from 'react';
import axios from "axios";

function Logout() {

    const { user, setUser } = useContext(UserContext);

    
    const logout = async () => {
        const res = await axios.post('/logout');
        return res.data;
    }

    const clickHandler = async () => {
        const res = await logout();

        if (res) {
            return console.log(res)
        }
        setUser(null);
    }

   

    if (!user) return null;

    return (
        <>
        <p>User: {user.email || "no user"}</p>
        <button onClick={clickHandler}>Click</button>
        </>
    )
}

export default Logout;