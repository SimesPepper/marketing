import React from 'react';

export default _ => {

    return(
        <nav>
            <a className="nav_links" href="#about" onClick={window.location.hash="about"}>Login</a>
            <a className="nav_links" href="#">Register</a>
            <i className="fa fa-shopping-basket fa-4x"></i>
        </nav> 
    )
}