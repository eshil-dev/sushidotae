import React from "react";
import ae from './ae.svg';
import axios from "axios";
import OTP from './OTP';

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: '', 
            auth_code:Math.floor(Math.random() * (9999 - 0 + 1) + 0),
            sms_sent: false,
            valid_number : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.value.length == 9){
            this.setState({valid_number: true})
            this.setState({number: event.target.value});
            console.log(this.state.number)
        }else{

        }
        
    }
    
    handleSubmit(event) {
        const sms_global_password = process.env.REACT_APP_SMS_GLOBAL_PASSWORD
        const sms_global_user = process.env.REACT_APP_SMS_GLOBAL_USER
        console.log("pass ", sms_global_password)
        console.log("user: ", sms_global_user)
        // const number = this.sta
        console.log("number: ", this.state.number)
        
        const baseURL = `https://api.smsglobal.com/http-api.php?action=sendsms&user=${sms_global_user}&password=${sms_global_password}&from=Pizza.ae&to=971${this.state.number}&text=Your%20code%20is%20${this.state.auth_code}`
    
    axios({
        method: 'get',
        url: baseURL,
    }).then((response) =>{
        (response.data.startsWith('OK') ? this.setState({sms_sent:true}): console.log(response));
    });

    event.preventDefault();
    }

      
    render(){
       console.log(process.env.REACT_APP_SMS_GLOBAL_USER)
        if(this.state.sms_sent === true){
            return <OTP auth_code = {this.state.auth_code} number = {this.state.number}></OTP>
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
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=""> 
                                        <td><i className="bi-trash3 h4"></i> </td>
                                        <td>SUSHI</td>
                                        <td>
                                            <div className="">
                                                <span className="mx-2">-</span>
                                                <span>5</span>
                                                <span className="mx-2" >+</span>
                                            </div>
                                        </td>
                                        <td>67.00 AED</td>
                                    </tr>
                                </tbody>
                            </table>
                            <form className="text-center" onSubmit={this.handleSubmit}>
                                <div className="input-group col-sm-6 my-3">
                                    <span className="input-group-text rounded-0 " id="basic-addon1">
                                        <img src={ae} height="30" alt=""/>
                                    </span>
                                    <input type="text" 
                                    onChange={this.handleChange}
                                    className="form-control rounded-0" 
                                    maxLength='9'
                                    placeholder="5 --------"/>
                                </div>
                                <div className="row px-2">
                                    <button disabled={!this.state.valid_number} className="btn btn-lg rounded-0 btn-success">Validate Me</button>
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
}

export default Order;