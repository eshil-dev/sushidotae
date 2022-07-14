import React,{useState} from 'react';
// import firebase from './firebase';
import authentication from './firebase';
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import ae from '../images/ae.svg';

function Login(){
    const [phoneNumber, setPhoneNumber] = useState('+971');
    const[OTP, setOTP] = useState('');
    const[showOTP, setShowOTP] = useState(false);
    const[user, setUser] = useState('');
    const[authed, setAuthed] = useState(false);

    const setUpRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recpatcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
           
          },
        }, authentication);
    }
    
    const requestOTP = (e)=>{
        e.preventDefault();
        if(phoneNumber.length >=12){
            setUpRecaptcha();
            const appVerifier = window.recaptchaVerifier;

            signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;

                // show if the otp is sent
                setShowOTP(true);

                }).catch((error) => {
                // Error; SMS not sent
                console.log("err: ", error)
                }
            );  
        }
    }

    const verifyOTP = (e) =>{
        let otp = e.target.value;
        setOTP(otp);
        if(otp.length === 6 ){
            console.log("done OTP: ",otp);
            console.log("let's veriify: " )
            
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;

                // set the user state
                setUser(user);
                setAuthed(true);
                console.log("conformation resualt: ",confirmationResult)
                console.log("user: ",user)
            }).catch((error) => {
                console.log("err: ", error);
            });
            
        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col my-4">
                    <form onSubmit={requestOTP}>
                        <div id='recpatcha-container'></div>
                        <label htmlFor="" className='p-0'>Enter your phone</label>
                        <div className="input-group col-sm-6">
                            <span className="input-group-text" id="basic-addon1">
                                <img src={ae} height="30" alt=""/>
                            </span>
                            <input type="text" 
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="form-control fs-5" 
                            maxLength='13'
                            value={phoneNumber}
                            placeholder="5 --------"/>
                        </div>
                        <button className='btn btn-primary d-block my-3 btn-lg'>request OTP</button> 
                        {showOTP ? 
                            <div>
                                <label htmlFor="" className=''>Enter the OTP sent</label>
                                <input type="text" className='form-control' maxLength={6} value={OTP} onChange={verifyOTP} />
                            </div>
                        :""}

                    </form>
                    {authed ?
                        <div className='alert alert-success my-3 rounded p-3'>
                            <strong className='text-center mx-auto fs-5'>Success!</strong>
                            <p className='fw-bold'>user phone number: {user.phoneNumber}</p>
                            <p className='fw-bold'>user ID: {user.uid}</p>
                        </div> : ""
                    }
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login;