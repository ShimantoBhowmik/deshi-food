
import { initializeApp } from 'firebase/app';
import{ getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmVe9WU019A6hPOy4HoWw-9B2QFzOOjRQ",
  authDomain: "deshi-fooddb.firebaseapp.com",
  projectId: "deshi-fooddb",
  storageBucket: "deshi-fooddb.appspot.com",
  messagingSenderId: "94392679690",
  appId: "1:94392679690:web:8e65239da2ecdf5fd68ef3"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const dbase = getFirestore();

export const createUserDoc = async(userAuth, addInfo ={} ) => {
  if(!userAuth) return;

  const userDocRef = doc(dbase, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(userSnapshot.exists() === false){
    const { displayName, email} = userAuth;
    const created = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        created,
        ...addInfo,
      });
    }catch(err){
      console.log( "Error creating user account", console.log(err));
    }
  }

  return userDocRef;
}

export const createUserEmailPassword = async(email, password) =>{
  if(email ===false || password ===false) return;

  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserEmailPassword = async(email, password) =>{
  if(email ===false || password ===false) return;

  return signInWithEmailAndPassword(auth, email, password);
}