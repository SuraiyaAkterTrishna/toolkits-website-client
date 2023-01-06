import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://toolkits.up.railway.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-12">
      <div>
        <h2 className="text-xl text-center text-primary font-bold">THEY SAY</h2>
        <h1 className="text-6xl text-center font-bold">Testimonials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
        {reviews
          .map((review) => <Review key={review._id} review={review}></Review>)
          .reverse()}
      </div>
    </div>
  );
};

export default Reviews;
