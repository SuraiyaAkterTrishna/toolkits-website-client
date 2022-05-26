import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Policy from './Policy';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <Policy></Policy>
        </div>
    );
};

export default Home;