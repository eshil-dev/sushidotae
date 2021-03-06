import {useSelector} from 'react-redux';
import './style.css';
import {Link} from "react-router-dom";
function Header(){
    const Orders = useSelector((state) => state.Orders.cart)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container ">
                <Link className="navbar-brand fw-bold fs-1 text-light" to='/'>SUSHI.AE</Link>
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
                            <Link className="nav-link fs-5 active text-light" to='/'> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light" to='/menu'> Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light" to='/login'> Login</Link>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link text-light btn bg rounded-pill my-0 py-auto px-3' href="https://wa.me/9718007499223">
                            <i className="bi bi-whatsapp"></i> WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
export default Header;