import React from  'react';
import './style.css';

import MenuItem from './menuItem';
import { data } from './data/menu';
import MenuCategory from './MenuCategory';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";

function Menu(){
    const Orders = useSelector((state) => state.Orders.cart)
    
    const {category} = data;
    return (
        <div className='text-end'>
            <nav className="navbar navbar-expand-lg sticky-top bg">
                <div className="container-fluid">
                    <ul className="navbar-nav mx-auto my-lg-0 flex_style" >
                        {category.map(cate => (
                            <li key={cate.id} className="mx-2 px-2 py-0 menu-links">
                                <a className="nav-link text-white title-fonts"  href={"#"+cate.name}>
                                  <h2 className=" title-fonts"><span>{cate.name} </span></h2>
                                </a>
                            </li> 
                        ))}
                        <li className='mx-2 px-2 py-0 menu-links '>
                            <Link className="nav-link text-white title-fonts" to='/order'>
                                <span className='tot-number text-center text-white bg-success'> {Orders.length }</span>
                                <h2><i className="bi bi-basket" > </i> </h2> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    {category.map(cate => (
                        <MenuCategory key ={cate.id} category={cate}></MenuCategory>
                    ))}                           
                </div>
            </div>
           
        </div>
    );
}

export default Menu;