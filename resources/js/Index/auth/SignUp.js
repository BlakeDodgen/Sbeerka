import { useState, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadUser } from "../actions/auth";
import UserContext from "../UserContext";

const Radio = (props) => {
    // const [status, setStatus] = React.useState(1);

    return (
        <div>
            <input
                className="radio"
                type="radio"
                name="user_type"
                value="user"
                checked={props.values.user_type === "user"}
                onChange={props.handleChange}
            />
            <label>Sbeerka Member</label>
            <input
                className="radio"
                type="radio"
                name="user_type"
                value="brewery"
                checked={props.values.user_type === "brewery"}
                onChange={props.handleChange}
            />
            <label>Sbeerka Brewery</label>
            {props.values.user_type === "user" ?
                <Status1 values={props.values} handleChange={props.handleChange} setValues={props.setValues} /> :
                <Status2 values={props.values} handleChange={props.handleChange} />
            }
        </div>
    );
};

const Status1 = (props) => {
    const [lol, setLol] = useState(true)

    console.log(props.values)

    return (
        <>
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
                    value={props.values.first_name}
                    onChange={(e) => {
                        props.setValues((previous_values) => {
                            return {
                                ...previous_values,
                                [e.target.name]: e.target.value,
                            };
                        })
                    }}
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
                    value={props.values.surname}
                    onChange={props.handleChange}
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
                    value={props.values.username}
                    onChange={props.handleChange}
                />
            </div>
        </>
    );
};

const Status2 = (props) => {
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
                    value={props.values.brewery_name}
                    onChange={props.handleChange}
                />
            </div>
        </>
    );
};

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
        user_type: "user",
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (values.user_type == "brewery") {
            values.user_type = 2;
        } else if (values.user_type == "user") {
            values.user_type = 1;
        }
        try {
            const response = await axios.post("/register", values);
            const response_data = response.data;
        } catch (err) {
            console.log(err);
        }

        const userData = await loadUser();

        await setUser(userData);

        await setLoadingUser(false);

        if (userData.user_type == 2) {
            return navigate("/signup/brewery")
        }
        return navigate("/");
    };

    const handleChange = (e) => {
        // console.log(e)
        setValues((previous_values) => {
            if (e.target.name === "over18") {
                return {
                    ...previous_values,
                    [e.target.name]: e.target.checked,
                }
            } else {
                return {
                    ...previous_values,
                    [e.target.name]: e.target.value,
                };
            }
        });
    };

    return (
        <>
            <form
                className="form"
                action="/register"
                method="post"
                onSubmit={handleSignUp}
            >
                <h2 className="form__h2">Sign Up</h2>
                <Radio values={values} handleChange={handleChange} setValues={setValues} />

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
                        onChange={handleChange}
                    />
                </div>
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
                <label>I'm over 18<input
                    type="checkbox"
                    name="over18"
                    value={values.over18}
                    onChange={handleChange}
                /></label>

                {/* <label className="form__label-member">User</label>
                <label className="form__label-brewery">Brewery</label>
                <input
                    type="number"
                    name="user_type"
                    value={values.user_type}
                    onChange={handleChange}
                /> */}
                <br />
                <button className="form__button">Create Sbeerka Account</button>
                <br />

            </form>

            {/* <label className="form__label-member">User</label>
                <label className="form__label-brewery">Brewery</label>
                <input
                    type="number"
                    name="user_type"
                    value={values.user_type}
                    onChange={handleChange}
                />
                <br /> */}
        </>

    );
}

export default SignUp;
