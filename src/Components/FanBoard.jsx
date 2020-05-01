import React, { useState } from 'react';
import MediaQuery from 'react-responsive'

import Header from './head/Header';
import Footer from './Footer';
import Reviews from './Reviews';

import '../Styles/reviewComponent.scss';

export default _ => {
    const mobile = 700;
    const desktop = 701;

    const [comment, setComment] = useState('');
    const [ reviewState, setReviewState ] = useState([
  
        {
            name: 'Ben Xlarge',
            pictureName: '',
            comment: 'Woow, what a kick',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'Kevin Huge',
            pictureName: '',
            comment: 'Best on everything',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'Dan Man',
            pictureName: '',
            comment: 'i will be ordering again soon',
            postedDate: Date.now() //should use moment.js
        }
    ])

   
    const updateState = comment => {
        const newReview = {
            name: "Guest",
            comment: comment,
            postedDate: Date.now()//should use moment.js
        }
        setReviewState([
            ...reviewState, newReview
        ])
    }

    const handleOnChange = e => {
        setComment(e.target.value)
     
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(comment !== ''){

            updateState(comment)
            setComment('');
        }
    }

    return(
        <>
            <MediaQuery maxWidth={mobile}>
            <div className="review_main_div">
                    <h1>WE'D LIKE TO HEAR FROM YOU</h1>
                    <div className="review">
                        <div className="review_display">

                            {reviewState.map(review => (
                                <Reviews 
                                    pictureName={review.pictureName}
                                    name={review.name}
                                    comment={review.comment}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={desktop}>

                <Header />

                <div className="review_main_div">
                    <h1>LEAVE US YOUR THOUGHTS </h1>
                    <div className="review">
                        <div className="review_display">

                            {reviewState.map(review => (
                                <Reviews 
                                    pictureName={review.pictureName}
                                    name={review.name}
                                    comment={review.comment}
                                />
                            ))}
                        </div>
                        <form>
                            <textarea 
                                onChange={e => handleOnChange(e)}
                                className="input-box"
                                placeholder="Leave us your thoughts" 
                                type="text" 
                                value={comment}
                            />
                            <i class="fas fa-paper-plane fa-5x" onClick={e => handleSubmit(e)}></i>

                        </form>
                    </div>
                <Footer />
                </div>
            </MediaQuery>
        </>
        
    )
}