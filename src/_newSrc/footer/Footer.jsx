import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss'

export default _ => {  

    useEffect(() => {

        window.addEventListener('scroll', () => {

            window.scrollY >= 900 ?
            document.querySelector('.footer2').classList.add('slide-up'):
            document.querySelector('.footer2').classList.remove('slide-up')

        })

    })

    return (
        <div className="footer2" >

            <p className="email" >Simespepper@gmail.com</p>

            <div className="contacts">
                <a href="https://www.instagram.com/simes.pepper/" target="_blank">

                    <i class="fab fa-instagram fa-2x" />
                </a>

                <a href="mailto:Simespepper@gmail.com?Subject=Si'me's pepper">

                    <i class="far fa-envelope fa-2x"  />
                </a>
            </div>

            <p>Si'me's Pepper&copy; | 2020</p>
        </div>
    )
}