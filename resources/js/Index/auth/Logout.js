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
        const resp = await logout();
        setUser(null);
    }

    // if (!user) return null;

    return (
        <button onClick={clickHandler}>Click</button>
    )
}

export default Logout;