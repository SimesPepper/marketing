import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './header2.scss';

export default props => {
    
    useEffect(() => {

        if(props.className === 'mobile'){

            const menuButton = document.querySelector('.hamburger')
            const menu = document.querySelector('.header2')
    
            menu.classList.contains('show')? menuButton.classList.add('close'): menuButton.classList.remove('close')
        }

    }, [props.className])
    

    return (
        <div className={`header2 ${props.className}`}>

            <MediaQuery minWidth={800}>

                    <img 
                        className="nav-logo"
                        src={require('../../img/white_logo.png')}
                        alt="si'me's pepper logo"
                        onClick={e => props.history.replace('/')}
                    />

            </MediaQuery>

            
         

            <nav className="nav">
                <NavLink to="/" className="nav-links" > WELCOME </NavLink>
                <NavLink to="/about" className="nav-links" > ABOUT </NavLink>
                <NavLink to="/social-board" className="nav-links" > SOCIAL BOARD </NavLink>
                <NavLink to="/contact-us" className="nav-links" > CONTACT </NavLink>
            </nav>
        </div>
    )
}