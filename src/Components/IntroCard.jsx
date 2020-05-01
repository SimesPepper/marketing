import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Header from './head/Header';
import Footer from './Footer';
import MakePurchase from './MakePurchase';

// import '../Styles/introCardStyles.scss';

export default props => {

    const mobile = 700;
    const desktop = 701;

    return (
        <div className="intro_card_div component_container">

            <MediaQuery maxWidth={mobile}>
                {/* <div className="bottle_logo" />  */}
            </MediaQuery>

            <MediaQuery minWidth={desktop}>

                <Header 
                    cart={ props.cart } 
                    setCart={ props.setCart }
                    history={ props.history }
                />
                <div className="bottle_logo" /> 
                <MakePurchase />
                <Footer />

            </MediaQuery>
        </div>

    )
}