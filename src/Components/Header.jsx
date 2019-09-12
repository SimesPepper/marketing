import React from 'react';
import {withRouter} from 'react-router';
import Logo from './Logo';
import Nav from './Nav';
import '../Styles/headerStyles.scss';

export default props => {
console.log(props)
    return(
        <div className="header">
            <Logo />
   

            <Nav 
                cart={ props.cart } 
                setCart={ props.setCart }
            />
           

        </div>
    )
}