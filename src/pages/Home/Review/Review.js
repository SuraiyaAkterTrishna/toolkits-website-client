import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-12 mx-auto">
      <div className="card-body items-center">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={review.image} alt="" />
          </div>
        </div>
        <h3 className="text-2xl font-bold">{review.name}</h3>
        <p className="text-gray-500">Ratting: <span>{review.ratting} star</span></p>
        <p className="text-gray-500"><span>"</span>{review.review}<span>"</span></p>
      </div>
    </div>
  );
};

export default Review;
