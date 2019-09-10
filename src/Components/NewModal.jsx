import React from 'react';
import { Route, Link } from 'react-router-dom';

import '../Styles/modalStyles.scss';
import TestCheckout from './TestCheckout';
import TestIte from './TestIte';
import PaymentOutcome from './PaymentOutcome';

export default ({ pepperState, total }) => {

    
  const handleToken = async (token, addresses) => {
    console.log(token, addresses)
    // const res = await Axios.post('localhost:3003/checkout', { token, products })
    // const { status } = res.data;

    // if(status === 'success') toast('Success! Check email for details')
    // toast('Something went wrong', { type: "error"})
  }

    return (
        <div className="modal_container">
            <Route path='/item' render={props => <TestIte {...props} pepperState={pepperState} />} />
            <Route exact path="/checkout" render={props => <TestCheckout {...props} pepperState={pepperState} />}/>
            <Route path="/checkout-complete" component={ PaymentOutcome}/>
        </div>
    )
}