import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

import './Login.css'

const Login = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const signIn = (auth, email, password) => {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        props.setUser(user);
        props.setLoggedIn(true);
        console.log(props.user);
        navigate('/meals');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
    }

    return(
        <Fragment>
          <h1 style={{color: '#000080'}}>Login</h1>
          <div className='login-inputs'>
            <input placeholder='email' type='email' onChange={(e) => handleEmailChange(e)} />
            <input placeholder='password' type='password' onChange={(e) => handlePasswordChange(e)} />
            <button 
            className='sign-in'
            onClick={() => signIn(auth, email, password)}>Sign In</button>
            <span>Or</span>
            <button className='sign-up' onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </Fragment>
    )
}

export default Login