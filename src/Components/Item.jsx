import React from 'react';
import { getThemeProps } from '@material-ui/styles';
import CartCheckout from './CartCheckout';

export default props => {
    console.log(props)
    const deleteItem = id => {
       const newCart = props.cart.filter(item => item.key != id)
       props.setCart([...newCart])
    }
    return(
        <div className="item_container">
            <p> { props.name } <span className="cart_delete_button" onClick={e => deleteItem(props.key)}>Delete</span></p>
        </div>
    )
}