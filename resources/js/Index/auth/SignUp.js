import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadUser } from "../actions/auth";
import UserContext from "../UserContext";

function SignUp() {
    const navigate = useNavigate();
    const { setUser, setLoadingUser } = useContext(UserContext);

    const [values, setValues] = useState({
        first_name: "",
        surname: "",
        username: "",
        brewery_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        over18: false,
        user_type: "",
    });
    console.log(values);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/register", values);
            const response_data = response.data;
        } catch (err) {
            console.log(err);
        }

        const userData = await loadUser();

        await setUser(userData);

        await setLoadingUser(false);

        return navigate("/");
    };

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <div>
            <input
                className="radio"
                type="radio"
                name="user-radio"
                value={values.user_type}
                checked={status === 1}
                onClick={(e) => radioHandler(1)}
                onChange={handleChange}
            />
            <label>Sbeerka Member</label>
            <input
                className="radio"
                type="radio"
                name="member-radio"
                value={values.user_type}
                checked={status === 2}
                onClick={(e) => radioHandler(2)}
                onChange={handleChange}
            />
            <label>Sbeerka Brewery</label>
            <input
                className="radio"
                id="radio-brewery"
                type="radio"
                name="user-radio"
                value={values.user_type}
                onChange={handleChange}
            />

            <div className="form__container">
                <label id="first-name" className="form__label form__label-name">
                    First Name
                </label>
                <br />
                <input
                    className="form__input form__input-name"
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                />
            </div>
            <br />
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
                    onChange={handleChange}
                />
            </div>
            <br />
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
                    onChange={handleChange}
                />
            </div>
            <br />
        </div>
    );
}
const Status2 = () => {
    return (
        <>
            <div className="form__container">
                <label className="form__label form__label-breweryname">
                    Brewery Name
                </label>
                <br />
                <input
                    className="form__input form__input-breweryname"
                    type="text"
                    name="brewery_name"
                    value={values.brewery_name}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};
return (
    <div className="form">
        <form
            className="form__form"
            action="/register"
            method="post"
            onSubmit={handleSignUp}
        >
            <h2 className="form__h2">Sign Up</h2>
            <Radio />

            <div className="form__container">
                <label className="form__label form__label-email">Email</label>
                <br />
                <input
                    className="form__input form__input-email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div className="form__container">
                <label className="form__label form__label-password">
                    Password
                </label>
                <br />
                <input
                    className="form__input form__input-password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div className="form__container">
                <label className="form__label form__label-confirm">
                    Confirm Password
                </label>
                <br />
                <input
                    className="form__input form__input-confirm"
                    type="password"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    onChange={handleChange}
                />
            </div>
            <br />
            <label>I'm over 18</label>
            <input
                type="checkbox"
                name="over18"
                value={values.over18}
                onChange={handleChange}
            />
            <br />
            <label className="form__label-member">User</label>
            <label className="form__label-brewery">Brewery</label>
            <input
                type="number"
                name="user_type"
                value={values.user_type}
                onChange={handleChange}
            />
            <br />

            <button>Create Sbeerka Account</button>
        </form>
    </div>
);

export default SignUp;
