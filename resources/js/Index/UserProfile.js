import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserProfile = () => {

    const { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);

    const clickHandler = async () => {
        const res = await axios.post(`/api/user/${user.id}/settings/delete`);
        await setUser(null);
        return navigate("/");
    }

    const loadData = async () => {
        const response = await axios.get(`/api/reviews/${id}`);
        setReviews(response.data);
        console.log(response.data) 
    }

    useEffect(() => {
        loadData();
    }, []);
    
    if (user.user_type == 1) {
        return (
            <div className="userProfile">
            <p>User ID: {id}</p>
            <p>Username: {user.username}</p>
            {(reviews.length > 0) && <p><strong>Reviewed Beers: </strong></p>}
            {reviews.map((review, i) => (
                    <p key={i}>{review.beer.name}</p>
                ))}
            
            {user.user_type != 3 &&
                <p onClick={clickHandler}>DELETE PROFILE</p>
            }
            </div>
        )
    } else if (user.user_type == 2) {
        return (
            <h1>Brewery User</h1>
        )
    } else if (user.user_type == 3){
        return (
            <h1>Admin</h1>
        )
    }
    
}

export default UserProfile;