import React, { useState } from 'react';

import Reviews from './Reviews';
import Footer from './Footer';
import '../Styles/reviewComponent.scss';
export default _ => {

    const [comment, setComment] = useState('');
    const [ reviewState, setReviewState ] = useState([
        {
            name: 'Amy Smalls',
            pictureName: '',
            comment: 'This was great!! I love it. Thank you!',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'James Bigs',
            pictureName: '',
            comment: 'Shit was lit',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'Becky Medium',
            pictureName: '',
            comment: 'Thank you for the fast delivery',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'Ben Xlarge',
            pictureName: '',
            comment: 'Party time',
            postedDate: Date.now() //should use moment.js
        },
        {
            name: 'Kevin Huge',
            pictureName: '',
            comment: 'Today was a good day',
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
            postedDate: Date.now()//should use momentjs
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
        console.log(e.target.value)
        if(comment !== ''){

            updateState(comment)
            setComment('');
        }
    }

    return(
        <>
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
        </>
        
    )
}