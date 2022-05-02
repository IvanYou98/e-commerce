import {useState} from "react";
import {FormInput} from "../form-input/form-input.component";
import {Button, BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles'
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import {SignInContainer, ButtonsContainer} from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: ''
}

export const SignInForm = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = e => {
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {user} = await signInUserWithEmailAndPassword(email, password);
        } catch (err) {
            alert(err.message);
        }
        setFormFields(defaultFormFields);
    }

    return (
        <SignInContainer>
            <h2>I have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required type="email"
                    name='email'
                    value={email}
                    onChange={e => handleChange(e)}/>

                <FormInput
                    label='Password'
                    required type="password"
                    name='password'
                    value={password}
                    onChange={e => handleChange(e)}/>
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button'
                            buttonType={BUTTON_TYPE_CLASSES.google}
                            onClick={logGoogleUser}>
                        GOOGLE SIGN IN
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}