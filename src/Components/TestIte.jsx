import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestCheckout from './TestCheckout';

import '../Styles/modalStyles.scss';


export default (props) => {
    console.log(props)
    
    

        const addToCart = _ => {
            props.cart.length > 0?
            props.setCart([...props.cart, props.pepperState]):
            props.setCart([props.pepperState])
            
        }

  
    return(
        <>
            <p className="description">{ props.pepperState.description }</p>
            <h1 className="display" style={{color: `${props.pepperState.color}`, textShadow: '1px 1px 5px black'}}>{ props.pepperState.flavor }</h1>
            <img src={require('../img/simes_bottle_top_burned.png')}/>
            <h1>Price: ${ props.pepperState.price }</h1>
            <h2>Shipping: ${ props.pepperState.shipping }</h2>
            <h2 className="total">Total: ${ props.pepperState.price + props.pepperState.shipping }</h2>
            <p className="add_to_cart" onClick={addToCart}>Add To Cart</p>
            <Link to='/checkout' component={TestCheckout} ><p className="checkout">Checkout</p></Link>
        </>
    )
}