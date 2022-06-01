
import { signInWithGooglePopup,createUserDoc } from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up";


const SignIn = () => {

    const logInGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDoc(user);
    }
    

    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logInGoogleUser}>Sign in with Google Popup</button>
            <SignUp/>
        </div>
    )
}
export default SignIn;