import React from 'react';
import Nav from '../header/Nav';
import MediaQuery from 'react-responsive';


export default _ => {

    return (
        <div className="home" >

                <MediaQuery maxWidth={790}>
                    <img src={require('../../img/white_logo.png')} alt=""/>    
                </MediaQuery>

                <MediaQuery minWidth={800}>

                    <h1 className="tag-line" >SI'ME'S PEPPER</h1>
                </MediaQuery>
                <h2 className="sub-tag">BE BOLD<span className="exclaim">!</span></h2>
        </div>
    )
}