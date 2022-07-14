import { useState } from "react";
import axios from "axios";

function SignUp() {
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
        <div className="form">
            <h2>Sign Up</h2>
            <form
                className="form__form"
                action="/register"
                method="post"
                onSubmit={handleSignUp}
            >
                <div className="form__container">
                    <label
                        id="first-name"
                        className="form__label form__label-name"
                    >
                        First Name
                    </label>
                    <input
                        className="form__input form__input-name"
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-surname">
                        Surname
                    </label>
                    <input
                        className="form__input form__input-surname"
                        type="text"
                        name="surname"
                        value={values.surname}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-username">
                        Username
                    </label>
                    <input
                        className="form__input form__input-username"
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-breweryname">
                        Brewery Name
                    </label>
                    <input
                        className="form__input form__input-breweryname"
                        type="text"
                        name="brewery_name"
                        value={values.brewery_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-email">
                        Email
                    </label>
                    <input
                        className="form__input form__input-email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-password">
                        Password
                    </label>
                    <input
                        className="form__input form__input-password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label className="form__label form__label-confirm">
                        Confirm Password
                    </label>
                    <input
                        className="form__input form__input-confirm"
                        type="password"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                <label>I'm over 18</label>
                <input
                    type="checkbox"
                    name="over18"
                    value={values.over18}
                    onChange={handleChange}
                />
                <label classname="form__label-member">User</label>
                <label classname="form__label-brewery">Brewery</label>
                <input
                    type="number"
                    name="user_type"
                    value={values.user_type}
                    onChange={handleChange}
                />
                {/* To be grouped so they toggle back and forth, the radio buttons have to share a common name */}
                <label>Sbeerka Member</label>
                <input
                    className="radio"
                    id="radio-member"
                    type="radio"
                    name="user-radio"
                    value={values.user_type}
                    onChange={handleChange}
                    checked="checked"
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

                <button>Create Sbeerka Account</button>
            </form>
        </div>
    );
}

export default SignUp;
