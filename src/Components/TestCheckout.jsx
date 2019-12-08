import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default ({cart, pepperState, history}) => {
    return(
      <Elements>
       <CheckoutForm 
            pepperState={{pepperState, cart, price: pepperState.price, history}}
            // cart={cart}
            // price={pepperState.price}
            
       />
      </Elements>
    )
}