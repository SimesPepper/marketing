import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './header2.scss';

export default props => {


    
    

    return (
        <div className={`header2 ${props.className || 'standard'}`}>

            <MediaQuery minWidth={800}>
                <img className="nav-logo" src={require('../../img/white_logo.png')} alt="si'me's pepper logo"/>
            </MediaQuery>

            
         

            <nav className="nav">
                <NavLink to="/" className="nav-links" href="#"> WELCOME </NavLink>
                <NavLink to="/about" className="nav-links" > ABOUT </NavLink>
                <NavLink to="/social-board" className="nav-links" > SOCIAL BOARD </NavLink>
                <NavLink to="/contact-us" className="nav-links" > CONTACT </NavLink>
            </nav>
        </div>
    )
}