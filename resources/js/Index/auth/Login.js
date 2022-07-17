import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import { loadUser, login } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import BasicSwitches from "../mui/BasicSwitches";
import FormPropsTextFields from "../mui/FormPropsTextFields";
import Buttons from "../mui/Buttons";
import DiscreteSliderMarks from "../mui/DiscreteSliderMarks";
import Dropzone from "../forms/UploadForm";

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
                    <label>User name </label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__container">
                    <label>Password </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
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

            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </>
    );
}
export default Login;
