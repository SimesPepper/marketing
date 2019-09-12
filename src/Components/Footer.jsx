import React from 'react';

import Nav from './Nav'
import Logo from './Logo'
import '../Styles/footer.scss'

export default _ => {

    return(
        <div className="footer">

            <div className="link_container">
                <a className="nav_links" href="#">Login</a>
                <a className="nav_links" href="#">Register</a>
            </div>

            <div className="footer_copy">
                <Logo />
                <p>&copy;2019 by Si'Me's Pepper</p>
            </div>

        </div>
    )
}