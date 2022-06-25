import React from "react";
import otp from './otp.svg'
import axios from "axios";

class OTP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            auth_code: props.auth_code,
            code_sent: Math.floor(Math.random() * (9999 - 0 + 1) + 0),
            time: 6
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.setState({time: (this.state.time) - 1}),
          1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

   handleChange(event){
    this.setState({auth_code: event.target.value})
   }
   
    handleSubmit(event){
        if(this.state.auth_code == this.state.code_sent){
            // put the redirect here
            console.log("matched...")
        }else{
            console.log('did not matched...Try again!')
        }
        event.preventDefault();
    }
    // handleSent_again(){
    //     // send a code and match
    //     const sms_global_password = 'uVh9zc5Z'
    //     const sms_global_user = '1bfz48ju'
    //     const message = "this%20is%20a%20testing%20message."
    //     const baseURL = `https://api.smsglobal.com/http-api.php?action=sendsms&user=${sms_global_user}&password=${sms_global_password}&from=Pizza.ae&to=971${this.props.number}&text=Your%20code%20is:%20${this.state.code_sent}`
    
    // axios({
    //     method: 'get',
    //     url: baseURL,
    // }).then((response) =>{
    //     (response.data.startsWith('OK') ? alert("code send."): alert(response.data));
    // });
    // }

    counter(){
        if(this.state.time > 0){
            return <span> {this.state.time}</span>
        }else{
            return <a href="#" onClick={this.handleSent_again}>send again.</a>
        }
    }
    render(){
        return (
            <div className="container py-4">
                <div className="row mt-4">
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <h1>Enter Your OTP</h1>
                        <img src={otp} alt="Sushi.ae" height="200"/>
                        <div className="coontainer">
                            <div className="row">
                                <div className="col-6 offset-3">
                                    <form className="text-center" onSubmit={this.handleSubmit}>
                                        <p className="my-3">Enter the OTP sent to <span> 0{this.props.number}</span></p>
                                        <div className="input-group mt-3">
                                            <input type="number" onChange={this.handleChange} className="form-control rounded-0"/>
                                        </div>  
                                        <span className="">did not get the code? &nbsp;{this.counter()}</span>
                                        <div className="row px-2">
                                            <input type="submit" className="mt-3 btn btn-lg rounded-0 btn-success"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3"></div>
                </div>
            </div>
        ) 
    }
}

export default OTP;