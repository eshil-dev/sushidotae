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
               <div className="container-fluid">
                    <div className="row px-4 py-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                                <h4 className="my-1 text-light "><b> Discover Sushi.ae</b></h4>
                                <p className="my-2 ">
                                    <Link to="/info" className="text-decoration-none links-text text-light">What is Sushi.ae?</Link>
                                </p>
                                <p className="my-2 "><Link to="/contact" className="text-decoration-none links-text text-light">Contacts </Link></p>
                            
                                <p className="my-2 "><Link to="/contact" className="text-decoration-none links-text text-light">Address</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                                <h4 className="my-1 text-light title-text"> <b>Legal </b></h4>
                    
                                    <p className="my-2 "><Link to="/terms-and-conditions" className="text-decoration-none links-text text-light">Terms and Conditions </Link></p>
                                    <p className="my-2 "><Link to="/franchies" className="text-decoration-none links-text text-light">Franchise </Link></p>
                                    <p className="my-2 "><Link to="/consumers-rights" className="text-decoration-none links-text text-light">Consumer Rights </Link></p>
                                    <p className="my-2 "><Link to="/cookies" className="text-decoration-none links-text text-light">Cookies </Link></p>
                                    <p className="my-2 "><Link to="/refund" className="text-decoration-none links-text text-light">Refund Policy </Link></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card border-0 rounded-0 mt-3 p-3" style={style}>
                                <h4 className="my-1 text-light"> <b>Help </b></h4>
                                <p className="my-2 "><Link to="/contact" className="text-decoration-none links-text text-light">Contact Us </Link></p>
                                <p className="my-2 "><Link to="/faq" className="text-decoration-none links-text text-light">FAQ </Link></p>
                                <p className="my-2 "><Link to="/career" className="text-decoration-none links-text text-light">Careers </Link></p>

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
                <div className="row">
                    <Link to='/' className='text-center text-light fw-bold text-decoration-none'>SUSHI.AE</Link>
                </div>
               </div>
            </footer>
        );
    }
}

export default Footer;