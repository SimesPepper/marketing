import React from 'react';
import MediaQuery from 'react-responsive';


export default props => {

    return(
        <div className="order-summary">

                <div className="item" >

                    <MediaQuery minWidth={800}>
                        <img src={require('../../img/simes_bottle_top_burned.png')} alt=""/>
                    </MediaQuery>

                    <div className="columns">
                        <div className="cat">

                            <p>Quantity</p>
                            <p>flavor</p>
                            <p>total</p>
                        </div>
                        {
                            props.location.state.cart.map(item => (
                                <div className="item-description">
                                    <p> { item.quantity || 1 } </p>
                                    <p> { item.heat } </p>
                                    <p> ${ item.price } </p>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>

                <div className="summary-results" onClick={props.openItem}>

                    <p>Subtotal: ${ props.location.state.total }  </p>
                    <p style={{textDecoration: props.amount>39? 'line-through': 'none'}} >Shipping: { props.amount > 39 ? '$0.00': '$5.00'} </p>
                    <h1>Total: ${ props.amount } </h1>
                    <i class="fas fa-angle-down fa-2x arrow"></i>
                </div>


            </div>
    )
}