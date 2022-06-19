import React from "react";
import otp from './otp.svg'
class OTP extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <div className="container py-4">
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <h1>Enter Your OTP</h1>
                        <img src={otp} alt="" height="200"/>
                        <div className="coontainer">
                            <div className="row">
                                <div className="col-6 offset-3">
                                    <form className="text-center">
                                        <p className="my-3">Enter the OTP sent to <span> 0566652524</span></p>

                                        <div className="input-group mt-3">
                                            <input type="tel" className="form-control rounded-0"/>
                                        </div>
                                        
                                        <span className="">did not get the code? resend in 40 .</span>

                                        <div className="row px-2">
                                            <a  href="/locate-me" className="mt-3 btn btn-lg rounded-0 btn-success">Verify Me</a>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
            </>
        ) 
    }
}

export default OTP;