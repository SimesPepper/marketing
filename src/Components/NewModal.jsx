import React from 'react';
import { Route, Link } from 'react-router-dom';

import '../Styles/modalStyles.scss';
import TestCheckout from './payment/TestCheckout';
import TestIte from './payment/TestIte';
import PaymentOutcome from './payment/PaymentOutcome';

export default ({ pepperState, cart, setCart, close }) => {
    

    return (
      
        <div className="modal_container">
            <p className="close_btn" onClick={close}>X</p>
            <Route path='/item' render={props => <TestIte {...props} pepperState={pepperState} cart={ cart } setCart={ setCart } />} />
            <Route path="/checkout" render={props => <TestCheckout {...props} pepperState={ pepperState } cart={cart}/>}/>
            <Route path="/checkout-complete" component={ PaymentOutcome}/>
        </div>
    )
}