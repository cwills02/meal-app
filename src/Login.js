import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        console.log(password);
    }

    return(
        <>
          <h1 style={{color: '#000080'}}>Login</h1>
          <div className='login-inputs'>
            <input placeholder='email' type='email' onChange={(e) => handleEmailChange(e)} />
            <input placeholder='password' type='password' onChange={(e) => handlePasswordChange(e)} />
          </div>
          <button 
            className='sign-in'
            onClick={() => props.setLoggedIn(true)}>Sign In</button>
        </>
    )
}

export default Login