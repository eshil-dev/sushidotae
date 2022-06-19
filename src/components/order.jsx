import React from "react";
import ae from './ae.svg';

class Order extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=""> 
                                        <td><i class="bi-trash3 h4"></i> </td>
                                        <td>SUSHI</td>
                                        <td>
                                            <div class="">
                                                <span class="mx-2">-</span>
                                                <span>5</span>
                                                <span class="mx-2" >+</span>
                                            </div>
                                        </td>
                                        <td>67.00 AED</td>
                                    </tr>
                                </tbody>
                            </table>
                            <form className="text-center">
                                <div className="input-group col-sm-6 my-3">
                                    <span className="input-group-text rounded-0 " id="basic-addon1">
                                        <img src={ae} height="30" alt=""/>
                                    </span>
                                    <input type="tel" className="form-control rounded-0" placeholder="05--------"/>
                                </div>
                                <div className="row px-2">
                                    <a  href="/otp" className="btn btn-lg rounded-0 btn-success">Validate Me</a>
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