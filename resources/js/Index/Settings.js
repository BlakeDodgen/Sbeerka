import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const Settings = () => {

    const { id } = useParams();

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const clickHandler = async () => {
        const res = await axios.post(`/api/user/${user.id}/settings/delete`);
        console.log(res);
        await setUser(null);
        return navigate("/");
    }

    return (
        <>
        <h1>SETTINGS</h1>
        <h1>User ID: {id}</h1>
        <h2>Username: {user.username}</h2>
        <p onClick={clickHandler}>DELETE PROFILE</p>
        </>
    )
}

export default Settings;