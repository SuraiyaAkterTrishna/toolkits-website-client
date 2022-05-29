import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';
import BusinessSummary from './BusinessSummary';
import Policy from './Policy';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <Policy></Policy>
            <Gallery></Gallery>
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;