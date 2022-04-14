import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {FormInput} from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import {Button} from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = e => {
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth({...user, displayName})
            console.log(userDocRef);
        } catch (err) {
            alert(err.message);
        }
        setFormFields(defaultFormFields);
    }


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    name='displayName'
                    value={displayName}
                    required
                    onChange={e => handleChange(e)}/>

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

                <FormInput
                       label='Confirm Password'
                       required type="password"
                       name='confirmPassword'
                       value={confirmPassword}
                       onChange={e => handleChange(e)}/>

                <Button type = 'submit'>Sign Up</Button>
            </form>
        </div>
    )
}