import React from 'react';

const BusinessSummaryCard = ({img, count, name}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="w-24 p-2 border-2 rounded-full border-primary	" />
            </figure>
            <div className="card-body items-center text-center p-0">
                <h2 className="card-title text-6xl font-bold">{count}</h2>
                <p><span className='text-primary text-xl'>{name}</span></p>
            </div>
        </div>
    );
};

export default BusinessSummaryCard;