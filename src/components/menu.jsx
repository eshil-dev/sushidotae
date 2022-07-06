import React, { Fragment, useState } from  'react';
import './style.css';
import { data } from './data/menu';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {addItem,increaseItem, decreaseItem} from './store/cartSlice'
import Item from './Item';
import MenuItems from './menuItem';
function Menu(){
    const Orders = useSelector((state) => state.Orders.cart)
    const dispatch = useDispatch()
    const [dataItems, setDataItems] = useState(data.category);
    
    // const {category} = data;
    const handleIn_Cart = (product) =>{
      console.log("clicked");
      console.log(product)
    };

    return (
        <div className='text-end'>
            <nav className="navbar navbar-expand-lg sticky-top bg">
                <div className="container-fluid">
                    <ul className="navbar-nav mx-auto my-lg-0 flex_style" >
                        {dataItems.map(cate => (
                            <li key={cate.id} className="mx-2 px-2 py-0 menu-links">
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
                    {dataItems.map(cate => (
                    <Fragment key={cate.id}>
                        <h2 className="title-fonts text_on_line" id={cate.name}>
                            <span className='text_on_line_span'>{cate.name}</span>
                        </h2>
                        {cate.product.map((product) => (
                            <Item product={product}></Item>
                        ))}
                    </Fragment>
                    ))}                           
                </div>
            </div>
           
        </div>
    );
}

export default Menu;