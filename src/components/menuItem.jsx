import React from "react";
import Item from "./Item";

function MenuItems(props){
    const {product} = props
    return (
        product.map((i) => (
            <Item key ={i.id} product={i}></Item>
        ))
    )
}

export default MenuItems;