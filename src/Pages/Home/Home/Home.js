import React from 'react';
import Banner from '../../Banner/Banner';
import AskedQuestions from '../AskQuestions/AskedQuestions';
import BestPlaces from '../BestPlaces/BestPlaces';
import Reviews from '../Reviews/Reviews';
import CanadianPlaces from '../TouristsPlaces/CanadianPlaces';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Reviews />
            <BestPlaces></BestPlaces>
            <CanadianPlaces></CanadianPlaces>
            <AskedQuestions />
        </div>
    );
};

export default Home;