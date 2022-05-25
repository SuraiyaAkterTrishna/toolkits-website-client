import React from 'react';
import PolicyCard from './PolicyCard';
import policy1 from '../../../assets/icons/policy1.webp';
import policy2 from '../../../assets/icons/policy2.webp';
import policy3 from '../../../assets/icons/policy3.webp';
import policy4 from '../../../assets/icons/policy4.webp';

const Policy = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 px-12 py-12'>
            <PolicyCard cardDetail="Free shipping on all order" cardTitle="FREE DELIVERY" img={policy1}></PolicyCard>
            <PolicyCard cardDetail="Support online 24 hours" cardTitle="ONLINE SUPPORT" img={policy2}></PolicyCard>
            <PolicyCard cardDetail="Back guarantee under 7 days" cardTitle="MONEY RETURN" img={policy3}></PolicyCard>
            <PolicyCard cardDetail="Onevery order over $30.00" cardTitle="MEMBER DISCOUNT" img={policy4}></PolicyCard>
        </div>
    );
};

export default Policy;