import React,{useState} from 'react';
// import firebase from './firebase';
import authentication from './firebase';
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';


function Login(){
    const [phoneNumber, setPhoneNumber] = useState('+971');
    const[OTP, setOTP] = useState('');

    const setUpRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recpatcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
           
          },
        }, authentication);
    }
    // const onSignInSubmit = (event) =>{
    //     event.preventDefault();
    //     this.setUpRecaptcha();
    //     // const phoneNumber = getPhoneNumberFromUserInput();
    //     const phoneNumber = '+971566652534';
    //     const appVerifier = window.recaptchaVerifier;
    //     firebase.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    //     .then(function (confirmationResult){
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).
    //         window.confirmationResult = confirmationResult;

    //     })
    //     .catch((error) => {
    //         // Error; SMS not sent
    //         // ...

    //     });
    // }

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
                console.log("confirmationRES: ", confirmationResult)
                // ...
                }).catch((error) => {
                // Error; SMS not sent
                // ...
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
                        <input type="text" className='form-control my-3' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                        <button className='btn btn-primary my-3'>request OTP</button> 
                        <input type="text" className='form-control' maxLength={6} value={OTP} onChange={verifyOTP} />
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login;