import React from 'react';
import Banner from '../../Banner/Banner';
import BestPlaces from '../BestPlaces/BestPlaces';
import BestSpot from '../BestSpot/BestSpot';
import BestViews from '../BestViews/BestViews';
import CanadianPlaces from '../TouristsPlaces/CanadianPlaces';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <CanadianPlaces></CanadianPlaces>
            <BestPlaces></BestPlaces>
            <BestSpot></BestSpot>
            <BestViews></BestViews>
        </div>
    );
};

export default Home;