import React from "react";
import './style.css';
import MapTest from "./testMap";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {user_fullName, user_custom_add} from './store/orderSlice';
import {Link} from "react-router-dom";
import { useState } from "react";

function MapApp(){
    const ordering = useSelector((state) => state.Ordering.ordering_process)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nameClass, setNameClass] = useState(" form-control");
    const [addClass, setAddClass] = useState(" form-control ");

    const handleFullNameChange = (event)=>{
        // set the full name into ordering store
        dispatch(user_fullName(event.target.value));
        if(ordering.user_fullName.length >= 0){ 
            setNameClass(' form-control rounded-0 ');
        }else{ 
            setNameClass(' form-control rounded-0 border border-danger border-2 ');
        }
    }
    const handleCustomAddeChange =(event)=>{
        // set the full name into ordering store
        dispatch(user_custom_add(event.target.value));
        if(ordering.user_custom_add.length >= 0){ 
            setAddClass(' form-control rounded-0 ');
        }else{ 
            setAddClass(' form-control rounded-0 border border-danger border-2 ');
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(ordering.user_fullName.length <= 0){
            // not the next btn should be active and user can click to preceed
            // navigate to summary order component
            setNameClass(nameClass + " border border-danger border-2")
        
        }else if(ordering.user_custom_add <= 0){
            setAddClass(addClass + " border border-danger border-2")
          
        }else{
            navigate('/order-summary');
        }
        event.preventDefault();
    }

    return (
        <div className="container p-3 py-4">
            <div className="row mt-2">
                <div className="">
                    <h1>Location:</h1> 
                    <div className="">
                        {/* load map component */}
                    <MapTest></MapTest>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label m-0">Full Name</label>
                            <input type="text" 
                                onChange={handleFullNameChange} 
                                value={ordering.user_fullName} 
                                className={nameClass}
                                placeholder="e.g: Ali Mohammad Ahmadi"/>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label m-0">Address</label>
                            <input type="text" 
                                onChange={handleCustomAddeChange} 
                                value={ordering.user_custom_add} 
                                className={addClass}
                                placeholder="Area, Street, Building, Villa No, Floor, Unit"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row p-3">
                                    <Link to="/otp" className="btn btn-lg btn-secondary">Back</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row p-3">
                                    <button type="submit" className="btn btn-lg btn-primary">Next</button>
                                </div>
                            </div>
                        
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 col-md-3"></div>
            </div>
        </div>
    )
}

export default MapApp;