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

    // const loadData = async () => {
    //     const response = await axios.get(`/api/beers/${id}`);
    //     setBeer(); 
    // }

    // useEffect(() => {
    //     loadData();
    // }, []);
    
    if (user.user_type == 1) {
        return (
            <>
            <p>User ID: {id}</p>
            <p>Username: {user.username}</p>
            <p>First Name: {user.first_name}</p>
            <p>Surname: {user.surname}</p>
            <p><strong>Reviewed Beers: </strong></p>
            {user.user_type != 3 &&
                <p onClick={clickHandler}>DELETE PROFILE</p>
            }
            </>
        )
    } else {
        return (
            <h1>Not Beer User</h1>
        )
    }
    
}

export default UserProfile;