
import { signInWithGooglePopup,createUserDoc } from "../../utils/firebase/firebase";



const SignIn = () => {

    const logInGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDoc(user);
    }
    

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logInGoogleUser}>Sign in with Google Popup</button>
            
        </div>
    )
}
export default SignIn;