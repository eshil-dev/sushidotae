import React, { Fragment, useState, useEffect } from  'react';
import './style.css';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import Item from './Item';
import axios from 'axios';


function Menu(){
    const Orders = useSelector((state) => state.Orders.cart)

    const [menuCategory, setMenuCategory] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    // 
    useEffect(()=>{
        // get all the menu items and categories and add them to state. 
        const baseURL = 'https://sushidotae.herokuapp.com/'
        axios({
            method: 'get',
            url: baseURL + 'api/category/list-categories',
        }).then((response) =>{
           setMenuCategory(response.data);
        }).catch(error => {console.log(error)});

        // menu ITEMS
        axios({
            method: 'get',
            url: baseURL + 'api/menu/list-menus',
        }).then((response) =>{
           setMenuItems(response.data);
        }).catch(error => {console.log(error)});
    },[])

    return (
     <div className='text-end'>
          <nav className="navbar navbar-expand-lg sticky-top bg">
             <div className="container-fluid">
                 <ul className="navbar-nav mx-auto my-lg-0 flex_style" >
                     {menuCategory.map(cate => (
                         <li key={cate._id} className="mx-2 px-2 py-0 menu-links">
                             <a className="nav-link text-white title-fonts"  href={"#"+cate.name}>
                               <h2 className=" title-fonts"><span>{cate.name} </span></h2>
                             </a>
                         </li> 
                     ))}
                     <li className='mx-2 px-2 py-0 menu-links'>
                         <Link className="nav-link text-white title-fonts" to='/order'>
                            {Orders.length > 0 ? 
                            <span className='tot-number text-center text-white bg-warning'> {Orders.length }</span>
                            : "" }
                             <h2><i className="bi bi-basket"> </i> </h2> 
                         </Link>
                     </li>
                     </ul>
                 </div>
             </nav>
            
            <div className="container">
                <div className="row">
                    {menuCategory.map(cate => (
                    <Fragment key={cate._id}>
                        <h2 className="title-fonts text_on_line" id={cate.name}>
                            <span className='text_on_line_span'>{cate.name}</span>
                        </h2>
                         {menuItems.filter(items => items.category._id === cate._id).map(product => (
                             <Item key={product._id}  product={product}></Item>
                         ))}
                    </Fragment>
                    ))}                           
                </div>
            </div>
     </div>   
    )
}

export default Menu;