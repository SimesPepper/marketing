import React from 'react';
import { getThemeProps } from '@material-ui/styles';
import CartCheckout from './CartCheckout';

export default props => {
    console.log(props)
    const deleteItem = id => {
        console.log(id)
       const newCart = props.cart.filter(item => item.id != id)
       props.setCart([...newCart])
       console.log(newCart)
    }
    return(
        <div className="item_container">
            <p> { props.name } <span className="cart_delete_button" onClick={e => deleteItem(props.id)}>Delete</span></p>
        </div>
    )
}