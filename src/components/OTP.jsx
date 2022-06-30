import React from "react";
import otp from '../images/otp.svg'
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';
import {page,sms_sent, phone_number, auth_code,valid_number} from './store/orderSlice'
import { useState } from "react";

export default function OTP(){
    // const navigate = useNavigate();
    // get the global store (cart order)
    const ordering = useSelector((state) => state.Ordering.ordering_process)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // set a local state for this function to store inputed auth code
    const [input_code, setInput_code] = useState("");
    
    const handleSubmit=(event)=>{
        if(parseInt(input_code) === parseInt(ordering.auth_code)){
            // navigate to locate-me UI
            navigate('/locate-me')
        }else{
           alert(<p className="text-danger">Code did not match</p>)
        }
        event.preventDefault();
    }
    const handleChange=(event)=>{
        if(event.target.value.length === 4){
            // set the border color to green and size of medium
            event.target.style.borderColor = '#009900';
            event.target.style.borderWidth = 'medium';
            // set the inputed auth code in local state
            setInput_code(event.target.value)
        }else if(event.target.value.length === 0){
            // in case of empty input, no style
            event.target.style.borderColor = '';
        }else{
             // in case of invalid input, set it to red border
            event.target.style.borderColor = '#ff5400';
        }
    }


    return (
        <div className="container py-4">
            <div className="row mt-4">
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6 text-center">
                    <h1>Enter Your OTP</h1>
                    <img src={otp} alt="Sushi.ae" height="200"/>
                    <div className="coontainer">
                        <div className="row">
                            <div className="col-6 offset-3">
                                <form className="text-center" onSubmit={handleSubmit}>
                                    <p className="my-3">Enter the OTP sent to <span> 0{ordering.phone_number}</span></p>
                                    <div className="input-group mt-3">
                                        <input type="text" maxLength='4' onChange={handleChange} className="form-control rounded-0"/>
                                    </div>  
                                    {/* <span className="">did not get the code? &nbsp;</span> */}
                                    <div className="row px-2">
                                        <input type="submit" className="mt-3 btn btn-lg bg rounded-0 btn-success"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3"></div>
            </div>
        </div>
    ) 
}