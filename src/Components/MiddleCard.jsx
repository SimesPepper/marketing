import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import MediaQuery from 'react-responsive';
import '../Styles/middleCard.scss';
import PictureWindow from './PictureWindow';

export default _ => {
    const mobile = 700
    const desktop = 701

    return (
    
        <>
        
            <MediaQuery maxWidth={mobile}>
                    <div className="middle_card component_container">
                        
                        <img className="middle_logo" src={require('../img/image_burned.png')} alt=""/>

                        <div className="deliver sections">
                            <i className="fas fa-shipping-fast fa-6x"></i>
                            <p>We ship nationwide! Flat rate of $5 to anywhere in the US</p>
                        </div>
                   
                        <div className="free sections">
                        <i class="fas fa-money-bill-wave fa-6x"></i>
                            <p>No delivery fee for orders of 4 or more</p>
                        </div>

                        <div className="natural sections">
                            <i className="fas fa-check fa-6x"></i>
                            <p>Our recipes only uses all natural ingredients, passed down from generation to generation. Sure to spice up any of your meals</p>
                        </div>
                   
                    </div>
            </MediaQuery>
            <MediaQuery minWidth={desktop}>

                <div className="middle_card component_container">
                    <p>
                        The story of <span class="simes_span" >S<span class="i">i</span>'Me's Pepper</span> starts with a young girl who strived for success 
                        at a young age by being a self taught business woman and entrepreneur in Mamfe,
                        Cameroon. She utilized her business savvy and cookery skills to launch 
                        businesses that would provide for her growing family all with only an 
                        elementary level schooling. This woman was my grandmother and her story resides
                        and persists with influencing her grandkids to be better. <span class="simes_span" >S<span class="i">i</span>'Me's Pepper</span> comes 
                        from that dream as it’s named and influenced after her and her many recipes.
                        Come join in the movement of fostering the footsteps of our ancestors and 
                        remember where we came from.
                    </p>

                    <div className="statement">
                        <img className="middle_logo" src={require('../img/image_burned.png')} alt=""/>
                        {/* <h1>S<span className="i">I</span>'ME'S P<span className="i e">E</span>RRER:</h1> */}
                        <h3>PROVIDING LOVE IN A JAR FOR THOSE WHO SEEK TO BE ADVENTUROUS WITH THEIR PALETTES<span className="dot1">.</span><span className="dot2">.</span><span className="dot3">.</span></h3>
                    </div>
                </div>
            </MediaQuery>
        </>

    )
}