import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import UpdateUserForm from "./forms/UpdateUserForm";

const UserProfile = () => {
    const { id } = useParams();
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [updatingUser, setUpdatingUser] = useState(false);

    const editClickHandler = () => {
        setUpdatingUser(true);
    };

    const loadData = async () => {
        const response = await axios.get(`/api/reviews/${id}`);
        setReviews(response.data);
        // console.log(response.data)
    };

    useEffect(() => {
        loadData();
    }, [updatingUser]);

    if (user.user_type == 1 && user.id == id) {
        return (
            <div className="userProfile">
                <p>User ID: {id}</p>
                <p>Username: {user.username}</p>
                <br />

                {reviews.length > 0 && (
                    <p>
                        <strong>Reviewed Beers: </strong>
                    </p>
                )}
                {reviews.map((review, i) => (
                    <>
                        <Link key={i} to={`/beers/${review.beer.id}`}>
                            {review.beer.name}
                        </Link>
                        <img
                            key={i}
                            src={`/img/beers/${review.beer.beer_pic.picture}`}
                            alt="beer logo"
                            style={{ width: "100px" }}
                        />
                    </>
                ))}

                {user.user_type == 1 &&
                    user.id == id &&
                    updatingUser == false && (
                        <button onClick={editClickHandler}>
                            Update Profile
                        </button>
                    )}
                {updatingUser == true && (
                    <UpdateUserForm
                        user={user.id}
                        setUpdatingUser={setUpdatingUser}
                    />
                )}

                {/* {user.user_type != 3 &&
                    <p onClick={clickHandler}>DELETE PROFILE</p>
                } */}
            </div>
        );
    } else if (user.user_type == 2) {
        return <h1>Brewery User</h1>;
    } else if (user.user_type == 3) {
        return <h1>Admin</h1>;
    }
};

export default UserProfile;
