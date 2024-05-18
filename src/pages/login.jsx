import google from '../assets/Google.svg'
import { useState } from 'react';
import apple from '../assets/Apple.svg'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login({setIsAuthorized}){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const fakeEmail = 'charishankar30@gmail.com'
    const fakePassword = 'Hari@2004'
    function HandleChangeEmail(value){
        setEmail(value)
    }

    function HandleChangePassword(value){
        setPassword(value)
    }

    const navigate = useNavigate();

    function handleOnSubmit(event){
        event.preventDefault();
        if(fakeEmail === email && fakePassword === password){
            setIsAuthorized(true)
            navigate('/');
        }else{
            alert('Check UserName or Password')
            setEmail('')
            setPassword('')
        }
    }
    return(
        <>
            <div className="Login">
                <div className="Login-box">
                    <form action="/" method='get' onSubmit={handleOnSubmit}>
                        <h3>Email</h3>
                        <input type="email" name="email" placeholder="Enter your Email" required value={email} onChange={(e)=>HandleChangeEmail(e.target.value)}/>
                        <h3>Password</h3>
                        <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e)=>HandleChangePassword(e.target.value)}/>
                        <div className="rem-for">
                            <div className="check-rem">
                                <input type="checkbox" name="remember" value="remember" />
                                <p>Remember me</p>
                            </div>
                            <p className='tosignup'>Forget password?</p>
                        </div>
                        <input type="submit" value='Sign In'/>
                        <p className='acc'>Don`t have an account? <Link to="/signup"><span className="tosignup">Sign Up</span></Link></p>
                        <p className='acc'>Or With</p>
                        <div className="signIn-opt">
                            <button>
                                <img src={google} alt="google" />
                                <a href=""><p>Google</p></a>
                            </button>
                            <button>
                                <img src={apple} alt="apple" />
                                <a href=""><p>Apple</p></a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
Login.propTypes = {
    setIsAuthorized: PropTypes.func.isRequired,
    isautorized:PropTypes.bool.isRequired
}
export default Login