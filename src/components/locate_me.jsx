import React from "react";


class Location extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <div className="container p-3 py-4">
                <div className="row mt-2">
                    {/* the location here */}
                    <div className="container text-center">
                        <h1>Location</h1>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <div className="row my-3 px-2">
                            <button className="btn rounded-0 text-light" style={{backgroundColor: "#FF5400"}}>Locate Me</button>
                        </div>

                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control rounded-0" placeholder="e.g: Ali Mohammad Ahmadi"/>
                                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Address</label>
                                <input type="text" class="form-control rounded-0" placeholder="Area, Street, Building, Villa No, Floor, Unit"/>
                            </div>
                           <div className="row">
                                <div className="col">
                                    <div className="row p-3">
                                        <a href="/otp" type="submit" class="btn btn-lg rounded-0  btn-secondary">Back</a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row p-3">
                                        <a href="/order-summary" type="submit" class="btn btn-lg rounded-0  btn-success">Next</a>
                                    </div>
                                </div>
                          
                           </div>
                        </form>
                       
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
            </>
        )
    }
}

export default Location;