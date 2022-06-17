import React from  'react';
import { Link } from "react-router-dom";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            height: 330+'px'
        }
        return (
            <footer className='bg-dark'>
               <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                            <h4 className="my-1 text-light "><b> Discover Sushi.ae</b></h4>
                            <p className="my-2 ">
                            {/* <Link to="what-is-sushi"> what is sushi.ae?</Link> */}
                                <a href="/info" className="text-decoration-none links-text">What is Sushi.ae?</a>
                            </p>
                            <p className="my-2 "><a href="contact" className="text-decoration-none links-text">Contacts </a></p>
                        
                            <p className="my-2 "><a href="contact" className="text-decoration-none links-text">Address</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                            <h4 className="my-1 text-light title-text"> <b>Legal </b></h4>
                
                                <p className="my-2 "><a href="/terms-and-conditions" className="text-decoration-none links-text">Terms and Conditions </a></p>
                                <p className="my-2 "><a href="/franchies" className="text-decoration-none links-text">Franchise </a></p>
                                <p className="my-2 "><a href="/consumers-rights" className="text-decoration-none links-text">Consumer Rights </a></p>
                                <p className="my-2 "><a href="/cookies" className="text-decoration-none links-text">Cookies </a></p>
                                <p className="my-2 "><a href="/refund" className="text-decoration-none links-text">Refund Policy </a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                            <h4 className="my-1 text-light"> <b>Help </b></h4>
                            <p className="my-2 "><a href="/contact" className="text-decoration-none links-text">Contact Us </a></p>
                            <p className="my-2 "><a href="/faq" className="text-decoration-none links-text">FAQ </a></p>
                            <p className="my-2 "><a href="/career" className="text-decoration-none links-text">Careers </a></p>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                            <h4 className="my-1 text-light"> <b>Get Sushi.ae </b></h4>
                            <div className="row">
                                <div className="col-sm-12 mt-2">
                                    <a href="">
                                        {/* <img className="" src="/static/img/app-store.svg" style="width: 50%;" alt=""/> */}
                                    </a>
                                </div>
                                <div className="col-sm-12">
                                    <a href="">
                                        {/* <img className="" src="/static/img/google-play.svg" style="width: 50%;" alt=""/> */}
                                    </a>
                                </div>
                                <div className="col-sm-12 my-4">
                                    <p className="my-0 pb-1 text-light">Accepted Payments</p>

                                    {/* <li className="mb-1" style="display: inline;">
                                        <img className="mb-1" src="/static/img/mastercard-black.svg" alt=""/>
                                    </li>
                                    <li className="mb-1" style="display: inline;">
                                        <img className="mb-1" src="/static/img/visa-black.svg" alt=""/>
                                    </li>
                                    <li className="mb-1" style="display: inline;">
                                        <img className="mb-1" src="/static/img/amex-black-v2.svg" alt=""/>
                                    </li>
                                    <li className="mb-1" style="display: inline;">
                                        <img className="mb-1" src="/static/img/cash-black.svg" alt=""/>
                                    </li> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;