import {useSelector} from 'react-redux';
import './style.css';
import {Link} from "react-router-dom";
function Header(){
    const Orders = useSelector((state) => state.Orders.cart)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container ">
                <a className="navbar-brand fw-bold fs-1 text-light" href="/">SUSHI.AE</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color:'#fff!important'}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto my-3">
                        <li className="nav-item">
                            <a className="nav-link fs-5 active text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 text-light" href="/menu">Menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }

export default Header;