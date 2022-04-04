import React, { useEffect, useState } from "react";
import useReview from "../../utilities/hooks/useReview";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <h2 className="text-start m-5">Reviews</h2>
      <div className="all-reviews m-5 row">
        {
          reviews.map(rev=><Review key={rev.id} rev={rev}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
