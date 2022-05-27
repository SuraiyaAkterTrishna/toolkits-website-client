import React from 'react';
import clients from '../../../assets/icons/group.png';
import revenue from '../../../assets/icons/money.png';
import reviews from '../../../assets/icons/rating.png';
import tools from '../../../assets/icons/tools.png';
import BusinessSummaryCard from './BusinessSummaryCard';

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 px-12 py-12'>
            <BusinessSummaryCard count="100+" name="Happy Clients" img={clients}></BusinessSummaryCard>
            <BusinessSummaryCard count="120M+" name="Annual Revenue" img={revenue}></BusinessSummaryCard>
            <BusinessSummaryCard count="33k+" name="Reviews" img={reviews}></BusinessSummaryCard>
            <BusinessSummaryCard count="50+" name="Tools" img={tools}></BusinessSummaryCard>
        </div>
    );
};

export default BusinessSummary;