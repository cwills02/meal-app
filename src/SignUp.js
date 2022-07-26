import { useState } from 'react';
import { auth } from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const createAccount = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            navigate('/');
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        })
    }

    return (
        <div>
            <button className='back-login' onClick={() => navigate("/")}>Back to Login</button>
            <h1>Sign Up</h1>
            <div className="login-inputs">
                <input placeholder="Sign Up With Email" type="email" onChange={(e) => handleEmailChange(e)} />
                <input placeholder="Sign Up With Password" type="password" onChange={(e) => handlePasswordChange(e)} />
                <button className="sign-in" onClick={() => createAccount(auth, email, password)}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp