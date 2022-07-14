import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {

    const { id } = useParams();

    const { user } = useContext(UserContext);

    return (
        <>
        <h1>User ID: {id}</h1>
        <h2>Username: {user.username}</h2>
        </>
    )
}

export default UserProfile;