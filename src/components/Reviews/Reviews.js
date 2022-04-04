import React from "react";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  return (
    <div>
      <h2 className="text-start m-5">Reviews</h2>
      <div className="all-reviews m-5">
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </div>
  );
};

export default Reviews;
