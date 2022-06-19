import React from "react";


class OrderSummary extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const color ={
            color:"#FF5400"
        }
        return (
        
            <div className="container p-3 py-4">
                <div className="container">
                    <div className="row mt-4 ">
                        <div className="col-sm-12 col-md-3"></div>
                        <div className="col-sm-12 col-md-6 text-center">
                        <h1>Order Summary</h1>

                            <div className="row rounded-0 border border-secondary p-2 my-2">
                                <div className="col text-start p-0">
                                    <span className="border border-warning  p-1 px-3 ">1</span>  
                                    <span className="fs-5 mx-3"> PIZZA</span> 
                                </div>
                                <div className="col text-end"> <span style={color}>56.00</span> AED </div>
                            </div>

                            <div className="row rounded-0 border border-secondary p-2">
                                <div className="col text-start p-0">
                                    <span className="border border-warning  p-1 px-3">1</span> 
                                    <span className="fs-5 mx-3"> SUSHI</span> 
                                </div>
                                <div className="col text-end"> <span style={color}>56.00</span> AED </div>
                            </div>

                            {/* order  */}
                            <div className="row rounded-0 border border-secondary p-2 mt-3">
                                <div className="col p-0 text-start">
                                    <p className="m-0">ORDER:</p>
                                    <p className="m-0">VAT 5%:</p>
                                    <p className="m-0">DELIVERY:</p> 
                                    <br />
                                    <h3 className="m-0">TOTAL: </h3>
                                </div>
                                <div className="col text-end p-0"> 
                                    <p className="m-0">105.00 AED</p>
                                    <p className="m-0">10.5 AED</p>
                                    <p className="m-0">14.00 AED</p> 
                                    <br />
                                    <h3 className="m-0">130.5 AED </h3>
                                </div>
                            </div>

                            {/* Location  */}
                            <div className="row rounded-0 border border-secondary p-2 mt-3">
                                <div className="col p-0 text-start">
                                    <p className="m-0"><span className="h6">Address</span>: here is the address sample</p>
                                    <p className="m-0"><span className="h6">Cordinate</span>: 34534245 3454353453 </p>
                                    <p className="m-0"><span className="h6">Mobile</span>: 0566652534</p> 
                                </div>
                            </div>
                            <div className="row mt-3">
                                <a href="" className="btn btn-success btn-lg rounded-0 m-1"> CASH PAY</a>
                                <a href="" className="btn btn-success btn-lg rounded-0 m-1">APPLE PAY</a>
                                <a href="" className="btn btn-success btn-lg rounded-0 m-1">CARD PAY</a>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-3"></div>
                    </div>

                </div>
            </div> 
         
        ) 
    }
}

export default OrderSummary;