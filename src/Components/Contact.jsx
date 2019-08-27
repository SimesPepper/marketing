import React from 'react';

import Reviews from './Reviews';
import Footer from './Footer';
import '../Styles/contact.scss';


export default _ => {

    return (
        <div className="contact_div bordeaux">
            <div className="contact component_container">
                {/* <h1>WE WANT TO HEAR FROM YOU!</h1> */}
                <div className="contact_text">
                    <h2>GET IN TOUCH</h2>
                    <h3>
                        Interested in doing business with <span class="simes_span" >S<span class="i">i</span>'Me's Pepper</span>?
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
                        <a href='mailto:Support@Simespepper.com?Subject=sims testing' className="sims_email_link">Support@<span className="simes_span" >S<span class="i">i</span>mespepper</span>.com</a>
                        <div className="social_media">
                            <i className="fab fa-instagram fa-2x instagram_logo"/>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <h1>LEAVE US YOUR THOUGHTS</h1>
                    <Reviews />
                </div>
            </div>
            <Footer />
        </div>
    )
}