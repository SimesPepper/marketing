import React from 'react';
import MediaQuery from 'react-responsive';

import Nav from '../header/Nav';
import Footer from '../footer/Footer';

import './about.scss';

export default props => {

    return(

        <div className="about">
            <MediaQuery minWidth={800}>

                <Nav className="standard" history={props.history} />
            </MediaQuery>

            <MediaQuery maxWidth={790}>

                <Nav className="mobile" />
            </MediaQuery>

            <div className="overlay"></div>

            <div className="text-container">

    
                <p className="text">
                    The story of <span class="simes_span" >S<span class="i">i</span>'Me's Pepper</span> starts with a young girl who strived for success 
                    at a young age by being a self taught business woman and entrepreneur in Mamfe,
                    Cameroon. She utilized her business savvy and cookery skills to launch 
                    businesses that would provide for her growing family all with only an 
                    elementary level schooling.
                </p>
                <p className="text">

                    This woman was my grandmother and her story resides
                    and persists with influencing her grandkids to be better. <span class="simes_span" >S<span class="i">i</span>'Me's Pepper</span> comes 
                    from that dream as it’s named and influenced after her and her many recipes.
                    Come join in the movement of fostering the footsteps of our ancestors and 
                    remember where we came from.
                </p>
               

            </div>


            <div className="statement">
                <img className="middle_logo" src={require('../../img/image_burned.png')} alt=""/>
                {/* <h1>S<span className="i">I</span>'ME'S P<span className="i e">E</span>RRER:</h1> */}
                <h3>PROVIDING LOVE IN A JAR FOR THOSE WHO SEEK TO BE ADVENTUROUS . . . </h3>
            </div>
            <Footer />
        </div>
    )
}