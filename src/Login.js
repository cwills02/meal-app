import './Login.css'

const Login = (props) => {
  
    return(
        <>
          <h1 style={{color: '#000080'}}>Login</h1>
          <div className='login-inputs'>
            <input placeholder='email' />
            <input placeholder='password' />
          </div>
          <button 
            className='sign-in'
            onClick={() => props.setLoggedIn(true)}>Sign In</button>
        </>
    )
}

export default Login