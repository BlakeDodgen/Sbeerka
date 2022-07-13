import { useState } from "react";
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    //user has to be loaded

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await axios.post('/login', values);
        const response_data = response.data;
    }

    const handleChange = (e) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
            });
        });
        return (
            <form action="/login" method="post" onSubmit={handleLogin}>
                <p>Login</p>
                <label>User name </label>
                <input type="text" name="username" value={values.username} onChange={handleChange} />
                <label>Password </label>
                <input type="password" name="password" value={values.password} onChange={handleChange} />
            </form>
        )
    }
}
export default Login;