import {useSelector} from 'react-redux';
import './style.css';

function Header(){
    const Orders = useSelector((state) => state.Orders.cart)
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4 text-light" href="/">Sushi.ae</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto my-3">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn mx-2 text-white bg card_border_color btn-danger position-relative">Inbox
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    {Orders.length}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }

export default Header;