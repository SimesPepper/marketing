import React, { useState } from 'react';

import Header from '../header/Nav';
import Footer from '../footer/Footer';

import './socialBoard.scss';

export default _ => {

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

    const [comment, setComment] = useState('')

    const display = () => {

        console.log(comment)
    }

    console.log(comment)
    return (
        <div className="social-board">
            <Header />
            <div className="profile-info">
                <img src={require('../../img/white_logo.png')} alt=""/>
                <div className="info">

                    <a href="https://www.instagram.com/simes.pepper/">
                        <h2>@simes.pepper</h2>
                    </a>

                    <div className="text">
                        <p>Share your Si'me's moments with us!</p>
                        <p>Submit your entry here. . . </p>
                    </div>
                    
                    <input type="file" name="picSubmitted" />
                </div>
            </div>

            <div className="board">
                {

                    state.map(item => (
                    
                        <div className="post-item" onClick={display}>
                            <div className="overlay" />
                            <img src={item.link} />

                            <div className="comment-section">
                                <i class="far fa-heart fa-2x" />
                                <i class="far fa-comment fa-2x" />
                                <input type="text"  onChange={e => setComment(e.target.value)}  />
                            </div>

                        </div>
                    
                    ))
                }
            </div>

            <Footer />
        </div>
    )
}