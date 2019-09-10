import React from 'react';
import { Link } from 'react-router-dom';
import TestCheckout from './TestCheckout';

import '../Styles/modalStyles.scss';


export default ({pepperState}) => {

    return(
        <>
            <p className="description">{ pepperState.description }</p>
            <h1 className="display" style={{color: `${pepperState.color}`, textShadow: '1px 1px 5px black'}}>{ pepperState.flavor }</h1>
            <img src={require('../img/simes_bottle_top_burned.png')}/>
            <h1>Price: ${ pepperState.price }</h1>
            <h2>Shipping: ${ pepperState.shipping }</h2>
            <h2 className="total">Total: ${ pepperState.price + pepperState.shipping }</h2>
            <p className="add_to_cart">Add To Cart</p>
            <Link to='/checkout' component={TestCheckout} ><p className="checkout">Checkout</p></Link>
        </>
    )
}