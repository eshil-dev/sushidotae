import React from  'react';
import {Link} from "react-router-dom";
import logo from '../images/sushi-logo.png';

function Home(){
    return (
        <div className="container">
            <div className="row text-center my-5">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-4 my-5">
                    <img className='img-thumbnail border-0' src={logo} alt="SUSHI.AE" />
                    {/* <h1>SUSHI.AE</h1> */}
                    <Link className='fs-5 btn my-2 btn-outlined-success rounded-pill px-5 border border-success fw-bold' to='/menu'>Order from Menu</Link> <br />
                    <Link className='fs-5 btn my-2 btn-outlined-success rounded-pill px-5 border border-success fw-bold' to='/make-your-sushi'>I will do it myself</Link>

                </div>
                <div className="col-sm-12 col-md-4"></div>
            </div>
        </div>
    )
}
export default Home;