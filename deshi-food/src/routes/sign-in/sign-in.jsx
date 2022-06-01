
import { signInWithGooglePopup,createUserDoc } from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up";
import SignInForm from "../../components/sign-in/sign-in";

const SignIn = () => {

    return(
        <div>
            <h1>Sign in page</h1>
            {/* <button onClick={logInGoogleUser}>Sign in with Google Popup</button> */}
            <SignInForm/>
            <SignUp/>
            
        </div>
    )
}
export default SignIn;