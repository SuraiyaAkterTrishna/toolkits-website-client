import React from 'react';

const BusinessSummaryCard = ({img, count, name}) => {
    return (
        // <div class={`card lg:card-side bg-base-100 shadow-xl`}>
        //     <figure><img src={img} alt="Album"/></figure>
        //     <div class="card-body">
        //         <h2 class="card-title">{cardTitle}</h2>
        //         <p>{cardDetail}</p>
        //     </div>
        // </div>
        <div className="card lg:max-w-lg bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="w-20 p-2 border-2 rounded-full border-primary	" />
            </figure>
            <div className="card-body items-center text-center p-0">
                <h2 className="card-title text-6xl font-bold">{count}</h2>
                <p><span className='text-primary text-xl'>{name}</span></p>
            </div>
        </div>
    );
};

export default BusinessSummaryCard;