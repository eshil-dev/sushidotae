import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increaseItem, decreaseItem, removeItem} from './store/cartSlice'
import {page,sms_sent, phone_number, auth_code,valid_number} from './store/orderSlice'

function OrderSummary(){
    let orderTotal = 0;
    const Orders = useSelector((state) => state.Orders.cart)
    
    Orders.map((i)=> {
        orderTotal += (i.price * i.qty);  
    })

    let vat = (orderTotal *5 /100)
    let delivery = 0;
    let Total = vat + delivery + orderTotal;
    const ordering_process = useSelector((state) => state.Ordering.ordering_process)
    const color = {color:"#008e07"}
    const borderColor = { border: '1px solid #008e07' }

    return (
        <div className="container p-3 py-4">
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6 text-center">
                    <h1>Order Summary</h1>
                     {Orders.map((item) => (
                        <div key={item.id} className="row rounded-0 border border-secondary p-2 my-2">
                            <div className="col text-start p-0">
                                <span className="p-1 px-3" style={borderColor}>{item.qty}</span>  
                                <span className="fs-5 mx-3"> {item.name}</span> 
                            </div>
                            <div className="col text-end"> <span style={color}>{item.price}</span> AED </div>
                        </div>
                     ))}  
                    <div className="row rounded-0 border border-secondary p-2 mt-3">
                        <div className="col p-0 text-start">
                            <p className="m-0">ORDER:</p>
                            <p className="m-0">VAT 5%:</p>
                            <p className="m-0">DELIVERY:</p> 
                            <br />
                            <h3 className="m-0" style={color}>TOTAL: </h3>
                        </div>
                        <div className="col text-end p-0"> 
                            <p className="m-0"><span style={color}>{orderTotal}</span> AED</p>
                            <p className="m-0"><span style={color}>{vat}</span> AED</p>
                            <p className="m-0"><span style={color}>{delivery}</span> AED</p> 
                            <br />
                            <h3 className="m-0" style={color}> {Total} AED </h3>
                        </div>
                    </div>
                    <div className="row rounded-0 border border-secondary p-2 mt-3">
                        <div className="col p-0 text-start">
                            <p className="m-0"><span className="h6">Address </span>: {ordering_process.user_address}</p>
                            <p className="m-0"><span className="h6">Apt, Flat </span>: {ordering_process.user_custom_add} </p>
                            <p className="m-0"><span className="h6">Mobile&nbsp;&nbsp; </span> : {0+''+ordering_process.phone_number}</p> 
                        </div>
                    </div>
                    <div className="row mt-3">
                        <a href="" className="btn btn-success bg border-0 btn-lg rounded-0 m-1">Cash Payment on Delivery</a>
                        <a href="" className="btn btn-success bg border-0 btn-lg rounded-0 m-1">Pay with Apple Pay</a>
                        <a href="" className="btn btn-success bg border-0 btn-lg rounded-0 m-1">Card Payment on Delivery</a>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
        </div> 
    ) 
}

export default OrderSummary;