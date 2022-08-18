import InputTextField from './InputTextField';
import './Login.css'

const Login = (props) => {
  
    return(
        <>
          <h1>Login</h1>
          <InputTextField />
          <button 
            className='sign-in'
            onClick={() => props.setLoggedIn(true)}>Sign In</button>
        </>
    )
}

export default Login