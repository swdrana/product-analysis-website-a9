import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    fetch('reviews.json').then(res=>res.json()).then(data=>setReviews(data))
  },[]);
  return (
    <div>
      <h2 className="text-start m-5">Reviews</h2>
      <div className="all-reviews m-5">
        {
          reviews.map(rev=><Review key={rev.id} rev={rev}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
