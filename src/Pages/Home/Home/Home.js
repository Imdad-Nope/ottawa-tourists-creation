import React from 'react';
import Banner from '../../Banner/Banner';
import BestPlaces from '../BestPlaces/BestPlaces';
import CanadianPlaces from '../TouristsPlaces/CanadianPlaces';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <CanadianPlaces></CanadianPlaces>
            <BestPlaces></BestPlaces>
        </div>
    );
};

export default Home;