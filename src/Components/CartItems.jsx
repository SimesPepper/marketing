import React from 'react';

import Item from './Item';
import '../Styles/cart_item.scss';

export default props => {
    
    if(props.cart.length < 1){
        return(
            <div className="cart_item_container">
                <p>Your cart is empty</p>
            </div>
        )
    }else{
        return(
            <div className="cart_item_container">
                    
                { props.cart.map(item => <Item setCart={ props.setCart } cart={props.cart} name={item.name} key={item.id} id={item.id} />) }
                
            </div>

        )
    }
}