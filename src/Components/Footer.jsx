import React from 'react';
import MediaQuery from 'react-responsive';
import Nav from './head/Nav'
import Logo from './head/Logo'
import '../Styles/footer.scss'

export default _ => {

    const mobile = 700
    const desktop = 701

    return(
        <>
        <MediaQuery maxWidth={mobile}>
            <div className="footer">
                <div className="footer_copy">
                    <Logo />
                    <p>&copy;2019 by Si'Me's Pepper</p>
                </div>

            </div>    
        </MediaQuery>
        <MediaQuery minWidth={desktop}>

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
        </MediaQuery>
        </>
    )
}