import React, { useState } from "react";
import ae from '../images/ae.svg';
import axios from "axios";
import OTP from './OTP';
import './style.css';

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
                console.log(response.data)
            }
        })
        event.preventDefault();
    }
    return (
        <div className="container p-3 py-4">
            <div className="row mt-3">
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6 text-center">
                    <h1>Confirm your order</h1>
                    <table className="table">
                        <thead className="border-bottom border-1 border-dark">
                            <tr className="text-center">
                                <th>X</th>
                                <th>Item(s)</th>
                                <th>Quantity</th>
                                <th>Unite Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Orders.map((item)=> (
                                <tr key={item.id} className=""> 
                                    <td><i onClick={()=> dispatch(removeItem(item))} className="bi-trash3 h4"></i> </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <span className='btn bg text-white rounded-0 p-0'>
                                            <button onClick={()=>dispatch(decreaseItem(item))} className='increase'>-</button>
                                            <span className='px-3'>{item.qty}</span>
                                            <button className='increase' onClick={()=>dispatch(increaseItem(item))} >+</button>
                                        </span>
                                    </td>
                                    <td>{item.price  } AED</td>
                                    <td>{item.price  * item.qty} AED</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="input-group col-sm-6 my-3">
                            <span className="input-group-text rounded-0 " id="basic-addon1">
                                <img src={ae} height="30" alt=""/>
                            </span>
                            <input type="text" 
                            onChange={handleChange}
                            className="form-control rounded-0" 
                            maxLength='9'
                            placeholder="5 --------"/>
                        </div>
                        <div className="row px-2">
                            <button disabled={!valid_number} className="btn btn-lg rounded-0 btn-success">Validate Me</button>
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