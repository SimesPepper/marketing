import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { getThemeProps } from '@material-ui/styles';
import TestCheckout from './TestCheckout';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

export default withRouter( ( props ) => {
  console.log(props)
    return(
      <Elements>
        

        <CheckoutForm pepperState={{...props, cart: props.cart, price: props.cart.reduce((acc, cur) => acc + cur.price, 0), setOpen: props.setOpen(), open: props.open}} />
      
        {/* <Route path={{pathname:"/checkout", state:'test'}} component={TestCheckout}/> */}
      </Elements>
    )
})