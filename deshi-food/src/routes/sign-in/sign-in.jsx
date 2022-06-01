import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {

    const logInGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logInGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}
export default SignIn;