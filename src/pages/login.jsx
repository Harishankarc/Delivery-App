import google from '../assets/Google.svg'
import apple from '../assets/Apple.svg'
import PropTypes from 'prop-types';
function Login({setIsAuthorized}){
    function HandleOnClick(){
        setIsAuthorized(true)
    }
    return(
        <>
            <div className="Login">
                <div className="Login-box">
                    <form action="/" method='get'>
                        <h3>Email</h3>
                        <input type="email" name="email" placeholder="Enter your Email" required/>
                        <h3>Password</h3>
                        <input type="password" name="password" placeholder="Enter your password" required/>
                        <div className="rem-for">
                            <div className="check-rem">
                                <input type="checkbox" name="remember" value="remember" />
                                <p>Remember me</p>
                            </div>
                            <p className='tosignup'>Forget password?</p>
                        </div>
                        <input type="submit" value='Sign In' onClick={HandleOnClick}/>
                        <p className='acc'>Don`t have an account? <span className="tosignup">Sign Up</span></p>
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
}
export default Login