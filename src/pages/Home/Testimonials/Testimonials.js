import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "../Review/Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Tim Burgess",
      review:
        "Tool Kits has over the last 5 years provided us with a significant portion of stainless steel products. During the time of our association with Tool Kits, we have noticed many of the Management and Sales staff to be loyal, long-term employees. Having the right staff is absolutely critical to your success, as we share the same values in our business.",
      location: "New York",
      img: people1,
    },
    {
      _id: 2,
      name: "Cynthia Johnson",
      review:
        "We have been associated with this factory for over 10 years and they continue to be our preferred supplier of stainless steel products. Tool Kits always strives to meet the demands and we are impressed with the flexibility and customer focus shown by all team members. We would certainly recommend Atlas Steels as a supplier to any prospective client.",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Benjamin Hansen",
      review:
        "Greatest appreciation to you and your team for the outstanding job you did for us. The factory is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab Communications as our online marketing partner.",
      location: "Chicago",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div>
        <h2 className="text-xl text-center text-primary font-bold">THEY SAY</h2>
        <h1 className="text-6xl text-center font-bold">Testimonials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
