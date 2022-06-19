import React from  'react';

import MenuItem from './menuItem';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category:['PIZZA', "SUSHI",'DRINKS']
        }
    }

    render(){
        const bgcolor    = {backgroundColor: '#FF5400' }
        const flex_style = {"flexDirection": "row"}
        const text_on_line = {
                width: 100+"%",
                textAlign: "center",
                borderBottom: "1px solid #FF5400",
                lineHeight: "0.1em",
                margin: "20px 0 30px",
             } 
        const text_on_line_span = { 
                 background:"#fff",
                 padding:"0 10px",
                 color: "#FF5400",
             }
    
        return (
           <div>
                <nav className="navbar navbar-expand-lg sticky-top" style={bgcolor}>
                    <div className="container-fluid">
                        <ul className="navbar-nav mx-auto my-lg-0" style={flex_style} >
                            {this.state.category.map(cate => (
                                <li key={cate} className=" mx-2 px-2 py-0 menu-links ">
                                    <a className="nav-link text-white title-fonts"  href={"#"+cate}>
                                        <h2 className=" title-fonts"><span>{cate} </span></h2>
                                    </a>
                                </li> 
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        {this.state.category.map(cate => (
                            <>
                                <h2 key={cate} className=" title-fonts" style={text_on_line} id={cate}>
                                    <span style={text_on_line_span}>{cate}</span>
                                </h2>
                                <MenuItem></MenuItem>
                            </> 
                        ))}                           
                    </div>
                </div>
           </div>
        );
    }
}

export default Menu;