import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from "../UserContext";
import { loadUser, login } from "../actions/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const { setUser, setLoadingUser } = useContext(UserContext);
    
    const [ errorResponse, setErrorResponse ] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        await setLoadingUser(true)
        const res = await login(values)

        if (typeof res === 'string') {
            setErrorResponse(res)
            return setLoadingUser(false)
        }

        const userData = await loadUser();
        

        await setUser(userData);

        await setLoadingUser(false);

        return navigate('/');
    }


    const handleChange = (e) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
            });
        });    
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>Login</p>
            <label>User name </label>
            <input type="text" name="email" value={values.email} onChange={handleChange} />
            <label>Password </label>
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            <button>Log In</button>
            {
                !!errorResponse && <span>errorResponse</span>
            }
        </form>
        {/* <button onClick={async () => {
            const user = await loadUser()
            console.log(user)
            }}>Check User</button> */}
        </>
    )
}
export default Login;