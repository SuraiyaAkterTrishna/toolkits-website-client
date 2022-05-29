import React from 'react';
import clients from '../../../assets/icons/group.png';
import revenue from '../../../assets/icons/money.png';
import reviews from '../../../assets/icons/rating.png';
import tools from '../../../assets/icons/tools.png';
import BusinessSummaryCard from './BusinessSummaryCard';

const BusinessSummary = () => {
    return (
        <div className='mt-20'>
            <p className='text-5xl font-bold tracking-widest text-primary text-center m-5'>YOU ARE NEVER JUST A NUMBER</p>
            <p className='text-lg text-gray-400 text-center w-2/5 mx-auto'>We work with you one-on-one to customize and develop your business. We deliver greater values and supports because we truly value your business.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 px-12 pt-6'>
                <BusinessSummaryCard count="1000+" name="Happy Clients" img={clients}></BusinessSummaryCard>
                <BusinessSummaryCard count="120M+" name="Annual Revenue" img={revenue}></BusinessSummaryCard>
                <BusinessSummaryCard count="133k+" name="Reviews" img={reviews}></BusinessSummaryCard>
                <BusinessSummaryCard count="500+" name="Tools" img={tools}></BusinessSummaryCard>
            </div>
        </div>
    );
};

export default BusinessSummary;