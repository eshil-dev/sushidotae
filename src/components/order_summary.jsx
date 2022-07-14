import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {emptyItem } from './store/cartSlice'
import {} from './store/orderSlice'
import axios from "axios";

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

    const [pay_method, setPay_method] = useState('cash')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleOrder =(e)=>{
        // set the payment method.
        setPay_method(e)

        const orderObj = Orders.map((i) => {return {id:i.id, qty:i.qty}})
        console.log("this is the order oderOBJ to be added to the order",orderObj)
        //create a order format and submit it via axois 
        const ordr = {
            customerName: ordering_process.user_fullName,
            address: ordering_process.user_custom_add + ", " + ordering_process.user_address,
            phone: ordering_process.phone_number,
            location: { 
                type: "Point", 
                coordinates: [
                    ordering_process.user_location.lat,
                    ordering_process.user_location.lng
                ]
            },
            orders: [{menu:'62beba95731803e7057eab00', qty:2},{menu:'62beba95731803e7057eab00', qty:3}],
            payment: {
                type: pay_method,
                paid: 338.3,
                currency: "Dollar",
                pay_ref: 3232424
            },
            status: "Ordered"
        }

        console.log(ordr)
        // submit the order
        const baseURL = 'https://sushidotae.herokuapp.com/api/order';
        axios.post(baseURL, ordr)
            .then(response => {
                // check if the status is 200 and statusText is OK
                if(response.status === 200 && response.statusText === 'OK'){
                    // navigate to thank you page (order finished)
                    // clear the baskat
                    dispatch(emptyItem())
                    navigate('/thank-you')
                }else{
                    alert("Failed!\n"+response)
                }
            })
            .catch(error => {console.log(error)});        
    }

    const handleNETWORK =()=>{
        // console.log("getting the access token...", process.env.REACT_APP_NETWORK_API_KEY)
        const access_token_url = `https://api-gateway.sandbox.ngenius-payments.com/identity/auth/access-token`
        const headers = {
            'Content-Type': 'application/vnd.ni-identity.v1+json',
            "Access-Control-Allow-Origin": true,
            // 'withCredentials': false,
            'Authorization': `Basic ${process.env.REACT_APP_NETWORK_API_KEY}`
        }

        console.log(headers)
        axios.post(access_token_url, { headers: headers })
            .then(response => {
                // check if the status is 200 and statusText is OK
               console.log("res: ", response)
            })
            .catch(error => {console.log(error)});        
        }

    return (
        <div className="container p-3 py-4">
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col-sm-12 col-md-3 "></div>
                    <div className="col-sm-12 col-md-6  text-center">
                    <h1>Order Summary</h1>
                     {Orders.map((item) => (
                        <div key={item.id} className="row border  border-success rounded-2 p-2 my-2">
                            <div className="col text-start p-0">
                                <span className="p-1 px-3 border border-success rounded-1">{item.qty}</span>  
                                <span className="fs-5 mx-3"> {item.name}</span> 
                            </div>
                            <div className="col text-end"> <span className="text-success ">{item.price}</span> AED </div>
                        </div>
                     ))}  
                    <div className="row border border-success rounded-2 p-2 mt-3">
                        <div className="col p-0 text-start">
                            <p className="m-0">ORDER:</p>
                            <p className="m-0">VAT 5%:</p>
                            <p className="m-0">DELIVERY:</p> 
                            <br />
                            <h3 className="m-0 text-success">TOTAL: </h3>
                        </div>
                        <div className="col text-end p-0"> 
                            <p className="m-0"><span className="text-success">{orderTotal}</span> AED</p>
                            <p className="m-0"><span className="text-success">{vat}</span> AED</p>
                            <p className="m-0"><span className="text-success">{delivery}</span> AED</p> 
                            <br />
                            <h3 className="m-0 text-success"> {Total} AED </h3>
                        </div>
                    </div>
                    <div className="row border border-success rounded-2 p-2 mt-3">
                        <div className="col p-0 text-start">
                            <p className="m-0"><span className="h6">Address </span>: {ordering_process.user_address}</p>
                            <p className="m-0"><span className="h6">Apt, Flat </span>: {ordering_process.user_custom_add} </p>
                            <p className="m-0"><span className="h6">Mobile&nbsp;&nbsp; </span> : {0+''+ordering_process.phone_number}</p> 
                        </div>
                    </div>
                    <div className="row mt-3">
                        <button href="" onClick={()=>handleOrder('cash')} className="btn btn-success btn-lg m-1">Cash Payment on Delivery</button>
                        <button href="" onClick={handleNETWORK} className="btn btn-success btn-lg m-1">Pay with Apple Pay</button>
                        <button href="" onClick={()=>handleOrder('card')} className="btn btn-success btn-lg m-1">Card Payment on Delivery</button>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
        </div> 
    ) 
}

export default OrderSummary;


// https://portal.ngenius-payments.com/