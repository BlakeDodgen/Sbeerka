import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import { loadUser, login } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import BasicSwitches from "../mui/BasicSwitches";
import FormPropsTextFields from "../mui/FormPropsTextFields";
import Buttons from "../mui/Buttons";
import DiscreteSliderMarks from "../mui/DiscreteSliderMarks";


function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const { setUser, setLoadingUser } = useContext(UserContext);

    const [errorResponse, setErrorResponse] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setLoadingUser(true);
        const res = await login(values);

        if (typeof res === "string") {
            setErrorResponse(res);
            return setLoadingUser(false);
        }

        const userData = await loadUser();

        await setUser(userData);

        await setLoadingUser(false);

        return navigate("/");
    };

    const handleChange = (e) => {
        setValues((previous_values) => {
            console.log(values)
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };



    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form__h2">Login</h2>

                <div className="form__container">
                    <label>Email</label>
                    <br />
                    <input className="form__input"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        autocomplete="off"
                    />
                </div>
                <div className="form__container">
                    <label>Password</label>
                    <br />
                    <input className="form__input"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        autocomplete="off"
                    />
                </div>
                <br />
                <button className="form__button">Log In</button>
                {!!errorResponse && <span className="form__failed">Login Failed</span>}
                <br />

            </form>
            {/* <button onClick={async () => {
            const user = await loadUser()
            console.log(user)
            }}>Check User</button> */}

        </>
    );
}
export default Login;
