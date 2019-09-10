import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default _ => {

    return(
        <nav>
            <a className="nav_links" href="#">Login</a>
            <a className="nav_links" href="#">Register</a>
            <i className="fa fa-shopping-basket fa-4x"></i>
        </nav> 
    )
}