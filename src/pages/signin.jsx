import google from '../assets/Google.svg'
import apple from '../assets/Apple.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignIn(){
    const navigate = useNavigate();
    function handleOnSubmit(event){
        event.preventDefault();
        navigate('/twostepverification');
    }

    return(
        <>
            <div className="Login">
                <div className="Login-box">
                    <form action="/" method='get' onSubmit={handleOnSubmit}>
                        <h3>Name</h3>
                        <input type="text" name="name" placeholder="Enter your Name" required/>
                        <h3>Address</h3>
                        <input type="text" name="address" placeholder="Enter your Address" required spellCheck="false"/>
                        <h3>Phonenumber</h3>
                        <input type="text" name="phonenumber" placeholder="Enter your Address" required/>
                        <h3>Email</h3>
                        <input type="email" name="email" placeholder="Enter your Email" required/>
                        <h3>Password</h3>
                        <input type="password" name="password" placeholder="Enter your Password" required/>

                        <input type="submit" value='Sign up' className='signup'/>
                        <p className='acc'>Already have an account? <Link to="/login"><span className="tosignup">Sign In</span></Link></p>
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

export default SignIn