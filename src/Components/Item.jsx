import React from 'react';
import { getThemeProps } from '@material-ui/styles';
import CartCheckout from './CartCheckout';

export default props => {

    const deleteItem = id => {
       const newCart = props.cart.filter(item => item.id != id)
       props.setCart([...newCart])
    }
    return(
        <div className="item_container">
            <p> { props.name } <span className="cart_delete_button" onClick={e => deleteItem(props.id)}>Delete</span></p>
        </div>
    )
}