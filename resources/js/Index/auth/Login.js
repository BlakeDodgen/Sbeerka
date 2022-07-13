import { useState } from "react";

function Login() {
    const [values, setValues] = useState();

    const handleSignUp = async (e)=>{
        e.preventDefault();

        //  const response = await axios.post('/register', values);
        //  const response_data = response.data;
    }

    const handleChange = (e) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
            });
        });
        return (<>
            <p>Login</p>
            <label>user name </label>
            <input type="text" name="username" value={values.username} onChange={handleChange} />
            <label>Password </label>
            <input type="password" name="password" value={values.password} onChange={handleChange} />
        </>
        )
    }
}
    export default Login;