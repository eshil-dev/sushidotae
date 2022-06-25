import React from "react";
import './map.css';
import MapTest from "./testMap";

function mapApp(){
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
                    <div className="row my-3 px-2">
                        <button className="btn rounded-0 text-light" style={{backgroundColor: "#FF5400"}}>Locate Me</button>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="form-label m-0">Full Name</label>
                            <input type="text" className="form-control rounded-0" placeholder="e.g: Ali Mohammad Ahmadi"/>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label m-0">Address</label>
                            <input type="text" className="form-control rounded-0" placeholder="Area, Street, Building, Villa No, Floor, Unit"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row p-3">
                                    <a href="/otp" type="submit" className="btn btn-lg rounded-0  btn-secondary">Back</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row p-3">
                                    <a href="/order-summary" type="submit" className="btn btn-lg rounded-0  btn-success">Next</a>
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

export default mapApp;