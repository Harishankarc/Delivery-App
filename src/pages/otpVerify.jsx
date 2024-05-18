
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpVeriy({setIsAuthorized}){

    const sampleCode = '1234';
    const [otp,setOtp] = useState(['','','',''])

    function HandleChange(index,value){
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
    }

    const navigate = useNavigate();
    function HandleOnClick(event){
        event.preventDefault();
        const enteredOtp = otp.join('')
        if(enteredOtp === sampleCode){
            setIsAuthorized(true)
            navigate('/')
        }else{
            alert('Incorrect OTP')
            setOtp(['','','',''])
        }
    }

    return(
        <>
            <div className="Login">
                <div className="Login-box">
                    <form action="/" method='get' onSubmit={HandleOnClick}>
                        <h3 className='otp-text'>OTP</h3>
                        <h3 className='otp-text'>Verification Code</h3>
                        <h4 className='otp-text desc'>We have sent a verificattion code to your <br />mobile number</h4>
                        <div className='otp-code'>
                            <input type="text" name="otp1" required className='opt-code-box' maxLength={1} style={{textIndent: '0px',paddingLeft:'30px' }} value={otp[0]} onChange={(e)=>HandleChange(0,e.target.value)}/>
                            <input type="text" name="otp1" required className='opt-code-box' maxLength={1} style={{textIndent: '0px',paddingLeft:'30px' }} value={otp[1]} onChange={(e)=>HandleChange(1,e.target.value)}/>
                            <input type="text" name="otp1" required className='opt-code-box' maxLength={1} style={{textIndent: '0px',paddingLeft:'30px' }} value={otp[2]} onChange={(e)=>HandleChange(2,e.target.value)}/>
                            <input type="text" name="otp1" required className='opt-code-box' maxLength={1} style={{textIndent: '0px',paddingLeft:'30px' }} value={otp[3]} onChange={(e)=>HandleChange(3,e.target.value)}/> 
                        </div>
                        <br />
                        <input type="submit" value="Verify"/>
                        
                    </form>
                </div>
            </div>
        </>
    );
}
OtpVeriy.propTypes = {
    setIsAuthorized: PropTypes.func.isRequired,
}
export default OtpVeriy;