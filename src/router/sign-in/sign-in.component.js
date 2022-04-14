import {Fragment, useEffect} from "react";
import {SignUpForm} from "../../components/sign-up-form/sign-up-form.component";
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect

} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //             console.log(userDocRef)
    //         }
    //     })();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }


    return (<Fragment>
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Auth
            </button>
            <SignUpForm/>
            {/*<button onClick={signInWithGoogleRedirect}>*/}
            {/*    Sign In with Google Redirect*/}
            {/*</button>*/}
        </div>
    </Fragment>)
}


export default SignIn;