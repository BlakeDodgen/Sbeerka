import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const Settings = () => {
    const { id } = useParams();

    const { user, setUser } = useContext(UserContext);
    // console.log(user.user_type);
    const navigate = useNavigate();

    const test = 3;

    const clickHandler = async () => {
        // const res = await axios.post(`/api/user/${user.id}/settings/delete`);
        // console.log(user);
        // await setUser(null);
        // return navigate("/");
    };

    return (
        <>
            <h1>SETTINGS</h1>
            <h2>Username: {user.username}</h2>
            {user.user_type != 3 && (
                <p onClick={clickHandler}>DELETE PROFILE</p>
            )}
        </>
    );
};

export default Settings;
