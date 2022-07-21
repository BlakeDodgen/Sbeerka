import axios from "axios";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

const UpdateUserForm = ({ user, setUpdatingUser }) => {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    
    const [values, setValues] = useState({
        id: user,
        first_name: "",
        surname: "",
        username: "",
        email: ""
    })

    const deleteHandler = async () => {
        const res = await axios.post(`/api/user/${user}/settings/delete`);
        await setUser(null);
        return navigate("/");
    }
    
    const handleChange = (e) => {
        // console.log(values)
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const closeHandler = () => {
        setUpdatingUser(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/users/edit", values);
        const response_data = response.data;
        console.log(response_data)

        setUpdatingUser(false)
    };
    
    return (
        <>
        <h2>Update User</h2>
        <p onClick={closeHandler}>CLOSE</p>
        <form method="post" onSubmit={handleSubmit}>
            <div className="form__container">
            <label
                    id="first-name"
                    className="form__label form__label-name"
                >
                    First Name
                </label>
                <br />
                <input
                    className="form__input form__input-name"
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    autocomplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form__container">
                <label className="form__label form__label-surname">
                    Surname
                </label>
                <br />
                <input
                    className="form__input form__input-surname"
                    type="text"
                    name="surname"
                    value={values.surname}
                    autocomplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form__container">
                <label className="form__label form__label-username">
                    Username
                </label>
                <br />
                <input
                    className="form__input form__input-username"
                    type="text"
                    name="username"
                    value={values.username}
                    autocomplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form__container">
                    <label className="form__label form__label-email">
                        Email
                    </label>
                    <br />
                    <input
                        className="form__input form__input-email"
                        type="email"
                        name="email"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>
            <button>Update User</button>
        </form>
        <button onClick={deleteHandler}>DELETE PROFILE</button>
        </>
    )
}
export default UpdateUserForm;