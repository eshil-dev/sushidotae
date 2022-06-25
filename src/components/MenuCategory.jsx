import React from 'react';
import MenuItems from './menuItem';
import './map.css';

function MenuCategory(props){
    const {category} = props;
    return(
        < >
            <h2 className="title-fonts text_on_line" id={category.name}>
                <span className='text_on_line_span'>{category.name}</span>
            </h2>
            <MenuItems product = {category.product}></MenuItems>
        </> 
    )
}

export default MenuCategory;