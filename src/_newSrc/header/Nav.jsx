import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './header2.scss';

export default _ => {


    useEffect(() => {

        const navHeader = document.querySelector('.header2');

        window.addEventListener('scroll', () => {

            window.scrollY > 70 ? 
                navHeader.classList.add('active-header2'):
                navHeader.classList.remove('active-header2')
        })
    }, []) // add active-header2 class to header on scroll away from top


    return (
        <div className="header2">

         
                <img className="nav-logo" src={require('../../img/white_logo.png')} alt="si'me's pepper logo"/>
         

            <nav className="nav">
                <NavLink to="/" className="nav-links" href="#"> WELCOME </NavLink>
                <NavLink to="/about" className="nav-links" > ABOUT </NavLink>
                <NavLink to="/fan-board" className="nav-links" > FAN BOARD </NavLink>
                <NavLink to="/contact" className="nav-links" > CONTACT </NavLink>
            </nav>
        </div>
    )
}