import {auth} from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = (props) => {
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="login-inputs">
                <input placeholder="Sign Up With Email" />
                <input placeholder="Sign Up With Password" />
                <button className="sign-in">Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp