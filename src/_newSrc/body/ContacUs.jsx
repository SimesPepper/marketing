import React from 'react';
import MediaQuery from 'react-responsive';

import Header from '../header/Nav';
import Footer from '../footer/Footer';

import './contact.scss'
export default _ => {

    return (

        <div className="contact-us">

            <MediaQuery maxWidth={790}>

                <Header className="mobile" />
            </MediaQuery>

            <MediaQuery minWidth={800}>

                <Header className="standard" />
            </MediaQuery>

            <form >
                <div className="contact-info">
                    <img src={require('../../img/white_logo.png')} alt=""/>
                    <div className="text">
                        
                        <p className='comp-name'>
                            S<span className="i">i</span>'me's Pepper&copy;
                        </p>
                        <p className="insta-name">
                            @simes.pepper
                        </p>
                        <p>
                            simespepper@gmail.com
                        </p>
                        <p>
                            Minneapolis, Minnesota
                        </p>
                    </div>
                </div>

                <div className="name">
                    <input className="name" type="text" name="firstName" placeholder="First name" />
                    <input className="name" type="text" name="lastName" placeholder="Last name" />
                </div>

                <input type="email" className="email" name="email" placeholder="Email" />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Tell us your thoughts . . . " />

                <input type="submit" className="button" value="Submit"/>

            </form>
            <Footer />
        </div>
    )

}