import React from 'react';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    return (
        <div className='all-reviews'>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
        </div>
    );
};

export default Reviews;