import React from  'react';
import './map.css';

import MenuItem from './menuItem';
import { data } from './data/menu';
import MenuCategory from './MenuCategory';

function Menu(){
        
    const {category} = data;
    return (
        <div>
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