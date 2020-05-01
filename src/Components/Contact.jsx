import React, { useState, useEffect } from 'react';

import Header from './head/Header';

import '../Styles/contact.scss';



export default _ => {

   

    
    return (
            <div className="contact component_container">
                
                <Header />

                <div className="contact_text">
                    <h2>GET IN TOUCH</h2>
                    <h3>
                        Interested in doing business with <span className="simes_span" >S<span className="i">i</span>'Me's Pepper</span>?
                    </h3>
                    <p>

                        Contact us to see what we
                        can do for you. 
                        
                    </p>
                    <p>

                        Our business hours are M - F: 8am - 8pm
                    </p>
                    
                    <div className="contact_info">
                        <p>St.Paul, MN, USA</p>
                        <a href="mailto:Simespepper@gmail.com?Subject=Si'me's pepper" className="sims_email_link"><span className="simes_span" >S<span class="i">i</span>mespepper</span>@gmail.com</a>
                        <div className="social_media">
                            <a href="https://www.instagram.com/simes.pepper/" target="_blank"><i className="fab fa-instagram fa-5x instagram_logo"/></a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        
    )
}