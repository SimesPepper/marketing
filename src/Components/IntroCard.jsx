import React, { useState } from 'react';
import MediaQuery from 'react-responsive';


import '../Styles/introCardStyles.scss';
import Header from './Header';
import MiddleCard from './MiddleCard';

export default props => {

    const mobile = 700;
    const desktop = 701;

    return (
        <div className="intro_card_div component_container">

            <MediaQuery maxWidth={mobile}>
                <div className="bottle_logo" /> 
            </MediaQuery>

            <MediaQuery minWidth={desktop}>
                <Header 
                    cart={ props.cart } 
                    setCart={ props.setCart }
                    history={ props.history }
                />
                <div className="bottle_logo" /> 
            </MediaQuery>
        </div>

    )
}