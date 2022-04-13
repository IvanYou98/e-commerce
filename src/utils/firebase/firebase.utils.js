import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoecY7A9qL3cBB2e-CYBYIUfit6UP5ohE",
    authDomain: "crown-clothing-db-ae5fb.firebaseapp.com",
    projectId: "crown-clothing-db-ae5fb",
    storageBucket: "crown-clothing-db-ae5fb.appspot.com",
    messagingSenderId: "656470503401",
    appId: "1:656470503401:web:a6a3a56de1db5a0709a578"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
