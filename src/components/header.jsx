import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Track</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default Header;