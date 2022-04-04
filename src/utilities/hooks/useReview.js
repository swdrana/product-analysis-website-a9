const { useState, useEffect } = require("react")

const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('reviews.json').then(res=>res.json()).then(data=>setReview(data));
    },[]);

    return [review, setReview]; 
}
export default useReview;