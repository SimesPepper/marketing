import React from 'react';
import { Route, Link } from 'react-router-dom';

import '../Styles/modalStyles.scss';
import TestCheckout from './TestCheckout';
import TestIte from './TestIte';
import PaymentOutcome from './PaymentOutcome';

export default ({ pepperState, cart, setCart }) => {
    
  const handleToken = async (token, addresses) => {
    console.log(token, addresses)
    // const res = await Axios.post('localhost:3003/checkout', { token, products })
    // const { status } = res.data;

    // if(status === 'success') toast('Success! Check email for details')
    // toast('Something went wrong', { type: "error"})
  }
  console.log(cart)
    return (
      
        <div className="modal_container">
            <Route path='/item' render={props => <TestIte {...props} pepperState={pepperState} cart={ cart } setCart={ setCart } />} />
            <Route path="/checkout" render={props => <TestCheckout pepperState={ pepperState } />}/>
            <Route path="/checkout-complete" component={ PaymentOutcome}/>
        </div>
    )
}