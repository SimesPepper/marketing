import React from 'react';

import '../Styles/payment_styles.scss';
export default props => {
    console.log(props)

    return(

        <div className="payment_screen">
            <h1>Thank you for your order. Please check email for receipt or click <a target='_blank' href={props.location.state.receipt}>here</a> to view and print receipt</h1>

        </div>
    )
}