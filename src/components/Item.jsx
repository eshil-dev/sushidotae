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
       if (i._id === product._id){
            is_in_cart = true;
            item_in_state = i;
        }
    })
    return(
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card border shadow-sm text-center my-2 card_border_color">
                <img src={product.imageUrl} className="card-img-top " alt="menu item"/>
                <div className="card-body">
                    <h5 className="card-title" >{product.name}</h5>
                    <span className='text_color'>{product.price} AED</span>
                    <p className="card-text">{product.description}</p>
                    {is_in_cart ? 
                        <span className='btn bg text-white rounded-0 p-0'>
                            <button onClick={()=>dispatch(decreaseItem(product))} className='increase'>-</button>
                            <span className='px-3'>{item_in_state.qty}</span>
                            <button className='increase' onClick={()=>dispatch(increaseItem(product))} >+</button>
                        </span>
                    :
                    <span
                        onClick={()=>dispatch(addItem(product))}  
                        className="rounded-0 btn bg text-white">add to your order
                    </span>
                    }
                </div>
            </div>
        </div>
    )
}
export default Item;