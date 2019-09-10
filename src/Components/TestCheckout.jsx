import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default (pepperState, total) => {
  console.log(total)
    return(
      <Elements>
       <CheckoutForm 
            pepperState={pepperState}
            
       />
      </Elements>
    )
}