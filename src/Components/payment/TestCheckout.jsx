import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default ({cart, pepperState, history}) => {
    return(
      <Elements>
       <CheckoutForm 
           pepperState={pepperState}
           cart={cart}
           price={pepperState.price}
           history={history}
            

            // cart={cart}
            // price={pepperState.price}
            
       />
      </Elements>
    )
}