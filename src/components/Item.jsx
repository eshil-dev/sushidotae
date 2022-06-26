import React from 'react';
import './style.css';

import {useSelector, useDispatch} from 'react-redux'
import {addItem,increaseItem, decreaseItem, removeItem} from './store/cartSlice'

function Item (props){
    const Orders = useSelector((state) => state.Orders.cart)
    const dispatch = useDispatch()
    
    const {product} = props;

    let is_in_cart = false;
    let item_in_state = null;
    Orders.map((i)=>{
       if (i.id === product.id){
            is_in_cart = true;
            item_in_state = i;
        }
    })

    if(is_in_cart){
        return(
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card rounded-0 border shadow-sm text-center my-2 card_border_color">
                    {/* <img src={product.image} className="card-img-top rounded-0" alt="menu item"/> */}
                    <div className="card-body">
                        <h5 className="card-title" >{product.name}</h5>
                        <span className='text_color'><i className="bi-star "></i> (5.0)</span>
                        <p className="card-text">{product.description}</p>
                        {/* <button onClick={()=>dispatch(removeItem(product))}>remove</button> */}
                        <span className='btn bg text-white rounded-0 p-0'>
                            <button onClick={()=>dispatch(decreaseItem(product))} className='increase'>-</button>
                             <span className='px-3'>{item_in_state.qty}</span>
                            <button className='increase' onClick={()=>dispatch(increaseItem(product))} >+</button>
                        </span>
                    </div>
                </div>
            </div>
        )

    }else{
        return(
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card rounded-0 border shadow-sm text-center my-2 card_border_color">
                    {/* <img src={product.image} className="card-img-top rounded-0" alt="menu item"/> */}
                    <div className="card-body">
                        <h5 className="card-title" >{product.name}</h5>
                        <span className='text_color'><i className="bi-star "></i> (5.0)</span>
                        <p className="card-text">{product.description}</p>
                        <a href="#" 
                            onClick={()=>dispatch(addItem(product))}  
                            className="rounded-0 btn bg text-white">add to your order
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Item;