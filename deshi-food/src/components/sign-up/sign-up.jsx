import { useState } from "react";

const defaultFields = {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }

const SignUp = () =>{

    const [formFields, setFormFields] = useState(defaultFields);
    const {name, email, password, confirmPassword} = formFields;

    const eventChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={()=> {}}>
                <label>Name</label>
                <input type = 'text' required onChange={eventChange} name='name' value={name}/>
                
                <label>Email</label>
                <input type = 'email' required onChange={eventChange} name='email' value={email}/>
                
                <label>Password</label>
                <input type = 'password' required onChange={eventChange} name='password' value={password}/>
                
                <label>Confirm Password</label>
                <input type = 'password' required onChange={eventChange} name='confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;