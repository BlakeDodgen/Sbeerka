import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from "../UserContext";

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const { setUser } =useContext(UserContext);
    //user has to be loaded
    const loadUser = async () => {
        const res = await axios.get('/api/user');
        return res.data;
        
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await axios.post('/login', values);
        const response_data = response.data;
        const res =loadUser();
        setUser(res);
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
        <form action="/login" method="post" onSubmit={handleLogin}>
            <p>Login</p>
            <label>User name </label>
            <input type="text" name="email" value={values.email} onChange={handleChange} />
            <label>Password </label>
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            <button>Log In</button>
        </form>
    )
}
export default Login;