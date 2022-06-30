import React, { useState } from "react";
import ae from '../images/ae.svg';
import axios from "axios";
import OTP from './OTP';
import './style.css';


// rgb(0, 142, 6) the green code 
// #008e07

import { useNavigate } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';
import {increaseItem, decreaseItem, removeItem} from './store/cartSlice'
import {page,sms_sent, phone_number, auth_code,valid_number} from './store/orderSlice'

function Order(props){
    const navigate = useNavigate();
    
    // get the global store (cart order)
    const Orders = useSelector((state) => state.Orders.cart)
    const ordering_process = useSelector((state) => state.Ordering.ordering_process)
    const dispatch = useDispatch()

    const handleChange = (event)=>{
        if(event.target.value.length === 9){
            // set the border color to green and size of medium
            event.target.style.borderColor = '#009900';
            event.target.style.borderWidth = 'medium';
            // set phone number to store ordering store
            dispatch(phone_number(event.target.value))
            dispatch(valid_number(true))

        }else if(event.target.value.length === 0){
            // in case of empty input, no style
            event.target.style.borderColor = '';
        }else{
             // in case of invalid input, set it to red border
            event.target.style.borderColor = '#ff5400';
        }
    }
    
    const handleSubmit =(event) => {
        const auth = (Math.floor(Math.random() * (9999 - 0 + 1) + 0))
        const sms_global_password = process.env.REACT_APP_SMS_GLOBAL_PASSWORD
        const sms_global_user = process.env.REACT_APP_SMS_GLOBAL_USER
        const baseURL = `https://api.smsglobal.com/http-api.php?action=sendsms&user=${sms_global_user}&password=${sms_global_password}&from=Pizza.ae&to=971${ordering_process.phone_number}&text=Your%20code%20is%20${auth}`

        axios({
            method: 'get',
            url: baseURL,
        }).then((response) =>{
            if(response.data.startsWith('OK')){
                dispatch(sms_sent(auth))
                console.log('sms sent')
                // set the auth code
                dispatch(auth_code(auth))
                // dispatch(phone_number(number))
                navigate("/otp");
            }else{
                console.log('somethign went wrong.')
                alert(`something Went Wrong!\n Please check your Phone number and Ensure it is correct.\n TIP! start your number without 0.`
                )
            }
        })
        event.preventDefault();
    }
    return (
        <div className="container p-3 py-4">
            <div className="row mt-3">
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6 text-center">
                    <h1 className="text_color">Confirm your order</h1>
                    <div className="overflow-auto container" >
                        <table className="table">
                            <thead className="">
                                <tr className="text-center">
                                    <th className="text-nowrap text-danger">X</th>
                                    <th className="text-nowrap text_color">Item(s)</th>
                                    <th className="text-nowrap text_color">Quantity</th>
                                    <th className="text-nowrap text_color">Unite Price</th>
                                    <th className="text-nowrap text_color">Total</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {Orders.map((item)=> (
                                    <tr key={item.id} className=""> 
                                        <td className="text-nowrap"><i onClick={()=> dispatch(removeItem(item))} className="bi-trash3 h4 text-danger"></i> </td>
                                        <td className="text-nowrap text_color">{item.name}</td>
                                        <td className="text-nowrap">
                                            <span className='btn bg text-nowrap text-white rounded-0 p-0'>
                                                <button onClick={()=>dispatch(decreaseItem(item))} className='increase'>-</button>
                                                <span className='px-3'>{item.qty}</span>
                                                <button className='increase' onClick={()=>dispatch(increaseItem(item))} >+</button>
                                            </span>
                                        </td>
                                        <td className="text-nowrap text_color">{item.price} AED</td>
                                        <td className="text-nowrap text_color">{item.price  * item.qty} AED</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="input-group col-sm-6 my-3">
                            <span className="input-group-text rounded-0 " id="basic-addon1">
                                <img src={ae} height="30" alt=""/>
                            </span>
                            <input type="text" 
                            onChange={handleChange}
                            className="form-control rounded-0 fs-5" 
                            maxLength='9'
                            placeholder="5 --------"/>
                        </div>
                        <div className="row px-2">
                            <button disabled={!valid_number} className="btn btn-lg rounded-0 btn-success bg">Validate Me</button>
                            {/* <Link className="btn btn-lg rounded-0 btn-success" to='/otp'>validate me</Link> */}
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 col-md-3"></div>
            </div>
        </div>
    )
}


export default Order;