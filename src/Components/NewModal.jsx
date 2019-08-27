import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


import '../Styles/modalStyles.scss';

export default ({ products, handlePurchase }) => {
    
    
    return (
        <div className="modal_container">
            <h1>"10.99"</h1>
            <p>"chilli"</p>
            <p>"Shits hott"</p>

            <StripeCheckout 
                stripeKey="pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip"
                token={handlePurchase}
                amount='10.99'
                name='chilli'
                billingAddress
                shippingAddress
            />

            
        </div>
    )
}