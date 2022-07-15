import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserProfile = () => {

    const { id } = useParams();

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const clickHandler = async () => {
        const res = await axios.post(`/api/user/${user.id}/settings/delete`);
        await setUser(null);
        return navigate("/");
    }

    return (
        <>
        <h1>User ID: {id}</h1>
        <h2>Username: {user.username}</h2>
        {user.user_type != 3 &&
            <p onClick={clickHandler}>DELETE PROFILE</p>
        }
        </>
    )
}

export default UserProfile;