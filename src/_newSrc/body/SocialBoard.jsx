import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Header from '../header/Nav';
import Footer from '../footer/Footer';

import './socialBoard.scss';

export default props => {

    const [ state, setState ] = useState([
        {
            link: require('../../img/peppers_on_board.jpg')
        },
        {
            link: require('../../img/hot-peppers.jpg')
        },
        {
            link: require('../../img/black_plate_pork.jpg')
        },
        {
            link: require('../../img/dry-flavors-herbs.jpg')
        },
        {
            link: require('../../img/bell-pepper-left.jpg')
        },
        {
            link: require('../../img/blur-pepper.jpg')
        },
        {
            link: require('../../img/spoons&pepper.jpg')
        },
        {
            link: require('../../img/spoons&pepper.jpg')
        },
        {
            link: require('../../img/image_burned.png')
        },
        {
            link: require('../../img/peppers_on_board.jpg')
        },
        {
            link: require('../../img/peppers_on_board.jpg')
        },
        {
            link: require('../../img/peppers_on_board.jpg')
        },
        {
            link: require('../../img/peppers_on_board.jpg')
        }
    ])

    const [file, setFile] = useState()

    const hideInput = () => {

        const input = document.querySelector('.upload-container')
        input.classList.toggle('show-input')
        
    }   

 

    window.addEventListener('scroll', () => {

        const footer = document.querySelector('.footer2')

        window.scrollY > 500 ? footer.classList.add('slide-up'): footer.classList.remove('slide-up')
        

    })

    return (
        <div className="social-board">

            <MediaQuery minWidth={800}>

                <Header className="standard" history={props.history} />
            </MediaQuery>
            <MediaQuery maxWidth={790}>

                <Header className="mobile" />
            </MediaQuery>
            

            <div className="board">
                {

                    state.map(item => (
                    
                        <div className="post-item" >


                            <div className="icon-container">

                                <div className="icons">
                                    <i class="far fa-heart fa-3x" />
                                    <i class="far fa-comment fa-3x"  />
                                </div>
                                <p> 200 Likes</p>

                            </div>

                            <img src={item.link} />


                        </div>
                    
                    ))
                }
            </div>

            <div className="upload-container">

                <input type="text" placeholder="Your photo caption. . ." />

                <input type="file" name="file" id="file"/>

                <label htmlFor="file" aria-lable="file" for="file">
                    {/* <i class="fas fa-upload fa-3x" /> */}
                    Choose your file . . 
                </label>

            </div>

            <a href="https://www.instagram.com/simes.pepper/" target="_blank"><i class="fab fa-instagram social-insat fa-7x"></i></a>
            {/* <i class="fas fa-plus-circle fa-6x" onClick={hideInput}></i> */}
            
            <MediaQuery minWidth={800}>

                <Footer />
            </MediaQuery>
        </div>
    )
}