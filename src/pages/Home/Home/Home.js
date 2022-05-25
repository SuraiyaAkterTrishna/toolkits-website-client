import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import Banner from '../Banner/Banner';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Policy></Policy>
        </div>
    );
};

export default Home;