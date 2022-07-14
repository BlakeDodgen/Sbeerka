import UserContext from "../UserContext";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    
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
        return navigate("/");
    }

    // if (!user) return null;

    return (
        <p onClick={clickHandler}>Logout</p>
    )
}

export default Logout;