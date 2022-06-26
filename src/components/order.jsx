import React, { useState } from "react";
import ae from '../images/ae.svg';
import axios from "axios";
import OTP from './OTP';
import './style.css';

import {useSelector, useDispatch} from 'react-redux';
import {addItem,increaseItem, decreaseItem, removeItem} from './store/cartSlice'

function Order(props){
    const [number, setNumber] = useState('');
    const [valid_number, setValid_number] = useState(false);
    const [auth_code, setAuth_code] = useState(Math.floor(Math.random() * (9999 - 0 + 1) + 0));
    const [sms_sent, setSms_sent] = useState(false);

    // get the global store (cart order)
    const Orders = useSelector((state) => state.Orders.cart)
    const dispatch = useDispatch()

    const handleChange = (event)=>{
        if(event.target.value.length === 9){
            // set the border color to green and size of medium
            event.target.style.borderColor = '#009900';
            event.target.style.borderWidth = 'medium';
            setNumber(event.target.value);
            setValid_number(true);
        }else if(event.target.value.length === 0){
            // in case of empty input, no style
            event.target.style.borderColor = '';
        }else{
             // in case of invalid input, set it to red border
            event.target.style.borderColor = '#ff5400';
        }
    }
    
    const handleSubmit =(event) => {
        const sms_global_password = process.env.REACT_APP_SMS_GLOBAL_PASSWORD
        const sms_global_user = process.env.REACT_APP_SMS_GLOBAL_USER
        const baseURL = `https://api.smsglobal.com/http-api.php?action=sendsms&user=${sms_global_user}&password=${sms_global_password}&from=Pizza.ae&to=971${number}&text=Your%20code%20is%20${auth_code}`
    
        axios({
            method: 'get',
            url: baseURL,
        }).then((response) =>{
            (response.data.startsWith('OK') ? setSms_sent(true): console.log(response));
        });

        event.preventDefault();
    }

    if(sms_sent === true){
        return <OTP auth_code = {auth_code} number = {number}></OTP>
    }else{
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
}


export default Order;