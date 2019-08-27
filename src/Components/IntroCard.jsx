import React, { useState } from 'react';
import { Tween, TimeLine } from 'react-gsap';
import { Controlor, Scene } from 'react-scrollmagic';


import '../Styles/introCardStyles.scss';
import Header from './Header';
import MiddleCard from './MiddleCard';

export default _ => {
    return (
        <div className="intro_card_div component_container">
            <Header />
            <div className="bottle_logo" /> 
            <div className="cta"><span className="simes_span">SP<span className="i">I</span>CE</span> UP YOUR L<span className="i">I</span>FE!</div>
            {/* <MiddleCard /> */}
        </div>

    )
}