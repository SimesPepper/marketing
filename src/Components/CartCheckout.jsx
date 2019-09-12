import React from 'react';
import {Elements} from 'react-stripe-elements';
import CartCheckoutForm from './CartCheckoutForm';
import { getThemeProps } from '@material-ui/styles';

export default ( props ) => {
    return(
      <Elements>
        <CartCheckoutForm cart={ props.cart } />
      </Elements>
    )
}