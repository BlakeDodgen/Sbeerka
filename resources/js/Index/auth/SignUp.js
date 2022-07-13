import { useState } from "react";
import axios from 'axios';


function SignUp() {

const [values, setValues]  = useState({
    first_name: "",
    surname: "",
    username: "",
    brewery_name: "",
    password: "",
    email: "",
    password: "",
    password_confirmation: "",
    over18: false,
    user_type: 1
})
console.log(values);
    const handleSignUp = async (e)=>{
        e.preventDefault();

         const response = await axios.post('/register', values);
         const response_data = response.data;
    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }
    
      
        return (
            <>
            <p>SignUp</p>
            <form action="/register" method="post" onSubmit={ handleSignUp }>
                <label>Name </label>    
                <input type="text" name="first_name" value={ values.first_name } onChange={ handleChange } />
                <label>Surname </label>  
                <input type="text" name="surname" value={ values.surname } onChange={ handleChange } />
                <label>user name </label>  
                <input type="text" name="username" value={ values.username } onChange={ handleChange } />
                <label>Brewery Name </label>  
                <input type="text" name="brewery_name" value={ values.brewery_name } onChange={ handleChange } />
                <label>Email </label>  
                <input type="email" name="email" value={ values.email } onChange={ handleChange } />
                <label>Password </label>  
                <input type="password" name="password" value={ values.password } onChange={ handleChange } />
                <label>Confirm Password </label>  
                <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />
                <label>I'am over 18 </label>  
                <input type="checkbox" name="over18" value={ values.over18 } onChange={ handleChange } />
                <label>1)User 2)Brewery </label>  
                <input type="number" name="user_type" value={ values.user_type } onChange={ handleChange } />
                {/* <label>Sbeerka Member</label>
                <input type="radio" name="1" value={ values.user_type } onChange={ handleChange } />
                <label>Sbeerka Brewery</label>
                <input type="radio" name="2" value={ values.user_type } onChange={ handleChange } /> */}



                
    
                <button>Create Sbeerka account</button>
    
            </form>
            </>
        );
    
}

export default SignUp;