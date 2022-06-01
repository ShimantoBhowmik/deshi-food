import { initializeApp } from 'firebase/app';
import{ getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmVe9WU019A6hPOy4HoWw-9B2QFzOOjRQ",
  authDomain: "deshi-fooddb.firebaseapp.com",
  projectId: "deshi-fooddb",
  storageBucket: "deshi-fooddb.appspot.com",
  messagingSenderId: "94392679690",
  appId: "1:94392679690:web:8e65239da2ecdf5fd68ef3"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);