import {useEffect, useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

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
        if (password !== confirmPassword) return;
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        const userDocRef = await createUserDocumentFromAuth({...user, displayName})
        console.log(userDocRef);
    }


    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text"
                       name='displayName'
                       value={displayName}
                       required
                       onChange={e => handleChange(e)}/>

                <label>Email</label>
                <input required type="email"
                       name='email'
                       value={email}
                       onChange={e => handleChange(e)}/>

                <label>Password</label>
                <input required type="password"
                       name='password'
                       value={password}
                       onChange={e => handleChange(e)}/>

                <label>Confirm Password</label>
                <input required type="password"
                       name='confirmPassword'
                       value={confirmPassword}
                       onChange={e => handleChange(e)}/>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}