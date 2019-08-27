import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import '../Styles/headerStyles.scss';

export default _ => {

    return(
        <div className="header">
            <Logo />
            <Nav />
        </div>
    )
}