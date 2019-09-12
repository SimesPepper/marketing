import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default ( pepperState ) => {
  console.log(pepperState)
    return(
      <Elements>
       <CheckoutForm 
            pepperState={pepperState}
            
       />
      </Elements>
    )
}