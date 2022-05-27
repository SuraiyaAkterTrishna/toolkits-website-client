import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import BusinessSummary from './BusinessSummary';
import Policy from './Policy';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;