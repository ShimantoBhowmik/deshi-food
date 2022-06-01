import { useState } from "react";
import { createUserEmailPassword,createUserDoc } from "../../utils/firebase/firebase";

const defaultFields = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

const SignUp = () =>{

    const [formFields, setFormFields] = useState(defaultFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetForm = () =>{
        setFormFields(defaultFields);
    }
    const submitHandler = async (event) =>{
        event.preventDefault();
        if( password != confirmPassword){
            alert("passwords do not match each other!");
            return;
        }

        try{
            const {user} = await createUserEmailPassword(email, password);
            await createUserDoc(user, { displayName });
            resetForm();
            
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Email already in use');
            }else{
                console.log( "Error creating user account", console.log(err));
            }
            
        }

    }


    const eventChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type = 'text' required onChange={eventChange} name='displayName' value={displayName}/>
                
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