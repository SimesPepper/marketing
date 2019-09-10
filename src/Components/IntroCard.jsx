import React, { useState } from 'react';
import MediaQuery from 'react-responsive';


import '../Styles/introCardStyles.scss';
import Header from './Header';
import MiddleCard from './MiddleCard';

export default _ => {

    const mobile = 700;
    const desktop = 701;

    return (
        <div className="intro_card_div component_container">
            <MediaQuery maxWidth={mobile}>
            <div className="bottle_logo" /> 
                <div className="cta">
                    <span className="simes_span">
                        SP
                        <span className="i">
                            I
                        </span>
                        CE
                    </span> 
                        UP YOUR L
                    <span className="i">
                        I
                    </span>FE!
                </div>
            </MediaQuery>
            <MediaQuery minWidth={desktop}>
                <Header />
                <div className="bottle_logo" /> 
                {/* <div className="cta">
                    <span className="simes_span">
                        SP
                        <span className="i">
                            I
                        </span>
                        CE
                    </span> 
                        UP YOUR L
                    <span className="i">
                        I
                    </span>FE!
                </div> */}
            </MediaQuery>
        </div>

    )
}